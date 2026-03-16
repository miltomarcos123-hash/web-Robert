interface RRLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
}

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-16 h-16",
  lg: "w-24 h-24",
  xl: "w-32 h-32",
}

export function RRLogo({ className = "", size = "md", showText = false }: RRLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className={sizeClasses[size]}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer ornate circle */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#C9A45C"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Decorative dots around the circle */}
        {[...Array(24)].map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180
          const x = 50 + 43 * Math.cos(angle)
          const y = 50 + 43 * Math.sin(angle)
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="1"
              fill="#C9A45C"
            />
          )
        })}
        
        {/* Inner decorative ring */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="#C9A45C"
          strokeWidth="0.5"
          fill="none"
        />
        
        {/* Inner circle */}
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="#C9A45C"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* RR Text */}
        <text
          x="50"
          y="58"
          textAnchor="middle"
          className="font-serif"
          fill="#C9A45C"
          fontSize="28"
          fontWeight="600"
          fontFamily="Georgia, serif"
          letterSpacing="2"
        >
          RR
        </text>
      </svg>
      
      {showText && (
        <div className="flex flex-col">
          <span className="font-serif text-xl font-bold tracking-tight text-foreground">
            RR Studio
          </span>
          <span className="text-xs text-primary uppercase tracking-[0.2em]">
            Barbería
          </span>
        </div>
      )}
    </div>
  )
}
