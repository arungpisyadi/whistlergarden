import React from 'react'

interface AboutSectionProps {
  className?: string
}

const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="bg-primary-gold-dark max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Two Staggered Images */}
          <div className="relative h-96 md:h-[500px] lg:order-first">
            {/* First Image - Positioned Higher */}
            <div className="absolute top-0 left-0 w-3/5 z-10">
              <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://placehold.co/800x1000/D97706/FFFFFF?text=image"
                  alt="Hotel Architecture"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Second Image - Positioned Lower and to the Right */}
            <div className="absolute top-20 md:top-24 right-0 w-3/5 z-20">
              <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://placehold.co/800x1000/DC2626/FFFFFF?text=image"
                  alt="Luxury Hospitality"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6 font-['Montserrat']">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                About Us
              </h2>
              {/* Golden decorative line */}
              <div className="w-16 h-1 ml-0 mb-6 bg-primary-gold-light"></div>
            </div>
            
            <p className="text-lg md:text-xl text-amber-100 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            
            <p className="text-lg text-amber-100 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p className="text-lg text-amber-100 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
            </p>

            {/* Book Now Button */}
            <div className="pt-8">
              {/* <button className="bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                BOOK NOW
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { AboutSection }