'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

interface CulinarySectionProps {
  className?: string
}

const CulinarySection = ({ className }: CulinarySectionProps) => {
  const slides = [
    {
      id: 1,
      src: 'https://placehold.co/1200x800/10B981/FFFFFF?text=Slide+1',
      alt: 'Culinary Slide 1'
    },
    {
      id: 2,
      src: 'https://placehold.co/1200x800/EF4444/FFFFFF?text=Slide+2',
      alt: 'Culinary Slide 2'
    },
    {
      id: 3,
      src: 'https://placehold.co/1200x800/3B82F6/FFFFFF?text=Slide+3',
      alt: 'Culinary Slide 3'
    },
    {
      id: 4,
      src: 'https://placehold.co/1200x800/F59E0B/FFFFFF?text=Slide+4',
      alt: 'Culinary Slide 4'
    },
    {
      id: 5,
      src: 'https://placehold.co/1200x800/8B5CF6/FFFFFF?text=Slide+5',
      alt: 'Culinary Slide 5'
    },
    {
      id: 6,
      src: 'https://placehold.co/1200x800/EC4899/FFFFFF?text=Slide+6',
      alt: 'Culinary Slide 6'
    }
  ]

  return (
    <section className={`relative py-16 md:py-24 ${className}`} style={{ backgroundColor: '#7a5529' }}>
      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description Section */}
        <div className="space-y-6 mb-16 font-['Montserrat'] text-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Our Cullinary
            </h2>
            {/* Golden decorative line */}
            <div className="w-16 h-1 mx-auto mb-6 bg-primary-gold-light"></div>
          </div>
          
          <p className="text-lg md:text-xl text-amber-100 leading-relaxed max-w-3xl mx-auto">
            Indulge in an unforgettable dining and culinary experience at Whistler Garden, where exquisite flavors meet elegant ambiance. From carefully curated menus to refined service, every moment is designed to delight your senses and elevate your gathering into a truly memorable occasion.
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative h-[32rem] md:h-[40rem] rounded-lg overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.culinary-swiper-button-next',
              prevEl: '.culinary-swiper-button-prev',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative h-full">
                  {/* Slide Image */}
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Dark overlay on slides */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="culinary-swiper-button-prev absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black hover:bg-black/80 flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="culinary-swiper-button-next absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black hover:bg-black/80 flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export { CulinarySection }