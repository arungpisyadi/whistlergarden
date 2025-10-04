import React from 'react'

interface FacilitiesSectionProps {
  className?: string
}

const FacilitiesSection = ({ className }: FacilitiesSectionProps) => {
  const facilities = [
    {
      title: "Sky Glass House",
      description: "Panoramic glass structure offering breathtaking views and natural lighting for elegant events",
      capacity: "Up to 150 guests",
      icon: "🏗️",
      features: ["360° Views", "Natural Lighting", "Climate Controlled"]
    },
    {
      title: "Royal Glass House",
      description: "Premium glass pavilion with sophisticated architecture perfect for luxury celebrations",
      capacity: "Up to 200 guests",
      icon: "👑",
      features: ["Royal Setting", "Premium Amenities", "Exclusive Access"]
    },
    {
      title: "Grand Ballroom",
      description: "Magnificent ballroom with classical design elements and state-of-the-art facilities",
      capacity: "Up to 500 guests",
      icon: "🎭",
      features: ["Grand Architecture", "Professional Sound", "Flexible Layout"]
    },
    {
      title: "VIP Room",
      description: "Exclusive private space designed for intimate gatherings and high-profile events",
      capacity: "Up to 50 guests",
      icon: "⭐",
      features: ["Complete Privacy", "Luxury Furnishing", "Dedicated Service"]
    },
    {
      title: "Function Room",
      description: "Versatile multi-purpose space ideal for corporate events and private functions",
      capacity: "Up to 100 guests",
      icon: "🏢",
      features: ["Modern Equipment", "Flexible Setup", "Professional Environment"]
    },
    {
      title: "Accommodation",
      description: "16 elegantly appointed rooms and suites offering comfort and luxury for extended stays",
      capacity: "Up to 32 guests",
      icon: "🏨",
      features: ["Luxury Suites", "Modern Amenities", "Garden Views"]
    }
  ]

  return (
    <section className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            World-Class Facilities
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover our exceptional venues designed to accommodate every type of celebration, 
            from intimate gatherings to grand celebrations, all set within our beautiful gardens.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <div key={index} className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-amber-300">
                {/* Icon and Title */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-amber-200 transition-colors">
                    <span className="text-xl">{facility.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{facility.title}</h3>
                    <p className="text-sm text-amber-600 font-medium">{facility.capacity}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {facility.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-800 uppercase tracking-wide">Key Features</p>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full border border-amber-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Complete Event Solutions</h3>
              <p className="text-amber-100 leading-relaxed mb-6">
                Each facility comes with comprehensive event planning support, state-of-the-art 
                audiovisual equipment, and our dedicated hospitality team to ensure your event 
                is executed flawlessly.
              </p>
              <ul className="space-y-2 text-amber-100">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Professional event planning services
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Full catering and beverage services
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Advanced audiovisual technology
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Dedicated event coordination team
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-2">Ready to Plan Your Event?</h4>
                <p className="text-amber-100 text-sm mb-4">
                  Contact our events team to discuss your requirements
                </p>
                <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                  Schedule a Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FacilitiesSection }