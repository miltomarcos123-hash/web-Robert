-- =====================================================
-- RR Studio Barbería - Database Schema
-- =====================================================

-- Tabla de leads (contactos potenciales)
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  telefono TEXT NOT NULL,
  email TEXT,
  servicio_interes TEXT,
  mensaje TEXT,
  fuente TEXT DEFAULT 'web', -- web, whatsapp, instagram
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de servicios (administrable)
CREATE TABLE IF NOT EXISTS servicios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  precio DECIMAL(10,2),
  icono TEXT DEFAULT 'scissors',
  orden INTEGER DEFAULT 0,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de portfolio/trabajos
CREATE TABLE IF NOT EXISTS trabajos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo TEXT NOT NULL,
  descripcion TEXT,
  imagen_url TEXT NOT NULL,
  categoria TEXT,
  orden INTEGER DEFAULT 0,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de productos (para venta)
CREATE TABLE IF NOT EXISTS productos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2) NOT NULL,
  imagen_url TEXT,
  categoria TEXT,
  stock INTEGER DEFAULT 0,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de zonas de domicilio
CREATE TABLE IF NOT EXISTS zonas_domicilio (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  descripcion TEXT,
  precio_adicional DECIMAL(10,2) DEFAULT 0,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de solicitudes de domicilio
CREATE TABLE IF NOT EXISTS solicitudes_domicilio (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  zona_id UUID REFERENCES zonas_domicilio(id),
  direccion TEXT NOT NULL,
  fecha_preferida DATE,
  hora_preferida TIME,
  servicios_solicitados TEXT[],
  estado TEXT DEFAULT 'pendiente', -- pendiente, confirmado, completado, cancelado
  notas TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de miembros del club de exclusividad
CREATE TABLE IF NOT EXISTS club_miembros (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  nivel TEXT DEFAULT 'basico', -- basico, premium, vip
  puntos INTEGER DEFAULT 0,
  descuento_actual DECIMAL(5,2) DEFAULT 0,
  fecha_inicio DATE DEFAULT CURRENT_DATE,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de configuración del sitio
CREATE TABLE IF NOT EXISTS site_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clave TEXT UNIQUE NOT NULL,
  valor TEXT,
  tipo TEXT DEFAULT 'text', -- text, number, boolean, json
  descripcion TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de testimonios
CREATE TABLE IF NOT EXISTS testimonios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  texto TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  imagen_url TEXT,
  activo BOOLEAN DEFAULT true,
  orden INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- Habilitar Row Level Security
-- =====================================================
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE servicios ENABLE ROW LEVEL SECURITY;
ALTER TABLE trabajos ENABLE ROW LEVEL SECURITY;
ALTER TABLE productos ENABLE ROW LEVEL SECURITY;
ALTER TABLE zonas_domicilio ENABLE ROW LEVEL SECURITY;
ALTER TABLE solicitudes_domicilio ENABLE ROW LEVEL SECURITY;
ALTER TABLE club_miembros ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonios ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- Políticas RLS para lectura pública (datos del sitio)
-- =====================================================

-- Servicios: lectura pública para servicios activos
CREATE POLICY "servicios_public_read" ON servicios 
  FOR SELECT USING (activo = true);

-- Trabajos: lectura pública para trabajos activos
CREATE POLICY "trabajos_public_read" ON trabajos 
  FOR SELECT USING (activo = true);

-- Productos: lectura pública para productos activos
CREATE POLICY "productos_public_read" ON productos 
  FOR SELECT USING (activo = true);

-- Zonas de domicilio: lectura pública para zonas activas
CREATE POLICY "zonas_domicilio_public_read" ON zonas_domicilio 
  FOR SELECT USING (activo = true);

-- Testimonios: lectura pública para testimonios activos
CREATE POLICY "testimonios_public_read" ON testimonios 
  FOR SELECT USING (activo = true);

-- Site config: lectura pública
CREATE POLICY "site_config_public_read" ON site_config 
  FOR SELECT USING (true);

-- =====================================================
-- Políticas RLS para inserción pública (leads)
-- =====================================================

-- Leads: inserción pública (cualquiera puede enviar un lead)
CREATE POLICY "leads_public_insert" ON leads 
  FOR INSERT WITH CHECK (true);

-- Solicitudes de domicilio: inserción pública
CREATE POLICY "solicitudes_domicilio_public_insert" ON solicitudes_domicilio 
  FOR INSERT WITH CHECK (true);

-- Club miembros: inserción pública (registro)
CREATE POLICY "club_miembros_public_insert" ON club_miembros 
  FOR INSERT WITH CHECK (true);

-- =====================================================
-- Políticas RLS para administradores (usando service role)
-- El panel admin usará el service role key para bypass RLS
-- =====================================================

-- =====================================================
-- Insertar datos iniciales
-- =====================================================

-- Servicios iniciales
INSERT INTO servicios (titulo, descripcion, precio, icono, orden) VALUES
  ('Corte clásico', 'Cortes tradicionales ejecutados con técnica profesional y precisión en cada detalle.', 2500, 'scissors', 1),
  ('Fade / Degradado', 'Especialistas en fades modernos y cortes actuales adaptados a cada estilo.', 3000, 'sparkles', 2),
  ('Arreglo de barba', 'Perfilado y diseño de barba profesional para lograr un look limpio y definido.', 1500, 'users', 3),
  ('Color y decoloración', 'Cambio de look con técnicas profesionales de colorimetría y asesoramiento personalizado.', 4500, 'palette', 4),
  ('Corte + barba', 'Servicio completo para renovar tu estilo y mantener una imagen cuidada.', 3500, 'scissors', 5)
ON CONFLICT DO NOTHING;

-- Zonas de domicilio iniciales
INSERT INTO zonas_domicilio (nombre, descripcion, precio_adicional) VALUES
  ('Centro', 'Zona centro de la ciudad', 500),
  ('Norte', 'Barrios de la zona norte', 800),
  ('Sur', 'Barrios de la zona sur', 800),
  ('Oeste', 'Barrios de la zona oeste', 1000)
ON CONFLICT DO NOTHING;

-- Configuración del sitio inicial
INSERT INTO site_config (clave, valor, tipo, descripcion) VALUES
  ('whatsapp_numero', '543425106652', 'text', 'Número de WhatsApp para contacto'),
  ('whatsapp_mensaje', 'Hola, quiero reservar un turno en RR Studio Barbería.', 'text', 'Mensaje predeterminado de WhatsApp'),
  ('direccion', 'Rivadavia 3474', 'text', 'Dirección del local'),
  ('hero_titulo', 'BARBERÍA', 'text', 'Título principal del hero'),
  ('hero_subtitulo', 'Más Que Un Corte', 'text', 'Subtítulo del hero'),
  ('hero_descripcion', 'RR Studio Barbería es un espacio dedicado al estilo masculino, donde cada corte se trabaja con precisión, técnica y atención al detalle.', 'text', 'Descripción del hero'),
  ('club_beneficios', '["10% descuento en todos los servicios", "Acceso prioritario a turnos", "Productos exclusivos", "Corte de cumpleaños gratis"]', 'json', 'Beneficios del club de exclusividad'),
  ('domicilio_activo', 'true', 'boolean', 'Servicio de domicilio activo')
ON CONFLICT (clave) DO NOTHING;
