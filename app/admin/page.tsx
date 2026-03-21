'use client'

import { LeadsViewer } from '@/components/admin/leads-viewer'
import { ServicesManager } from '@/components/admin/services-manager'
import { AdminStats } from '@/components/admin/admin-stats'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-primary/20 bg-primary/5 backdrop-blur">
        <div className="container mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-primary">Panel Administrativo</h1>
          <p className="text-foreground/60 mt-1">Gestión de RR Studio Barbería</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Statistics */}
          <AdminStats />

          {/* Services Section */}
          <section className="bg-card/50 border border-primary/20 rounded-lg p-8 backdrop-blur">
            <ServicesManager />
          </section>

          {/* Leads Section */}
          <section className="bg-card/50 border border-primary/20 rounded-lg p-8 backdrop-blur">
            <LeadsViewer />
          </section>

          {/* Future sections */}
          <section className="bg-card/50 border border-primary/20 rounded-lg p-8 backdrop-blur">
            <h2 className="text-2xl font-bold mb-4">Próximas Funcionalidades</h2>
            <ul className="space-y-3 text-foreground/70">
              <li>✓ Gestión de Portfolio/Trabajos</li>
              <li>✓ Gestión de Productos</li>
              <li>✓ Gestión de Zonas de Domicilio</li>
              <li>✓ Gestión de Membresía del Club</li>
              <li>✓ Estadísticas y Reportes Avanzados</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
