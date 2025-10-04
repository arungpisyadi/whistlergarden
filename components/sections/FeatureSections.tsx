'use client'

interface FeatureCardProps {
  title: string
  description: string
  icon?: string
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="bg-amber-100/10 backdrop-blur-sm rounded-lg p-6 hover:bg-amber-100/20 transition-all duration-300 border border-amber-200/20">
      {icon && (
        <div className="mb-4">
          <div className="w-12 h-12 bg-amber-200/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">{icon}</span>
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-3 font-['Montserrat']">
        {title}
      </h3>
      <p className="text-amber-100 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

interface FeatureSectionsProps {
  className?: string
}

const FeatureSections = ({ className }: FeatureSectionsProps) => {
  const features = [
    {
      id: 'emotions',
      title: 'EMOTIONS',
      description: 'Experience moments that touch your soul and create lasting memories in our thoughtfully designed spaces.',
      icon: '❤️'
    },
    {
      id: 'balance',
      title: 'BALANCE',
      description: 'Find perfect harmony between luxury and comfort, work and relaxation in our carefully curated environment.',
      icon: '⚖️'
    },
    {
      id: 'functionality',
      title: 'FUNCTIONALITY',
      description: 'Every detail serves a purpose, combining aesthetic beauty with practical design solutions.',
      icon: '🔧'
    },
    {
      id: 'quality',
      title: 'QUALITY',
      description: 'Premium materials and craftsmanship ensure excellence in every aspect of your experience.',
      icon: '💎'
    }
  ]

  return (
    <section className={`py-16 md:py-24 ${className}`} style={{ backgroundColor: '#ca914b' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch min-h-[800px]">
          
          {/* Left Column - Main Content */}
          <div className="flex flex-col justify-between space-y-8">
            {/* Header Content */}
            <div className="space-y-6 font-['Montserrat']">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  YOUR LEAVING
                  <br />
                  SPACE
                </h2>
                {/* Golden decorative line */}
                <div className="w-16 h-1 ml-0 mb-6 bg-primary-gold-light"></div>
              </div>
              
              <p className="text-lg md:text-xl text-amber-100 leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              
              <p className="text-lg text-amber-100 leading-relaxed max-w-lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* Large Interior Image at Bottom */}
            <div className="flex-1 flex items-end">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/600x400/8B4513/FFFFFF?text=Interior+Space"
                  alt="Interior Living Space"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-8">
            
            {/* Top Images Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="h-32 md:h-40 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://placehold.co/300x200/CD853F/FFFFFF?text=Detail+1"
                  alt="Interior Detail 1"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="h-32 md:h-40 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://placehold.co/300x200/DEB887/FFFFFF?text=Detail+2"
                  alt="Interior Detail 2"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Feature Cards Grid (2x2) */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={feature.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FeatureSections }