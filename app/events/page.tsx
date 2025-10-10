'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Events() {
  // Consolidated venues array
  const venues = [
    {
      id: 'sky-glass-house',
      name: 'Sky Glass House',
      tagline: 'Where intimacy meets elegance — a luxurious glass venue designed to frame your most precious moment',
      capacity: 'Up to 150 guests',
      features: ['360° Panoramic Views', 'Natural Lighting', 'Climate Controlled', 'Garden Views'],
      description: 'Experience the perfect blend of intimacy and elegance in our stunning Sky Glass House. This luxurious glass venue offers breathtaking panoramic views and natural lighting that beautifully frames your most precious moments.',
      images: [
        'https://placehold.co/800x600/4F46E5/FFFFFF/png?text=Sky+Glass+House+Interior',
        'https://placehold.co/800x600/6366F1/FFFFFF/png?text=Wedding+Ceremony+Setup',
        'https://placehold.co/800x600/8B5CF6/FFFFFF/png?text=Reception+Venue+View'
      ]
    },
    {
      id: 'royal-glass-house',
      name: 'Royal Glass House',
      tagline: 'A touch of grandeur beneath crystal clarity — where elegance meets timeless sophistication',
      capacity: 'Up to 200 guests',
      features: ['Royal Architecture', 'Premium Amenities', 'Exclusive Access', 'Grand Entrance'],
      description: 'Step into a world of grandeur with our Royal Glass House. This premium venue combines crystal clarity with royal sophistication, creating an atmosphere of timeless elegance for your special celebration.',
      images: [
        'https://placehold.co/800x600/DC2626/FFFFFF/png?text=Royal+Glass+House+Interior',
        'https://placehold.co/800x600/EF4444/FFFFFF/png?text=Luxury+Wedding+Ceremony',
        'https://placehold.co/800x600/F87171/FFFFFF/png?text=Elegant+Reception+Hall'
      ]
    },
    {
      id: 'grand-ballroom',
      name: 'Grand Ballroom',
      tagline: 'Step into timeless elegance — a luxurious setting designed to make every moment unforgettable',
      capacity: 'Up to 500 guests',
      features: ['Grand Architecture', 'Professional Sound System', 'Flexible Layout', 'Luxury Finishes'],
      description: 'Our magnificent Grand Ballroom epitomizes timeless elegance with its classical design elements and state-of-the-art facilities, creating a luxurious setting that makes every moment unforgettable.',
      images: [
        'https://placehold.co/800x600/059669/FFFFFF/png?text=Grand+Ballroom+Space',
        'https://placehold.co/800x600/10B981/FFFFFF/png?text=Luxury+Reception+Setup',
        'https://placehold.co/800x600/34D399/FFFFFF/png?text=Dancing+%26+Celebration'
      ]
    },
    {
      id: 'vip-room',
      name: 'VIP Room',
      tagline: 'Host your meeting or private event — an exclusive space designed for privacy, comfort, and elevated experience',
      capacity: 'Up to 50 guests',
      features: ['Complete Privacy', 'Luxury Furnishings', 'Dedicated Service', 'Executive Amenities'],
      description: 'Experience the ultimate in exclusivity with our VIP Room. This private space offers luxury furnishings, dedicated service, and complete privacy for high-profile meetings and intimate corporate events.',
      images: [
        'https://placehold.co/800x600/7C2D12/FFFFFF/png?text=VIP+Meeting+Space',
        'https://placehold.co/800x600/92400E/FFFFFF/png?text=Executive+Room+Setup',
        'https://placehold.co/800x600/A16207/FFFFFF/png?text=Private+Dining+Area'
      ]
    },
    {
      id: 'function-room',
      name: 'Function Room',
      tagline: 'Luxury function room designed to elevate every event with elegance, comfort, and unforgettable atmosphere',
      capacity: 'Up to 100 guests',
      features: ['Modern Equipment', 'Flexible Setup', 'Professional Environment', 'High-Speed Wi-Fi'],
      description: 'Our versatile Function Room combines luxury with functionality, providing the perfect environment for corporate events, meetings, and professional gatherings with modern amenities and flexible arrangements.',
      images: [
        'https://placehold.co/800x600/1F2937/FFFFFF/png?text=Function+Room+Setup',
        'https://placehold.co/800x600/374151/FFFFFF/png?text=Professional+Presentation',
        'https://placehold.co/800x600/4B5563/FFFFFF/png?text=Corporate+Networking'
      ]
    }
  ]

  const renderPhotoSlider = (images: string[], title: string) => (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-80 rounded-lg overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div 
              className="h-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center"
              style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 text-center text-white">
                <p className="font-inter text-lg opacity-80">{title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )

  const renderVenueCard = (venue: any, category: string) => (
    <div key={venue.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {renderPhotoSlider(venue.images, venue.name)}
      <div className="p-8">
        <div className="mb-4">
          <h3 className="font-playfair text-2xl font-bold text-primary-500 mb-2">{venue.name}</h3>
          <p className="font-inter text-primary-600 italic text-lg leading-relaxed">{venue.tagline}</p>
        </div>
        
        <div className="mb-6">
          <p className="font-inter text-gray-700 leading-relaxed">{venue.description}</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="bg-primary-gold/10 px-4 py-2 rounded-lg">
            <span className="font-inter text-sm font-semibold text-primary-600">Capacity: {venue.capacity}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-inter font-semibold text-gray-900 mb-3">Key Features</h4>
          <div className="grid grid-cols-2 gap-2">
            {venue.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-primary-gold rounded-full mr-2 flex-shrink-0"></span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full" variant="primary" size="md">
          Inquire About This Venue
        </Button>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen lg:h-[86.5vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://placehold.co/1920x1080/1a365d/ffffff.jpg)'
          }}
        />
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/35" />
        
        {/* Hero Content */}
        <div className="relative z-0 h-full flex items-end justify-start bottom-16">
          <div className="text-right text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div>
              <p className="text-base md:text-xl mb-4 text-shadow-lg">
                Exceptional Events & Celebrations
              </p>
              <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-shadow-lg mb-8 tracking-wide">
                WHISTLER GARDEN
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary-500 mb-4">Our Event Spaces</h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the perfect destination for Meetings, Incentives, Conferences, and Exhibitions. Our venue combines state-of-the-art facilities, exceptional service, and a prestigious atmosphere to ensure every event is seamless, impactful, and memorable.
            </p>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe every meeting and event should be more than just a gathering. Whether you are planning a corporate conference, team-building retreat, or milestone celebration, our dedicated team is here to transform your vision into a remarkable event.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
            {venues.map((venue) => renderVenueCard(venue, 'venue'))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-primary-500 text-white full-width">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Complete Event Services</h3>
            <p className="font-inter text-xl text-primary-100 max-w-3xl mx-auto">
              Our experienced team handles every detail to ensure your event is flawless from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-inter font-semibold text-lg mb-2">Event Planning</h4>
              <p className="text-primary-100 text-sm">Comprehensive planning from concept to execution</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h4 className="font-inter font-semibold text-lg mb-2">Catering Services</h4>
              <p className="text-primary-100 text-sm">Exquisite cuisine and beverage service</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h4 className="font-inter font-semibold text-lg mb-2">Audio Visual</h4>
              <p className="text-primary-100 text-sm">Professional sound and lighting equipment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="font-inter font-semibold text-lg mb-2">Luxury Service</h4>
              <p className="text-primary-100 text-sm">Dedicated staff for exceptional hospitality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-gold">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-playfair text-4xl md:text-5xl font-bold text-primary-500 mb-6">
              Ready to Plan Your Perfect Event?
            </h3>
            <p className="font-inter text-xl text-gray-700 mb-8 leading-relaxed">
              Contact our events team today to discuss your vision and discover how we can make your special occasion unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-4 text-lg" variant="primary" size="lg">
                Contact Events Team
              </Button>
              <Button className="px-8 py-4 text-lg" variant="secondary" size="lg">
                Request a Quote
              </Button>
            </div>
            <div className="mt-8 text-center">
              <p className="font-inter text-gray-600 mb-2">Or call us directly:</p>
              <p className="font-inter text-2xl font-bold text-primary-500">+62 XXX XXXX XXXX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 10px !important;
        }
        
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        
        .swiper-pagination-bullet-active {
          background: #ffffff;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          color: rgba(255, 255, 255, 0.8);
          background: rgba(0, 0, 0, 0.3);
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
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </main>
  )
}