'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { BookingForm } from '@/components/forms/BookingForm'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface HeroSliderProps {
  className?: string
}

const HeroSlider = ({ className }: HeroSliderProps) => {
  // Placeholder hero images - using colored rectangles for now
  const heroImages = [
    {
      id: 1,
      src: '/api/placeholder/1920/1080',
      alt: 'Luxury Hotel Room',
      bg: 'bg-gradient-to-br from-amber-900 to-amber-700'
    },
    {
      id: 2,
      src: '/api/placeholder/1920/1080',
      alt: 'Hotel Pool Area',
      bg: 'bg-gradient-to-br from-blue-900 to-blue-700'
    },
    {
      id: 3,
      src: '/api/placeholder/1920/1080',
      alt: 'Hotel Restaurant',
      bg: 'bg-gradient-to-br from-gray-900 to-gray-700'
    }
  ]

  const handleBookingSubmit = (data: any) => {
    console.log('Booking data:', data)
    // Handle booking submission here
  }

  return (
    <section className={`relative h-screen ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {heroImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className={`relative h-full ${image.bg} flex items-center justify-center`}>
              {/* Placeholder colored background - replace with actual images */}
              <div className="absolute inset-0 bg-hero-overlay" />
              
              {/* Hero Content */}
              <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                  <p className="font-dancing text-2xl md:text-4xl mb-4 text-shadow-lg">
                    Explore the beauty of
                  </p>
                  <h1 className="text-hero text-shadow-lg mb-8">
                    STRADELLA HOTEL
                  </h1>
                </div>
                
                {/* Booking Form */}
                <div className="max-w-5xl mx-auto">
                  <BookingForm 
                    onSubmit={handleBookingSubmit}
                    className="animate-slide-up"
                  />
                </div>
              </div>
              
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 20px !important;
        }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        
        .swiper-pagination-bullet-active {
          background: #d4af37;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          color: rgba(255, 255, 255, 0.8);
          background: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          margin-top: -25px;
        }
        
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
        }
        
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  )
}

export { HeroSlider }