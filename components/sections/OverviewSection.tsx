'use client'

import React from 'react'
import YouTube from 'react-youtube'

interface OverviewSectionProps {
  className?: string
}

const OverviewSection = ({ className }: OverviewSectionProps) => {
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
    <section className={`py-16 md:py-24 bg-primary-gold-dark text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Overview
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of exceptional projects that showcase our commitment 
            to creating extraordinary spaces and unforgettable experiences.
          </p>
        </div>

        {/* YouTube Video Player */}
        <div className="relative max-w-full mx-auto">
          <div className="aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-2xl">
            <YouTube
              videoId="mYW3sW9uOvI"
              opts={opts}
              className="w-full h-full"
              iframeClassName="w-full h-full"
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Our Portfolio Excellence</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Each project represents our dedication to creating spaces that blend 
              architectural innovation with timeless elegance, delivering experiences 
              that exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-300 transition-colors">
                View Full Portfolio
              </button>
              <button className="border border-amber-400 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 hover:text-gray-900 transition-colors">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { OverviewSection }