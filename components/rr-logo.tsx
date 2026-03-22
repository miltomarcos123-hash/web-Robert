import Image from "next/image"

interface RRLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
}

const sizeClasses = {
  sm: { width: 40, height: 40 },
  md: { width: 64, height: 64 },
  lg: { width: 96, height: 96 },
  xl: { width: 128, height: 128 },
}

export function RRLogo({ className = "", size = "md", showText = false }: RRLogoProps) {
  const dimensions = sizeClasses[size]
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo oficial del Brandbook RR Studio */}
      <Image
        src="/rr-logo-gold.png"
        alt="RR Studio Logo"
        width={dimensions.width}
        height={dimensions.height}
        className="object-contain"
        priority
      />
      
      {showText && (
        <div className="flex flex-col">
          <span className="font-sans text-xl font-semibold tracking-tight text-foreground">
            RR Estudio
          </span>
          <span className="text-xs text-primary uppercase tracking-[0.2em]">
            Peluquería y Barbería
          </span>
        </div>
      )}
    </div>
  )
}
