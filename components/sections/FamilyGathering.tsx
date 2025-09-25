'use client'

import { Button } from '@/components/ui/Button'

interface FamilyGatheringProps {
  className?: string
}

const FamilyGathering = ({ className }: FamilyGatheringProps) => {
  // Family gathering images - using existing family images
  const familyImages = [
    {
      id: 1,
      src: '/images/family/EDITED-36.jpg',
      alt: 'Large Space',
      sub: 'Perfect space size for your family gathering.'
    },
    {
      id: 2,
      src: '/images/family/WG_RESTO.jpg', 
      alt: '5 Star Dining Experience',
      sub: 'Complete the gathering with a luxuriou dining, with your family.'
    },
    {
      id: 3,
      src: '/images/family/WG_ROOM_SUITE-4.jpg',
      alt: 'One Night Stay',
      sub: 'Enjoy our special package, a one night stay included.'
    }
  ]

  // WhatsApp Icon Component
  const WhatsAppIcon = () => (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      className="mr-2"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
    </svg>
  )

  return (
    <section id="family-gathering" className={`section-padding bg-white ${className}`}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-6">
            Family Gathering
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hangout together with your loved ones is something you will cherish forever, it will last forever in your memory with Whistler Garden.
          </p>
        </div>

        {/* Family Gathering Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {familyImages.map((image) => (
            <div key={image.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image Container - Made Much Larger */}
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 md:h-96 lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
              
              {/* Card Content - Added for better card appearance */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{image.alt}</h3>
                <p className="text-gray-600 text-sm">
                  {image.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Single WhatsApp Button at Bottom */}
        <div className="text-center">
          <a
            href="https://wa.me/621234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <WhatsAppIcon />
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  )
}

export { FamilyGathering }