import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from '@/components/forms/ContactForm'
import { 
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ClockIcon,
  GlobeAltIcon,
  MapIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Contact - Whistler Garden',
  description: 'Get in touch with Whistler Garden for wedding events, hotel bookings, and special occasions. Located in PIK 2 Entertainment District, Tangerang.',
  keywords: 'contact, reservations, whistler garden contact, hotel booking, wedding venue, PIK 2, Tangerang, event inquiries',
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary-500 text-white py-24">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Contact Whistler Garden
            </h1>
            <p className="font-inter text-xl text-gray-200 leading-relaxed">
              Located in the heart of PIK 2 Entertainment District, we're here to make your 
              special moments unforgettable. Contact our expert team for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-500 mb-12 text-center">
              Get In Touch
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Phone Numbers */}
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="h-8 w-8 text-accent-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary-500 mb-3">
                  Phone Numbers
                </h3>
                <div className="space-y-2">
                  <p className="font-inter text-gray-700 font-medium">
                    Wedding Events: 
                    <a href="tel:0811152211" className="block text-accent-gold hover:text-accent-gold/80 transition-colors">
                      0811-152-211
                    </a>
                  </p>
                  <p className="font-inter text-gray-700 font-medium">
                    General Inquiries:
                    <a href="tel:08118118757" className="block text-accent-gold hover:text-accent-gold/80 transition-colors">
                      0811-8118-7567
                    </a>
                  </p>
                </div>
                <p className="font-inter text-sm text-gray-500 mt-2">
                  Available daily, 8:00 AM - 10:00 PM
                </p>
              </div>
              
              {/* Email & Website */}
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon className="h-8 w-8 text-accent-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary-500 mb-3">
                  Email & Website
                </h3>
                <div className="space-y-2">
                  <p className="font-inter text-gray-700">
                    <a href="mailto:info@whistlergarden.com" className="text-accent-gold hover:text-accent-gold/80 transition-colors">
                      info@whistlergarden.com
                    </a>
                  </p>
                  <p className="font-inter text-gray-700">
                    <a href="https://www.whistlergarden.id" target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:text-accent-gold/80 transition-colors flex items-center justify-center gap-1">
                      <GlobeAltIcon className="h-4 w-4" />
                      www.whistlergarden.id
                    </a>
                  </p>
                </div>
                <p className="font-inter text-sm text-gray-500 mt-2">
                  Response within 24 hours
                </p>
              </div>
              
              {/* Address */}
              <div className="text-center md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="h-8 w-8 text-accent-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary-500 mb-3">
                  Address
                </h3>
                <p className="font-inter text-gray-700 leading-relaxed">
                  Jl HR Rasuna Said<br />
                  Entertainment District PIK 2<br />
                  Salembaran, Kosambi<br />
                  Tangerang Regency, Banten 15214
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-500 mb-12 text-center">
              Business Hours & Operations
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="h-8 w-8 text-accent-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary-500 mb-3">
                  Hotel Reception
                </h3>
                <div className="space-y-1 font-inter text-gray-700">
                  <p className="font-medium">24 Hours Daily</p>
                  <p className="text-sm text-gray-500">Check-in: 3:00 PM</p>
                  <p className="text-sm text-gray-500">Check-out: 12:00 PM</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="h-8 w-8 text-accent-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary-500 mb-3">
                  Restaurant
                </h3>
                <div className="space-y-1 font-inter text-gray-700">
                  <p className="font-medium">Daily: 6:00 AM - 11:00 PM</p>
                  <p className="text-sm text-gray-500">Breakfast: 6:00 AM - 10:00 AM</p>
                  <p className="text-sm text-gray-500">Lunch: 12:00 PM - 3:00 PM</p>
                  <p className="text-sm text-gray-500">Dinner: 6:00 PM - 11:00 PM</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="h-8 w-8 text-accent-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary-500 mb-3">
                  Event Consultation
                </h3>
                <div className="space-y-1 font-inter text-gray-700">
                  <p className="font-medium">Mon-Sun: 9:00 AM - 8:00 PM</p>
                  <p className="text-sm text-gray-500">Appointment recommended</p>
                  <p className="text-sm text-gray-500">Site visits available daily</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="h-8 w-8 text-accent-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary-500 mb-3">
                  Facilities
                </h3>
                <div className="space-y-1 font-inter text-gray-700">
                  <p className="font-medium">Pool: 6:00 AM - 10:00 PM</p>
                  <p className="text-sm text-gray-500">Fitness Center: 24 Hours</p>
                  <p className="text-sm text-gray-500">Garden: 24 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Directions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-500 mb-12 text-center">
              Location & Directions
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapIcon className="h-6 w-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-primary-500 mb-3">
                      Detailed Address
                    </h3>
                    <p className="font-inter text-gray-700 leading-relaxed mb-4">
                      <strong>Whistler Garden Hotel & Wedding Venue</strong><br />
                      Jl HR Rasuna Said, Entertainment District PIK 2<br />
                      Salembaran, Kosambi<br />
                      Tangerang Regency, Banten 15214<br />
                      Indonesia
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-playfair text-lg font-semibold text-primary-500 mb-2">
                      By Private Vehicle
                    </h4>
                    <ul className="font-inter text-gray-700 space-y-1 text-sm">
                      <li>• From Jakarta: 45-60 minutes via Jalan Tol Sedyatmo</li>
                      <li>• From Soekarno-Hatta Airport: 20-30 minutes</li>
                      <li>• Free parking available on-site</li>
                      <li>• Valet parking service available</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-playfair text-lg font-semibold text-primary-500 mb-2">
                      Public Transportation
                    </h4>
                    <ul className="font-inter text-gray-700 space-y-1 text-sm">
                      <li>• Airport Rail Link to Batu Ceper, then taxi (recommended)</li>
                      <li>• TransJakarta to Kalideres, then connecting bus</li>
                      <li>• Online taxi services (Gojek, Grab) readily available</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-playfair text-xl font-semibold text-primary-500 mb-4">
                    Key Landmarks & Distances
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-inter text-gray-700">Soekarno-Hatta Airport</span>
                      <span className="font-inter font-medium text-accent-gold">20-30 min</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-inter text-gray-700">Jakarta City Center</span>
                      <span className="font-inter font-medium text-accent-gold">45-60 min</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-inter text-gray-700">PIK Avenue Mall</span>
                      <span className="font-inter font-medium text-accent-gold">10-15 min</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-inter text-gray-700">Ancol Beach</span>
                      <span className="font-inter font-medium text-accent-gold">25-30 min</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-inter text-gray-700">Taman Impian Jaya Ancol</span>
                      <span className="font-inter font-medium text-accent-gold">30-35 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-500 mb-12 text-center">
              Nearby Attractions & Entertainment
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mb-4">
                  <StarIcon className="h-6 w-6 text-accent-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary-500 mb-3">
                  Pantjoran PIK Entertainment District
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed mb-3">
                  A vibrant culinary and entertainment hub featuring traditional Indonesian food courts, 
                  modern restaurants, and cultural attractions just minutes from our venue.
                </p>
                <p className="font-inter text-accent-gold text-sm font-medium">
                  5 minutes walk • Open daily
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mb-4">
                  <StarIcon className="h-6 w-6 text-accent-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary-500 mb-3">
                  Indonesian Design District
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed mb-3">
                  Discover local crafts, art galleries, and design studios showcasing Indonesian creativity 
                  and innovation in this cultural destination.
                </p>
                <p className="font-inter text-accent-gold text-sm font-medium">
                  8 minutes drive • Tue-Sun
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mb-4">
                  <StarIcon className="h-6 w-6 text-accent-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary-500 mb-3">
                  Dragon Point
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed mb-3">
                  An iconic waterfront destination offering stunning views, dining experiences, 
                  and recreational activities along the northern Jakarta coastline.
                </p>
                <p className="font-inter text-accent-gold text-sm font-medium">
                  10 minutes drive • Open daily
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mb-4">
                  <StarIcon className="h-6 w-6 text-accent-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary-500 mb-3">
                  Batavia Historic Area
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed mb-3">
                  Explore Jakarta's colonial heritage with museums, historic buildings, 
                  and traditional markets in this well-preserved cultural district.
                </p>
                <p className="font-inter text-accent-gold text-sm font-medium">
                  25 minutes drive • Mon-Sun
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mb-4">
                  <StarIcon className="h-6 w-6 text-accent-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary-500 mb-3">
                  Aloha Beach Club
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed mb-3">
                  Enjoy beachside relaxation, water sports, and tropical dining at this popular 
                  coastal destination perfect for pre or post-event celebrations.
                </p>
                <p className="font-inter text-accent-gold text-sm font-medium">
                  15 minutes drive • Daily 9 AM - 11 PM
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mb-4">
                  <StarIcon className="h-6 w-6 text-accent-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary-500 mb-3">
                  PIK Avenue Shopping Center
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed mb-3">
                  A modern shopping destination with international brands, dining options, 
                  and entertainment facilities for your guests' convenience.
                </p>
                <p className="font-inter text-accent-gold text-sm font-medium">
                  12 minutes drive • Daily 10 AM - 10 PM
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="font-inter text-gray-600">
                Our concierge team is happy to arrange transportation and provide recommendations 
                for exploring these wonderful attractions during your stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}