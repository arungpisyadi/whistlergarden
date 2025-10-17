'use client'

import React from 'react'
import YouTube from 'react-youtube'

interface AboutSectionProps {
  className?: string
}

const AboutSection = ({ className }: AboutSectionProps) => {
  // YouTube player options
  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  }

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="bg-primary-gold-dark max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* YouTube Video Player - Above Title */}
        <div className="relative max-w-full mx-auto mb-16">
          <div className="aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-2xl">
            <YouTube
              videoId="mYW3sW9uOvI"
              opts={opts}
              className="w-full h-full"
              iframeClassName="w-full h-full"
            />
          </div>
        </div>

        {/* Single Full-Width Row - Title and Description */}
        <div className="text-center space-y-6 font-['Montserrat']">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              About Us
            </h2>
            {/* Golden decorative line */}
            <div className="w-16 h-1 mx-auto mb-6 bg-primary-gold-light"></div>
          </div>
          
          <p className="text-lg md:text-xl text-amber-100 leading-relaxed max-w-4xl mx-auto">
            Whistler Garden is more than a venue — it is a masterpiece of Balinese elegance, where classical architecture meets the beauty of nature. Every corner is designed to host your most spectacular celebrations, from weddings to corporate gatherings, creating an atmosphere of timeless charm and unforgettable memories.
          </p>

          {/* Book Now Button */}
          <div className="pt-8">
            {/* <button className="bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              BOOK NOW
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export { AboutSection }