'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface OverviewSectionProps {
  className?: string
}

const OverviewSection = ({ className }: OverviewSectionProps) => {
  // Overview carousel images
  const overviewImages = [
    {
      id: 1,
      src: 'https://placehold.co/1200x600/D97706/FFFFFF?text=Overview+1',
      alt: 'Whistler Garden Overview 1',
      title: 'Elegant Architecture',
      description: 'Experience the harmony of classical design and modern luxury'
    },
    {
      id: 2,
      src: 'https://placehold.co/1200x600/DC2626/FFFFFF?text=Overview+2',
      alt: 'Whistler Garden Overview 2',
      title: 'Beautiful Gardens',
      description: 'Immerse yourself in our meticulously landscaped botanical paradise'
    },
    {
      id: 3,
      src: 'https://placehold.co/1200x600/059669/FFFFFF?text=Overview+3',
      alt: 'Whistler Garden Overview 3',
      title: 'Luxury Amenities',
      description: 'Discover world-class facilities designed for your perfect celebration'
    }
  ]

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

        {/* Overview Carousel */}
        <div className="relative max-w-full mx-auto mb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl"
          >
            {overviewImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{image.title}</h3>
                      <p className="text-lg text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Additional Info */}
        <div className="text-center">
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

        {/* Custom Swiper Styling */}
        <style jsx global>{`
          .swiper-pagination {
            bottom: 20px !important;
          }
          
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: rgba(255, 255, 255, 0.5);
            opacity: 1;
          }
          
          .swiper-pagination-bullet-active {
            background: #d4af37;
          }
          
          .swiper-button-next,
          .swiper-button-prev {
            color: rgba(255, 255, 255, 0.8);
            background: rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            margin-top: -20px;
          }
          
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 16px;
          }
          
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: rgba(0, 0, 0, 0.7);
          }
        `}</style>
      </div>
    </section>
  )
}

export { OverviewSection }