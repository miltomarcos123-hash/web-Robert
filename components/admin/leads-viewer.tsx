'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { ArrowUpDown, Trash2 } from 'lucide-react'

interface Lead {
  id: string
  nombre: string
  telefono: string
  email?: string
  servicio_interes?: string
  mensaje?: string
  fuente: string
  created_at: string
}

export function LeadsViewer() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      setLoading(true)
      const supabase = createClient()
      
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: sortOrder === 'asc' })

      if (error) throw error
      setLeads(data || [])
    } catch (err) {
      console.error('Error fetching leads:', err)
    } finally {
      setLoading(false)
    }
  }

  const toggleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  const deleteLead = async (id: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar este lead?')) return

    try {
      const supabase = createClient()
      const { error } = await supabase
        .from('leads')
        .delete()
        .eq('id', id)

      if (error) throw error
      setLeads(leads.filter(lead => lead.id !== id))
    } catch (err) {
      console.error('Error deleting lead:', err)
    }
  }

  if (loading) {
    return <div className="text-center py-8">Cargando leads...</div>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Leads ({leads.length})</h2>
        <button
          onClick={toggleSort}
          className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded transition-colors"
        >
          <ArrowUpDown className="w-4 h-4" />
          Ordenar
        </button>
      </div>

      {leads.length === 0 ? (
        <div className="text-center py-8 text-foreground/60">
          No hay leads aún
        </div>
      ) : (
        <div className="overflow-x-auto border border-primary/20 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary/20 bg-primary/5">
                <th className="px-4 py-3 text-left text-sm font-semibold">Nombre</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Teléfono</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Servicio</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Fuente</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Fecha</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-primary/20 hover:bg-primary/5 transition-colors">
                  <td className="px-4 py-3 text-sm">{lead.nombre}</td>
                  <td className="px-4 py-3 text-sm">
                    <a href={`tel:${lead.telefono}`} className="text-primary hover:underline">
                      {lead.telefono}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {lead.email ? (
                      <a href={`mailto:${lead.email}`} className="text-primary hover:underline">
                        {lead.email}
                      </a>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">{lead.servicio_interes || '-'}</td>
                  <td className="px-4 py-3 text-sm capitalize">{lead.fuente}</td>
                  <td className="px-4 py-3 text-sm">
                    {new Date(lead.created_at).toLocaleDateString('es-AR')}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => deleteLead(lead.id)}
                      className="p-2 text-red-500 hover:bg-red-500/10 rounded transition-colors"
                      aria-label="Eliminar lead"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
