'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const productos = [
  {
    id: '1',
    nombre: 'Pomada Premium RR',
    descripcion: 'Pomada de alta calidad con acabado mate y fuerte agarre',
    precio: 2500,
    imagen: '/products/pomada.jpg',
  },
  {
    id: '2',
    nombre: 'Aceite para Barba',
    descripcion: 'Aceite aromatizado para mantener y acondicionar tu barba',
    precio: 1800,
    imagen: '/products/aceite.jpg',
  },
  {
    id: '3',
    nombre: 'Kit de Limpieza Facial',
    descripcion: 'Conjunto completo para el cuidado facial del hombre moderno',
    precio: 3200,
    imagen: '/products/kit-facial.jpg',
  },
  {
    id: '4',
    nombre: 'Shampoo Profesional',
    descripcion: 'Shampoo especial para cabello y barba',
    precio: 1500,
    imagen: '/products/shampoo.jpg',
  },
  {
    id: '5',
    nombre: 'Cera Moldeadora',
    descripcion: 'Cera flexible para estilos naturales con brillo sutil',
    precio: 2200,
    imagen: '/products/cera.jpg',
  },
  {
    id: '6',
    nombre: 'Bálsamo para Barba',
    descripcion: 'Bálsamo hidratante que suaviza y da forma a tu barba',
    precio: 2000,
    imagen: '/products/balsamo.jpg',
  },
  {
    id: '7',
    nombre: 'After Shave Premium',
    descripcion: 'Loción post-afeitado con efecto refrescante y calmante',
    precio: 1700,
    imagen: '/products/aftershave.jpg',
  },
  {
    id: '8',
    nombre: 'Peine de Madera',
    descripcion: 'Peine artesanal de madera para barba y cabello',
    precio: 1200,
    imagen: '/products/peine.jpg',
  },
]

export function ProductosContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              Tienda
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Productos Premium
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Descubrí nuestra línea exclusiva de productos premium para el cuidado personal y estilismo masculino.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="group rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="font-serif font-bold text-lg mb-2">
                    {producto.nombre}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {producto.descripcion}
                  </p>
                  <p className="font-serif text-2xl font-bold text-primary">
                    ${producto.precio.toLocaleString('es-AR')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Compra en Nuestro Local o por WhatsApp
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Todos nuestros productos están disponibles en RR Studio. También puedes hacer tu pedido a través de WhatsApp y te lo preparamos.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-accent text-primary-foreground">
              <a 
                href="https://wa.me/543425106652?text=Hola%2C%20quiero%20consultar%20sobre%20los%20productos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar Disponibilidad
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
