import Link from "next/link"
import { Instagram } from "lucide-react"
import { RRLogo } from "@/components/rr-logo"

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#academia", label: "Academia" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#contacto", label: "Contacto" },
]

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

const INSTAGRAM_URL = "https://www.instagram.com/rrestudiobarberia/"
const TIKTOK_URL = "https://www.tiktok.com/@rrestudio1"
const MAPS_URL = "https://www.google.com/maps/dir/-31.6407808,-60.6994432/Rivadavia+3474,+S3000+Santa+Fe+de+la+Vera+Cruz,+Santa+Fe/@-31.6385193,-60.7032542,968m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95b5a9bf00f78dd3:0x6f51396791edb70b!2m2!1d-60.701096!2d-31.6365077?entry=ttu"

export function Footer() {
  return (
    <footer className="py-16 border-t border-border/50 bg-[#071F15]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <RRLogo size="md" showText />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Espacio dedicado al estilo masculino, la precisión en barbería y la formación profesional.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Links rápidos</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Redes sociales</h4>
            <div className="flex gap-4">
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
              </Link>
              <Link
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
              </Link>
            </div>
            
            <div className="mt-6">
              <Link 
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Rivadavia 3474, Santa Fe, Argentina
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative logo watermark */}
        <div className="flex justify-center mb-8 opacity-20">
          <RRLogo size="xl" />
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          © 2026 RR Studio Barbería. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
