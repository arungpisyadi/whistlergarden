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
  const [activeEventType, setActiveEventType] = useState<string>('wedding')

  // Wedding event venues
  const weddingVenues = [
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
    }
  ]

  // Corporate event venues
  const corporateVenues = [
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
    }
  ]

  // Special events
  const specialEvents = [
    {
      id: 'custom-celebrations',
      name: 'Custom Celebrations',
      tagline: 'Tailored experiences that transform your vision into unforgettable reality',
      capacity: 'Customizable capacity',
      features: ['Custom Theming', 'Personalized Service', 'Flexible Venues', 'Creative Freedom'],
      description: 'From milestone birthdays to anniversary celebrations, we create bespoke experiences tailored to your unique vision. Our expert team works with you to bring your dream event to life.',
      images: [
        'https://placehold.co/800x600/BE185D/FFFFFF/png?text=Birthday+Celebration',
        'https://placehold.co/800x600/DB2777/FFFFFF/png?text=Anniversary+Setup',
        'https://placehold.co/800x600/EC4899/FFFFFF/png?text=Special+Event+Space'
      ]
    },
    {
      id: 'private-dining',
      name: 'Private Dining Experiences',
      tagline: 'Intimate culinary journeys in exclusive settings',
      capacity: 'Up to 30 guests',
      features: ['Chef\'s Table Experience', 'Wine Pairing', 'Intimate Setting', 'Personalized Menu'],
      description: 'Indulge in exclusive private dining experiences with our acclaimed culinary team. Perfect for intimate celebrations, business dinners, and special occasions that call for exceptional cuisine.',
      images: [
        'https://placehold.co/800x600/7C3AED/FFFFFF/png?text=Private+Dining+Setup',
        'https://placehold.co/800x600/8B5CF6/FFFFFF/png?text=Chef+Table+Experience',
        'https://placehold.co/800x600/A78BFA/FFFFFF/png?text=Wine+Pairing+Dinner'
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

        <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
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
      <section className="relative bg-primary-500 text-white py-32 full-width">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500" />
        <div className="relative z-10 container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
              Exceptional Events
            </h1>
            <p className="font-inter text-xl md:text-2xl text-primary-50 leading-relaxed mb-8">
              Create unforgettable moments in our stunning venues. From intimate celebrations to grand galas, 
              Whistler Garden provides the perfect backdrop for your most important occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary-500 hover:bg-primary-50 px-8 py-4 text-lg">
                Schedule a Tour
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 text-lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-primary-500 mb-4">Our Event Spaces</h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our exceptional venues, each designed to create the perfect atmosphere for your celebration
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveEventType('wedding')}
              className={`px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 ${
                activeEventType === 'wedding'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-primary-500 hover:bg-primary-50 border border-primary-200'
              }`}
            >
              Wedding Events
            </button>
            <button
              onClick={() => setActiveEventType('corporate')}
              className={`px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 ${
                activeEventType === 'corporate'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-primary-500 hover:bg-primary-50 border border-primary-200'
              }`}
            >
              Corporate Events
            </button>
            <button
              onClick={() => setActiveEventType('special')}
              className={`px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 ${
                activeEventType === 'special'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-primary-500 hover:bg-primary-50 border border-primary-200'
              }`}
            >
              Special Events
            </button>
          </div>
        </div>
      </section>

      {/* Wedding Events Section */}
      {activeEventType === 'wedding' && (
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-primary-500 mb-4">Wedding Venues</h3>
              <p className="font-inter text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Your wedding day deserves a setting as beautiful and unique as your love story. Choose from our stunning glass houses and grand ballroom, each offering a distinctive atmosphere for your perfect day.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
              {weddingVenues.map((venue) => renderVenueCard(venue, 'wedding'))}
            </div>
          </div>
        </section>
      )}

      {/* Corporate Events Section */}
      {activeEventType === 'corporate' && (
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-primary-500 mb-4">Corporate Venues</h3>
              <p className="font-inter text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Elevate your business events with our professional venues equipped with modern amenities and sophisticated environments designed to impress clients and inspire teams.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
              {corporateVenues.map((venue) => renderVenueCard(venue, 'corporate'))}
            </div>
          </div>
        </section>
      )}

      {/* Special Events Section */}
      {activeEventType === 'special' && (
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-primary-500 mb-4">Special Celebrations</h3>
              <p className="font-inter text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From milestone birthdays to intimate anniversaries, we create bespoke experiences that celebrate life's most precious moments with style and sophistication.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
              {specialEvents.map((venue) => renderVenueCard(venue, 'special'))}
            </div>
          </div>
        </section>
      )}

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
              <Button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg">
                Contact Events Team
              </Button>
              <Button className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 text-lg">
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