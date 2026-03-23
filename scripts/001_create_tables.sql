CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  telefono TEXT NOT NULL,
  email TEXT,
  servicio_interes TEXT,
  mensaje TEXT,
  fuente TEXT DEFAULT 'web',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS servicios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  precio NUMERIC(10,2),
  icono TEXT DEFAULT 'scissors',
  orden INTEGER DEFAULT 0,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create services table (for dynamic data fetching)
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  precio NUMERIC NOT NULL,
  icon_name TEXT DEFAULT 'Scissors',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create products table (for dynamic data fetching)
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  precio NUMERIC NOT NULL,
  imagen_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create portfolio table (for trabajos/portfolio)
CREATE TABLE IF NOT EXISTS portfolio (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo TEXT NOT NULL,
  descripcion TEXT,
  imagen_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on services"
  ON services
  FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access on products"
  ON products
  FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access on portfolio"
  ON portfolio
  FOR SELECT
  USING (true);

-- Insert sample data for services
INSERT INTO services (nombre, descripcion, precio, icon_name) 
SELECT 'Corte clásico', 'Cortes tradicionales ejecutados con técnica profesional y precisión en cada detalle.', 4500, 'Scissors'
WHERE NOT EXISTS (SELECT 1 FROM services WHERE nombre = 'Corte clásico');

INSERT INTO services (nombre, descripcion, precio, icon_name)
SELECT 'Fade / Degradado', 'Especialistas en fades modernos y cortes actuales adaptados a cada estilo.', 5000, 'Sparkles'
WHERE NOT EXISTS (SELECT 1 FROM services WHERE nombre = 'Fade / Degradado');

INSERT INTO services (nombre, descripcion, precio, icon_name)
SELECT 'Arreglo de barba', 'Perfilado y diseño de barba profesional para lograr un look limpio y definido.', 2500, 'Users'
WHERE NOT EXISTS (SELECT 1 FROM services WHERE nombre = 'Arreglo de barba');

INSERT INTO services (nombre, descripcion, precio, icon_name)
SELECT 'Color y decoloración', 'Cambio de look con técnicas profesionales de colorimetría y asesoramiento personalizado.', 8000, 'Palette'
WHERE NOT EXISTS (SELECT 1 FROM services WHERE nombre = 'Color y decoloración');

INSERT INTO services (nombre, descripcion, precio, icon_name)
SELECT 'Corte + barba', 'Servicio completo para renovar tu estilo y mantener una imagen cuidada.', 6500, 'Scissors'
WHERE NOT EXISTS (SELECT 1 FROM services WHERE nombre = 'Corte + barba');

-- Insert sample data for products
INSERT INTO products (nombre, descripcion, precio, imagen_url)
SELECT 'Pomada Premium RR', 'Pomada de alta calidad con acabado mate y fuerte agarre', 2500, '/products/pomada.jpg'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE nombre = 'Pomada Premium RR');

INSERT INTO products (nombre, descripcion, precio, imagen_url)
SELECT 'Aceite para Barba', 'Aceite aromatizado para mantener y acondicionar tu barba', 1800, '/products/aceite.jpg'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE nombre = 'Aceite para Barba');

INSERT INTO products (nombre, descripcion, precio, imagen_url)
SELECT 'Kit de Limpieza Facial', 'Conjunto completo para el cuidado facial del hombre moderno', 3200, '/products/kit-facial.jpg'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE nombre = 'Kit de Limpieza Facial');

INSERT INTO products (nombre, descripcion, precio, imagen_url)
SELECT 'Shampoo Profesional', 'Shampoo especial para cabello y barba', 1500, '/products/shampoo.jpg'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE nombre = 'Shampoo Profesional');

INSERT INTO products (nombre, descripcion, precio, imagen_url)
SELECT 'Cera Moldeadora', 'Cera flexible para estilos naturales con brillo sutil', 2200, '/products/cera.jpg'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE nombre = 'Cera Moldeadora');

INSERT INTO products (nombre, descripcion, precio, imagen_url)
SELECT 'Bálsamo para Barba', 'Bálsamo hidratante que suaviza y da forma a tu barba', 2000, '/products/balsamo.jpg'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE nombre = 'Bálsamo para Barba');

INSERT INTO products (nombre, descripcion, precio, imagen_url)
SELECT 'After Shave Premium', 'Loción post-afeitado con efecto refrescante y calmante', 1700, '/products/aftershave.jpg'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE nombre = 'After Shave Premium');

INSERT INTO products (nombre, descripcion, precio, imagen_url)
SELECT 'Peine de Madera', 'Peine artesanal de madera para barba y cabello', 1200, '/products/peine.jpg'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE nombre = 'Peine de Madera');
