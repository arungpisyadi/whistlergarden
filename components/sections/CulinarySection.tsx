import React from 'react'

interface CulinarySectionProps {
  className?: string
}

const CulinarySection = ({ className }: CulinarySectionProps) => {
  const culinaryHighlights = [
    {
      step: "STEP 1",
      title: "Farm-to-table dining",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://placehold.co/800x600/10B981/FFFFFF?text=image",
      marginClass: "md:mt-0"
    },
    {
      step: "STEP 2",
      title: "Sunset cocktails",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://placehold.co/800x600/EA580C/FFFFFF?text=image",
      marginClass: "md:mt-16"
    },
    {
      step: "STEP 3",
      title: "Intimate experiences",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://placehold.co/800x600/D97706/FFFFFF?text=image",
      marginClass: "md:mt-8"
    }
  ]

  return (
    <section className={`relative py-16 md:py-24 ${className}`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/cullinary/WG_RESTO_AREA-4.jpg)' }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/25" />
      
      {/* Content Layer */}
      <div className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Culinary
          </h2>
        </div>

        {/* Culinary Highlights */}
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-start gap-8">
          {culinaryHighlights.map((highlight, index) => (
            <div key={index} className={`w-full md:w-80 lg:w-96 ${highlight.marginClass}`}>
              {/* Card Container with FeatureSection structure */}
              <div className="bg-white bg-opacity-25 backdrop-blur-sm shadow-lg rounded-lg border border-black/10 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Top Visual Section */}
                <div className="h-64 md:h-72 relative">
                  <img
                    src={highlight.imageUrl}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* Bottom Content Section */}
                <div className="p-6">
                  {/* <div className="text-xs font-semibold text-gray-500 mb-2 tracking-wider uppercase">
                    {highlight.step}
                  </div> */}
                  <h3 className="text-primary-gold-dark text-xl md:text-3xl mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-black mb-6 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { CulinarySection }