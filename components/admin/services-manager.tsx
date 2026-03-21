'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Plus, Edit2, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface Service {
  id: string
  titulo: string
  descripcion: string
  precio: number | null
  icono: string
  orden: number
  activo: boolean
}

export function ServicesManager() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    precio: '',
    icono: 'scissors',
    orden: 0,
    activo: true,
  })

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      setLoading(true)
      const supabase = createClient()
      const { data, error } = await supabase
        .from('servicios')
        .select('*')
        .order('orden')

      if (error) throw error
      setServices(data || [])
    } catch (err) {
      console.error('Error fetching services:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const supabase = createClient()
      const dataToSave = {
        titulo: formData.titulo,
        descripcion: formData.descripcion,
        precio: formData.precio ? parseFloat(formData.precio) : null,
        icono: formData.icono,
        orden: formData.orden,
        activo: formData.activo,
      }

      if (editingId) {
        const { error } = await supabase
          .from('servicios')
          .update(dataToSave)
          .eq('id', editingId)

        if (error) throw error
      } else {
        const { error } = await supabase
          .from('servicios')
          .insert([dataToSave])

        if (error) throw error
      }

      setFormData({
        titulo: '',
        descripcion: '',
        precio: '',
        icono: 'scissors',
        orden: 0,
        activo: true,
      })
      setEditingId(null)
      await fetchServices()
    } catch (err) {
      console.error('Error saving service:', err)
    }
  }

  const handleEdit = (service: Service) => {
    setFormData({
      titulo: service.titulo,
      descripcion: service.descripcion,
      precio: service.precio?.toString() || '',
      icono: service.icono,
      orden: service.orden,
      activo: service.activo,
    })
    setEditingId(service.id)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar este servicio?')) return

    try {
      const supabase = createClient()
      const { error } = await supabase
        .from('servicios')
        .delete()
        .eq('id', id)

      if (error) throw error
      await fetchServices()
    } catch (err) {
      console.error('Error deleting service:', err)
    }
  }

  if (loading) {
    return <div>Cargando servicios...</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-6">Gestión de Servicios</h2>

        <form onSubmit={handleSubmit} className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              placeholder="Título"
              value={formData.titulo}
              onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
              required
            />
            <Input
              placeholder="Ícono"
              value={formData.icono}
              onChange={(e) => setFormData({ ...formData, icono: e.target.value })}
            />
          </div>

          <Textarea
            placeholder="Descripción"
            value={formData.descripcion}
            onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
            required
            rows={3}
          />

          <div className="grid md:grid-cols-3 gap-4">
            <Input
              type="number"
              placeholder="Precio"
              value={formData.precio}
              onChange={(e) => setFormData({ ...formData, precio: e.target.value })}
              step="0.01"
            />
            <Input
              type="number"
              placeholder="Orden"
              value={formData.orden}
              onChange={(e) => setFormData({ ...formData, orden: parseInt(e.target.value) })}
            />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.activo}
                onChange={(e) => setFormData({ ...formData, activo: e.target.checked })}
              />
              <span>Activo</span>
            </label>
          </div>

          <div className="flex gap-2">
            <Button type="submit" className="bg-primary hover:bg-accent">
              {editingId ? 'Actualizar' : 'Crear'}
            </Button>
            {editingId && (
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setEditingId(null)
                  setFormData({
                    titulo: '',
                    descripcion: '',
                    precio: '',
                    icono: 'scissors',
                    orden: 0,
                    activo: true,
                  })
                }}
              >
                Cancelar
              </Button>
            )}
          </div>
        </form>

        <div className="space-y-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-between p-4 bg-primary/5 border border-primary/20 rounded-lg"
            >
              <div>
                <h3 className="font-semibold">{service.titulo}</h3>
                <p className="text-sm text-foreground/60">{service.descripcion}</p>
                {service.precio && <p className="text-sm text-primary font-semibold">${service.precio}</p>}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(service)}
                  className="p-2 hover:bg-primary/10 rounded transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="p-2 text-red-500 hover:bg-red-500/10 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
