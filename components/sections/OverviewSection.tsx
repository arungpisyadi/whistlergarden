'use client'

import React, { useState, useEffect, useRef } from 'react'

interface OverviewSectionProps {
  className?: string
}

interface ProjectImage {
  id: number
  title: string
  image: string
  description: string
}

const OverviewSection = ({ className }: OverviewSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [imagesPerView, setImagesPerView] = useState(3)
  const [touchStartX, setTouchStartX] = useState(0)
  const [touchEndX, setTouchEndX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  
  // 8 project images for the carousel
  const projectImages: ProjectImage[] = [
    {
      id: 1,
      title: "RESIDENTIAL CAPE PROJECT IN PARIS",
      image: "https://placehold.co/200x400/007bff/FFFFFF?text=Paris+Project",
      description: "Elegant residential development"
    },
    {
      id: 2,
      title: "CONCERT HALL IN NEW YORK",
      image: "https://placehold.co/200x400/28a745/FFFFFF?text=NYC+Concert",
      description: "Modern concert venue design"
    },
    {
      id: 3,
      title: "MODERN HOTEL IN LONDON",
      image: "https://placehold.co/200x400/6f42c1/FFFFFF?text=London+Hotel",
      description: "Luxury hotel architecture"
    },
    {
      id: 4,
      title: "LUXURY RESORT IN BALI",
      image: "https://placehold.co/200x400/17a2b8/FFFFFF?text=Bali+Resort",
      description: "Tropical paradise retreat"
    },
    {
      id: 5,
      title: "CORPORATE OFFICE IN SINGAPORE",
      image: "https://placehold.co/200x400/e83e8c/FFFFFF?text=Singapore+Office",
      description: "Contemporary office complex"
    },
    {
      id: 6,
      title: "WELLNESS CENTER IN TOKYO",
      image: "https://placehold.co/200x400/dc3545/FFFFFF?text=Tokyo+Wellness",
      description: "Zen-inspired wellness facility"
    },
    {
      id: 7,
      title: "RESTAURANT IN MILAN",
      image: "https://placehold.co/200x400/20c997/FFFFFF?text=Milan+Restaurant",
      description: "Fine dining establishment"
    },
    {
      id: 8,
      title: "BOUTIQUE HOTEL IN SANTORINI",
      image: "https://placehold.co/200x400/6610f2/FFFFFF?text=Santorini+Hotel",
      description: "Mediterranean luxury experience"
    }
  ]

  // Responsive images per view: 1 on mobile, 3 on desktop
  useEffect(() => {
    const updateImagesPerView = () => {
      if (window.innerWidth < 768) {
        setImagesPerView(1)
      } else {
        setImagesPerView(3)
      }
    }

    // Set initial value
    updateImagesPerView()
    
    // Add event listener
    window.addEventListener('resize', updateImagesPerView)
    
    // Cleanup
    return () => window.removeEventListener('resize', updateImagesPerView)
  }, [])

  // Create extended array for infinite loop (duplicate items at beginning and end)
  const extendedImages = [
    ...projectImages.slice(-imagesPerView), // Last items at beginning
    ...projectImages, // Original items
    ...projectImages.slice(0, imagesPerView) // First items at end
  ]

  // Handle infinite looping
  const handlePrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(prev => prev - 1)
  }

  const handleNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(prev => prev + 1)
  }

  // Handle infinite loop reset
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
        if (currentIndex >= projectImages.length) {
          setCurrentIndex(0)
        } else if (currentIndex < 0) {
          setCurrentIndex(projectImages.length - 1)
        }
      }, 500) // Match transition duration
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, isTransitioning, projectImages.length])

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    if (imagesPerView > 1) return // Only enable swipe on mobile
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (imagesPerView > 1) return // Only enable swipe on mobile
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (imagesPerView > 1) return // Only enable swipe on mobile
    if (!touchStartX || !touchEndX) return
    
    const distance = touchStartX - touchEndX
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      handleNext()
    }
    if (isRightSwipe) {
      handlePrev()
    }
    
    setTouchStartX(0)
    setTouchEndX(0)
  }

  // Get the actual index for dot indicators
  const getActualIndex = () => {
    if (currentIndex < 0) return projectImages.length + currentIndex
    if (currentIndex >= projectImages.length) return currentIndex - projectImages.length
    return currentIndex
  }

  // Calculate transform for centering - offset by 1 item to center the middle item
  const getTransform = () => {
    const baseOffset = imagesPerView; // Offset for cloned items at start
    const centerOffset = imagesPerView === 1 ? 0 : 1; // No center offset needed for mobile (1 item)
    const totalOffset = baseOffset + currentIndex + centerOffset
    return `translateX(-${(totalOffset * 100) / imagesPerView}%)`
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

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous images"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next images"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Images */}
          <div className="overflow-hidden md:px-12">
            <div
              ref={carouselRef}
              className={`flex md:gap-4 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{
                transform: getTransform(),
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {extendedImages.map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: `${100 / imagesPerView}%` }}
                >
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg bg-primary-gold">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-[1/2] object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                          <h3 className="text-white font-bold text-sm md:text-base mb-2 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-xs md:text-sm">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projectImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === getActualIndex() ? 'bg-amber-400' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
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