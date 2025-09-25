'use client'

import { Button } from '@/components/ui/Button'

interface FeatureCardProps {
  title: string
  description: string
  imageBg: string
  ctaText: string
  onCTAClick?: () => void
}

const FeatureCard = ({ title, description, imageBg, ctaText, onCTAClick }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Feature Image - Using placeholder colored backgrounds */}
      <div className={`h-64 md:h-72 ${imageBg} relative`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      {/* Feature Content */}
      <div className="p-6">
        <h3 className="text-section-title mb-4">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        <Button
          variant="secondary"
          onClick={onCTAClick}
          className="font-bold tracking-wide"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  )
}

interface FeatureSectionsProps {
  className?: string
}

const FeatureSections = ({ className }: FeatureSectionsProps) => {
  const features = [
    {
      id: 'featured-package',
      title: 'FEATURED PACKAGE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      imageBg: 'bg-gradient-to-br from-amber-800 to-amber-600',
      ctaText: 'VIEW MORE'
    },
    {
      id: 'experience-hotel',
      title: 'EXPERIENCE WHISTLER GARDEN',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      imageBg: 'bg-gradient-to-br from-blue-800 to-blue-600',
      ctaText: 'VIEW MORE'
    },
    {
      id: 'special-offers',
      title: 'SPECIAL OFFERS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      imageBg: 'bg-gradient-to-br from-gray-800 to-gray-600',
      ctaText: 'VIEW MORE'
    }
  ]

  const handleFeatureClick = (featureId: string) => {
    console.log(`Feature clicked: ${featureId}`)
    // Handle feature click navigation here
  }

  return (
    <section className={`section-padding bg-gray-50 ${className}`}>
      <div className="container-custom">
        {/* Section Title (Optional) */}
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-4">
            Discover Our Offerings
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="animate-fade-in">
              <FeatureCard
                title={feature.title}
                description={feature.description}
                imageBg={feature.imageBg}
                ctaText={feature.ctaText}
                onCTAClick={() => handleFeatureClick(feature.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { FeatureSections }