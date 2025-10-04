'use client'

interface HeroProps {
  className?: string
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className={`relative h-screen lg:h-[86.5vh] ${className}`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero/hero-1.jpg)'
        }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/35" />
      
      {/* Hero Content */}
      <div className="relative z-0 h-full flex items-end justify-start bottom-16">
        <div className="text-right text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div>
            <p className="text-base md:text-xl mb-4 text-shadow-lg">
              Redefining Comfort, Elegance & Hospitality
            </p>
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-shadow-lg mb-8 tracking-wide">
              WHISTLER GARDEN
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }