'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { LeadForm } from '@/components/lead-form'
import { Button } from '@/components/ui/button'

interface ContactModalProps {
  trigger?: React.ReactNode
  servicioInteres?: string
  titulo?: string
  descripcion?: string
}

export function ContactModal({
  trigger,
  servicioInteres,
  titulo = 'Contáctanos',
  descripcion = 'Cuéntanos más sobre lo que buscas',
}: ContactModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger || (
        <Button className="bg-primary hover:bg-accent text-primary-foreground">
          Contactar
        </Button>
      )}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{titulo}</DialogTitle>
          <DialogDescription>{descripcion}</DialogDescription>
        </DialogHeader>
        <LeadForm
          servicioInteres={servicioInteres}
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  )
}
