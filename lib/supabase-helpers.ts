import { createClient } from '@/lib/supabase/client'

export async function submitLead(data: {
  nombre: string
  telefono: string
  email?: string
  servicio_interes?: string
  mensaje?: string
  fuente?: string
}) {
  const supabase = createClient()
  
  try {
    const { data: lead, error } = await supabase
      .from('leads')
      .insert([
        {
          ...data,
          fuente: data.fuente || 'web',
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error('Error submitting lead:', error)
      throw error
    }

    return { success: true, lead: lead?.[0] }
  } catch (err) {
    console.error('Failed to submit lead:', err)
    throw err
  }
}

export async function getServices() {
  const supabase = createClient()
  
  try {
    const { data: services, error } = await supabase
      .from('servicios')
      .select('*')
      .eq('activo', true)
      .order('orden')

    if (error) throw error
    return services || []
  } catch (err) {
    console.error('Error fetching services:', err)
    return []
  }
}

export async function getWorks() {
  const supabase = createClient()
  
  try {
    const { data: works, error } = await supabase
      .from('trabajos')
      .select('*')
      .eq('activo', true)
      .order('orden')

    if (error) throw error
    return works || []
  } catch (err) {
    console.error('Error fetching works:', err)
    return []
  }
}

export async function getProducts() {
  const supabase = createClient()
  
  try {
    const { data: products, error } = await supabase
      .from('productos')
      .select('*')
      .eq('activo', true)

    if (error) throw error
    return products || []
  } catch (err) {
    console.error('Error fetching products:', err)
    return []
  }
}

export async function getConfig(key: string) {
  const supabase = createClient()
  
  try {
    const { data, error } = await supabase
      .from('site_config')
      .select('valor, tipo')
      .eq('clave', key)
      .single()

    if (error && error.code !== 'PGRST116') throw error
    
    if (!data) return null
    
    if (data.tipo === 'json') {
      return JSON.parse(data.valor)
    } else if (data.tipo === 'boolean') {
      return data.valor === 'true'
    } else if (data.tipo === 'number') {
      return parseFloat(data.valor)
    }
    
    return data.valor
  } catch (err) {
    console.error(`Error fetching config ${key}:`, err)
    return null
  }
}
