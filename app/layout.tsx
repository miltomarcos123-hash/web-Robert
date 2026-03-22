import type { Metadata, Viewport } from 'next'
import { Titillium_Web, Rubik } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Tipografía Principal - Brandbook RR Studio
const titilliumWeb = Titillium_Web({ 
  subsets: ["latin"],
  weight: ['300', '400', '600', '700'],
  variable: '--font-sans'
});

// Tipografía Secundaria - Brandbook RR Studio
const rubik = Rubik({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  variable: '--font-serif'
});

export const metadata: Metadata = {
  title: 'RR Estudio | Peluquería y Barbería en Santa Fe',
  description: 'RR Estudio es un espacio dedicado al estilo masculino. Exclusividad, elegancia y sofisticación. Especialistas en fades, cortes modernos, arreglo de barba y domicilios personalizados.',
  keywords: 'barbería santa fe, peluquería masculina, cortes de cabello, fades, arreglo de barba, servicios de barbería, domicilios, barbero profesional, RR Estudio',
  metadataBase: new URL('https://rrestudio.com'),
  openGraph: {
    title: 'RR Estudio | Peluquería y Barbería',
    description: 'Espacio dedicado al estilo masculino con servicios premium de peluquería y barbería',
    url: 'https://rrestudio.com',
    type: 'website',
    images: [{
      url: '/hero-bg.jpg',
      width: 1200,
      height: 630,
      alt: 'RR Estudio - Peluquería y Barbería',
    }],
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: 'RR Estudio',
  authors: [{ name: 'RR Estudio' }],
  generator: 'v0.app',
  creator: 'RR Estudio',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#C5A66B' },
    { media: '(prefers-color-scheme: dark)', color: '#C5A66B' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${titilliumWeb.variable} ${rubik.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

