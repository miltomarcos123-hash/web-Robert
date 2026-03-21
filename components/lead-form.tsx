'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { submitLead } from '@/lib/supabase-helpers'

interface LeadFormProps {
  servicioInteres?: string
  onSuccess?: () => void
  onError?: (error: string) => void
}

export function LeadForm({ servicioInteres, onSuccess, onError }: LeadFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      await submitLead({
        nombre: formData.nombre,
        telefono: formData.telefono,
        email: formData.email || undefined,
        servicio_interes: servicioInteres,
        mensaje: formData.mensaje || undefined,
        fuente: 'web',
      })

      setSuccess(true)
      setFormData({ nombre: '', telefono: '', email: '', mensaje: '' })
      onSuccess?.()

      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Error al enviar el formulario'
      setError(errorMsg)
      onError?.(errorMsg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          required
          disabled={loading}
          className="bg-background/50 border-primary/20"
        />
      </div>

      <div>
        <Input
          type="tel"
          placeholder="Tu teléfono"
          value={formData.telefono}
          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
          required
          disabled={loading}
          className="bg-background/50 border-primary/20"
        />
      </div>

      <div>
        <Input
          type="email"
          placeholder="Tu email (opcional)"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={loading}
          className="bg-background/50 border-primary/20"
        />
      </div>

      {!servicioInteres && (
        <div>
          <Textarea
            placeholder="Tu mensaje"
            value={formData.mensaje}
            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
            disabled={loading}
            rows={3}
            className="bg-background/50 border-primary/20 resize-none"
          />
        </div>
      )}

      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-500 text-sm">¡Mensaje enviado exitosamente!</div>}

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-accent text-primary-foreground"
      >
        {loading ? 'Enviando...' : 'Enviar'}
      </Button>
    </form>
  )
}
