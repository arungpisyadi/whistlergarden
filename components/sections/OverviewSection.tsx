import React from 'react'

interface OverviewSectionProps {
  className?: string
}

const OverviewSection = ({ className }: OverviewSectionProps) => {
  const keySellingPoints = [
    {
      title: "Balinese Elegance",
      description: "Experience the perfect harmony of classical Balinese architecture with modern luxury amenities",
      icon: "🏛️",
      stats: "Authentic Design"
    },
    {
      title: "Natural Beauty",
      description: "Surrounded by lush tropical gardens that create a serene and picturesque setting",
      icon: "🌿",
      stats: "Garden Paradise"
    },
    {
      title: "Premium Facilities",
      description: "Multiple venue options including glass houses, ballroom, and luxury accommodation",
      icon: "✨",
      stats: "6+ Event Spaces"
    },
    {
      title: "Culinary Excellence",
      description: "World-class dining featuring fusion of local and international cuisine",
      icon: "🍽️",
      stats: "Award-Winning"
    }
  ]

  const achievements = [
    { number: "500+", label: "Events Hosted" },
    { number: "98%", label: "Guest Satisfaction" },
    { number: "16", label: "Luxury Suites" },
    { number: "24/7", label: "Concierge Service" }
  ]

  return (
    <section className={`py-16 md:py-24 bg-gradient-to-b from-amber-900 to-amber-800 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Whistler Garden
          </h2>
          <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-lg text-amber-100 max-w-3xl mx-auto">
            Discover what makes Whistler Garden the premier destination for unforgettable events 
            and luxurious accommodations in Bali's most beautiful setting.
          </p>
        </div>

        {/* Key Selling Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {keySellingPoints.map((point, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
                <div className="w-16 h-16 bg-amber-300 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-colors">
                  <span className="text-2xl">{point.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-amber-100 text-sm leading-relaxed mb-3">
                  {point.description}
                </p>
                <span className="inline-block px-3 py-1 bg-amber-300 bg-opacity-20 text-amber-200 text-xs rounded-full font-medium">
                  {point.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Stats */}
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-300 mb-2">
                  {achievement.number}
                </div>
                <div className="text-amber-100 text-sm uppercase tracking-wide">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">
              The Whistler Garden Experience
            </h3>
            <p className="text-amber-100 leading-relaxed">
              From the moment you arrive, you'll be immersed in an atmosphere of elegance 
              and tranquility. Our commitment to excellence is evident in every detail, 
              from our meticulously maintained gardens to our personalized service.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-amber-300 text-lg mt-1">🎯</span>
                <div>
                  <h4 className="font-semibold text-white">Personalized Service</h4>
                  <p className="text-amber-100 text-sm">Dedicated event coordinators for every occasion</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-300 text-lg mt-1">🌟</span>
                <div>
                  <h4 className="font-semibold text-white">Exceptional Quality</h4>
                  <p className="text-amber-100 text-sm">Premium amenities and attention to detail</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-300 text-lg mt-1">🏆</span>
                <div>
                  <h4 className="font-semibold text-white">Award-Winning Excellence</h4>
                  <p className="text-amber-100 text-sm">Recognized for outstanding hospitality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/800x600/059669/FFFFFF?text=image"
                alt="Garden Landscape at Hotel"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-400 rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Begin Your Journey With Us</h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Whether you're planning an intimate celebration or a grand event, 
              Whistler Garden provides the perfect setting for creating lasting memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-300 text-amber-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-200 transition-colors">
                Book Your Event
              </button>
              <button className="border border-amber-300 text-amber-300 px-8 py-3 rounded-lg font-semibold hover:bg-amber-300 hover:text-amber-900 transition-colors">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { OverviewSection }