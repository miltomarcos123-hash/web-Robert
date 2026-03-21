import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'RR Studio Barbería | Cortes Profesionales & Barbería en [Tu Ciudad]',
  description: 'RR Studio Barbería es un espacio dedicado al estilo masculino. Especialistas en fades, cortes modernos, arreglo de barba, decoloración y domicilios personalizados. Membresía VIP disponible.',
  keywords: 'barbería, cortes de cabello, fades, arreglo de barba, servicios de barbería, domicilios, barbero profesional',
  metadataBase: new URL('https://rrstudiobarberia.com'),
  openGraph: {
    title: 'RR Studio Barbería | Cortes Profesionales',
    description: 'Espacio dedicado al estilo masculino con servicios premium de barbería',
    url: 'https://rrstudiobarbería.com',
    type: 'website',
    images: [{
      url: '/hero-bg.jpg',
      width: 1200,
      height: 630,
      alt: 'RR Studio Barbería',
    }],
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: 'RR Studio Barbería',
  authors: [{ name: 'RR Studio Barbería' }],
  generator: 'v0.app',
  creator: 'RR Studio Barbería',
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
    { media: '(prefers-color-scheme: light)', color: '#C9A45C' },
    { media: '(prefers-color-scheme: dark)', color: '#C9A45C' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

