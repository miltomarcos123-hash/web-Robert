'use client'

import { ShoppingCart } from 'lucide-react'

const productosPrecarga = [
  {
    id: '1',
    nombre: 'Pomada Premium RR',
    descripcion: 'Pomada de alta calidad con acabado mate y fuerte agarre',
    precio: 2500,
    categoria: 'pomadas',
  },
  {
    id: '2',
    nombre: 'Aceite para Barba',
    descripcion: 'Aceite aromatizado para mantener y acondicionar tu barba',
    precio: 1800,
    categoria: 'aceites',
  },
  {
    id: '3',
    nombre: 'Kit de Limpieza Facial',
    descripcion: 'Conjunto completo para el cuidado facial del hombre moderno',
    precio: 3200,
    categoria: 'cuidado',
  },
  {
    id: '4',
    nombre: 'Shampoo Profesional',
    descripcion: 'Shampoo especial para cabello y barba',
    precio: 1500,
    categoria: 'shampoo',
  },
]

export function ProductsSection() {
  return (
    <section id="productos" className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Tienda Exclusiva
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Productos RR Studio
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Descubre nuestra línea exclusiva de productos premium para el cuidado personal y estilismo masculino.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productosPrecarga.map((producto) => (
            <div
              key={producto.id}
              className="group rounded-lg border border-primary/20 bg-background/50 backdrop-blur overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Placeholder para imagen */}
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <ShoppingCart className="w-16 h-16 text-primary/30" />
              </div>

              <div className="p-4">
                <h3 className="font-serif font-bold text-lg mb-2 line-clamp-2">
                  {producto.nombre}
                </h3>
                <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                  {producto.descripcion}
                </p>

                <div className="flex items-center justify-between">
                  <p className="font-serif text-xl font-bold text-primary">
                    ${producto.precio}
                  </p>
                  <button className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-200">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-2">Compra en Línea o en Nuestro Local</h3>
          <p className="text-foreground/70 mb-6">
            Todos nuestros productos están disponibles en RR Studio. También puedes hacer tu pedido a través de WhatsApp.
          </p>
          <a
            href="https://wa.me/543425106652?text=Hola%2C%20quiero%20consultar%20sobre%20los%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary hover:bg-accent text-primary-foreground rounded transition-colors duration-300 font-medium"
          >
            Consultar Disponibilidad
          </a>
        </div>
      </div>
    </section>
  )
}
