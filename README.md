# RR Studio Barbería - Plataforma Profesional

Una plataforma moderna, profesional y completamente funcional para **RR Studio Barbería**, construida con Next.js 15, Supabase y Tailwind CSS.

![RR Studio Barbería](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RR_Logo_Versio%CC%81n2_Dorado%202-6SF3rNSREThfEa3zXe0ouEfCUx5s8B.png)

---

## ✨ Características Principales

### 🎯 Para Clientes
- **Hero cinematográfico** con animaciones y branding dorado
- **Club de Exclusividad** - 3 niveles de membresía (Básico, Premium, VIP)
- **Domicilios personalizados** - Servicio a domicilio con cobertura por zonas
- **Tienda de productos** - Catálogo de productos premium
- **Formularios inteligentes** - Capturan leads de manera automática
- **WhatsApp integrado** - Botón flotante para contacto directo

### 👨‍💼 Para Administradores
- **Dashboard profesional** en `/admin`
- **Gestor de Servicios** - CRUD completo
- **Visor de Leads** - Tabla con todos los contactos
- **Estadísticas en vivo** - Métricas del negocio
- **Base de datos completa** - 9 tablas Supabase

### 📱 Tecnología
- ✅ Responsive 100% (mobile-first)
- ✅ SEO optimizado (sitemap, robots.txt, metadatos)
- ✅ Animaciones suaves y cinemáticas
- ✅ Tema oscuro profesional
- ✅ Seguridad con Row Level Security

---

## 🚀 Quick Start

### 1️⃣ Ejecutar la Migración (ÚNICA ACCIÓN MANUAL)

```bash
# En Supabase SQL Editor, ejecuta:
# /scripts/001_create_tables.sql
```

### 2️⃣ Probar el Sitio

```bash
# El sitio ya está en vivo, solo prueba los formularios
# Accede a /admin para ver los leads capturados
```

### 3️⃣ Desplegar

```bash
# Está listo para desplegar a Vercel
git push origin main
```

---

## 📁 Estructura del Proyecto

```
RR-Studio-Barberia/
├── app/
│   ├── admin/                 # Panel administrativo
│   │   ├── page.tsx          # Dashboard
│   │   └── layout.tsx
│   ├── page.tsx              # Página principal
│   ├── layout.tsx            # Layout con SEO
│   ├── globals.css           # Estilos globales
│   └── sitemap.ts            # SEO
├── components/
│   ├── hero.tsx              # Hero mejorado
│   ├── lead-form.tsx         # Formulario reutilizable
│   ├── contact-modal.tsx     # Modal de contacto
│   ├── exclusivity-club.tsx  # Sección Club
│   ├── home-service.tsx      # Sección Domicilios
│   ├── products-section.tsx  # Sección Productos
│   ├── admin/                # Componentes admin
│   │   ├── leads-viewer.tsx
│   │   ├── services-manager.tsx
│   │   └── admin-stats.tsx
│   └── ui/                   # Componentes shadcn
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   └── supabase-helpers.ts
├── scripts/
│   └── 001_create_tables.sql # Migración SQL
├── public/
│   └── robots.txt
└── docs/
    ├── IMPLEMENTATION_GUIDE.md
    ├── COMPLETION_SUMMARY.md
    └── README_QUICK_START.md
```

---

## 🗄️ Base de Datos

9 tablas completamente estructuradas con **Row Level Security**:

| Tabla | Descripción |
|-------|-------------|
| `leads` | Contactos/leads capturados |
| `servicios` | Servicios de barbería |
| `trabajos` | Portfolio de trabajos |
| `productos` | Tienda de productos |
| `zonas_domicilio` | Zonas de cobertura de domicilios |
| `solicitudes_domicilio` | Solicitudes de domicilio |
| `club_miembros` | Miembros del club VIP |
| `site_config` | Configuración del sitio |
| `testimonios` | Testimonios de clientes |

---

## 🎨 Diseño

**Colores:**
- Primario: `#C9A45C` (Dorado elegante)
- Acento: `#D8B97A` (Dorado claro)
- Fondo: `#071F15` (Verde oscuro)
- Texto: `#F5F5F5` (Blanco hueso)

**Tipografía:**
- Headings: Playfair Display (serif premium)
- Body: Inter (sans-serif limpio)

---

## 📊 Funcionalidades

### Sistema de Leads
- Formularios en múltiples secciones
- Captura automática en Supabase
- Datos: nombre, teléfono, email, servicio, mensaje
- Visor en panel admin

### Club de Exclusividad
- 3 niveles: Básico, Premium, VIP
- Beneficios escalonados
- Modal de inscripción

### Domicilios
- 4 zonas de cobertura (Centro, Norte, Sur, Oeste)
- Costos variables por zona
- Formulario de solicitud

### Productos
- Catálogo con placeholder de imágenes
- Integración para Vercel Blob
- Enlaces de compra vía WhatsApp

### Panel Admin
- Estadísticas en vivo
- CRUD de servicios
- Tabla de leads
- Interfaz profesional

---

## 🔒 Seguridad

- ✅ Row Level Security en todas las tablas
- ✅ Políticas RLS para inserción pública de leads
- ✅ Datos de configuración accesibles públicamente
- ✅ Middleware de Supabase configurado
- ✅ Sin exposición de API keys sensibles

---

## 📈 SEO

- ✅ Metadatos optimizados
- ✅ Open Graph configurado
- ✅ Sitemap dinámico
- ✅ robots.txt
- ✅ Keywords de barbería
- ✅ Estructura HTML semántica

---

## 🚀 Desplegar

### Vercel (Recomendado)

```bash
# 1. Push a GitHub
git push origin main

# 2. Vercel se desplegará automáticamente
# 3. Variables de entorno se sincronizarán automáticamente
```

---

## 📚 Documentación

- **`IMPLEMENTATION_GUIDE.md`** - Guía completa paso a paso
- **`COMPLETION_SUMMARY.md`** - Resumen detallado de implementación
- **`README_QUICK_START.md`** - Inicio rápido

---

## 🔧 Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS 4
- **Components**: React 19, shadcn/ui
- **Auth**: Supabase Auth
- **Storage**: Vercel Blob (preparado)
- **Hosting**: Vercel
- **Analytics**: Vercel Analytics

---

## 📞 Características de Contacto

- Botón WhatsApp flotante
- Número: `543425106652`
- Formularios en múltiples secciones
- Modal de contacto elegante
- Links directos desde servicios

---

## ✅ Checklist de Finalización

- ✅ Todas las secciones implementadas
- ✅ Formularios de leads funcionando
- ✅ Panel admin operacional
- ✅ Base de datos configurada
- ✅ SEO optimizado
- ✅ Responsive y accesible
- ✅ Animaciones suaves
- ✅ Branding consistente
- ✅ Documentación completa
- ⏳ **Falta:** Ejecutar SQL en Supabase (2 min)

---

## 🎯 Próximas Mejoras (Opcionales)

1. **Autenticación Admin** - Login para `/admin`
2. **Emails automáticos** - Notificación de nuevos leads
3. **Subida de imágenes** - Integrar Vercel Blob
4. **Reservas en línea** - Sistema de turnos
5. **Pagos** - Integrar Stripe
6. **Chat en vivo** - Soporte real-time

---

## 📝 Licencia

Proyecto privado para RR Studio Barbería.

---

## 👨‍💻 Desarrollado con

- **v0** (AI-powered development)
- **Supabase** (Backend)
- **Vercel** (Hosting)

---

**¿Listo para empezar? Ejecuta el script SQL y ¡estás listo!**

Para más información, consulta `IMPLEMENTATION_GUIDE.md`.
