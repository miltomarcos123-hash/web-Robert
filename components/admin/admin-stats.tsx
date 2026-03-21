'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

interface Stats {
  totalLeads: number
  leadsThisMonth: number
  totalServices: number
  totalProducts: number
}

export function AdminStats() {
  const [stats, setStats] = useState<Stats>({
    totalLeads: 0,
    leadsThisMonth: 0,
    totalServices: 0,
    totalProducts: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const supabase = createClient()

      // Get total leads
      const { count: totalLeads } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true })

      // Get leads this month
      const startOfMonth = new Date()
      startOfMonth.setDate(1)
      startOfMonth.setHours(0, 0, 0, 0)

      const { count: leadsThisMonth } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', startOfMonth.toISOString())

      // Get total services
      const { count: totalServices } = await supabase
        .from('servicios')
        .select('*', { count: 'exact', head: true })

      // Get total products
      const { count: totalProducts } = await supabase
        .from('productos')
        .select('*', { count: 'exact', head: true })

      setStats({
        totalLeads: totalLeads || 0,
        leadsThisMonth: leadsThisMonth || 0,
        totalServices: totalServices || 0,
        totalProducts: totalProducts || 0,
      })
    } catch (err) {
      console.error('Error fetching stats:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Cargando estadísticas...</div>
  }

  return (
    <div className="grid md:grid-cols-4 gap-4 mb-8">
      <StatCard label="Total de Leads" value={stats.totalLeads} />
      <StatCard label="Leads Este Mes" value={stats.leadsThisMonth} />
      <StatCard label="Servicios" value={stats.totalServices} />
      <StatCard label="Productos" value={stats.totalProducts} />
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
      <p className="text-foreground/60 text-sm mb-2">{label}</p>
      <p className="text-3xl font-bold text-primary">{value}</p>
    </div>
  )
}
