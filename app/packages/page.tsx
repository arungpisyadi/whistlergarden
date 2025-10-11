import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StarIcon, CheckIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Packages - Whistler Garden',
  description: 'Explore our curated accommodation and experience packages at Whistler Garden. From romantic getaways to corporate retreats, find the perfect package for your stay.',
  keywords: 'packages, accommodation packages, romantic packages, corporate packages, whistler garden deals, hotel packages',
}

export default function Packages() {

  const corporatePackages = [
    {
      name: 'Business Meeting',
      price: 'IDR 2,500,000 / day',
      venue: 'VIP Room',
      capacity: 'Up to 20 people',
      duration: 'Half/Full Day',
      features: [
        'VIP Room with modern facilities',
        'High-speed Wi-Fi & AV equipment',
        'Welcome coffee & tea service',
        'Morning & afternoon refreshments',
        'Lunch buffet or set menu',
        'Stationery & meeting materials',
        '24-hour technical support',
        'Parking for all attendees'
      ]
    },
    {
      name: 'Corporate Retreat',
      price: 'IDR 8,500,000 / package',
      venue: 'Function Room + Accommodation',
      capacity: 'Up to 40 people',
      duration: '2 Days / 1 Night',
      features: [
        'Function Room for presentations',
        'Team accommodation (Premium Suites)',
        'Welcome dinner & farewell lunch',
        'Team building activities',
        'Garden tour & outdoor activities',
        'Business center access',
        'Group transportation',
        'Corporate event coordinator',
        'Customizable meeting schedules'
      ],
      popular: true
    },
    {
      name: 'Executive Package',
      price: 'IDR 15,000,000 / package',
      venue: 'Grand Ballroom + Premium Facilities',
      capacity: 'Up to 100 people',
      duration: '3 Days / 2 Nights',
      features: [
        'Grand Ballroom for conferences',
        'Executive accommodation',
        'All meals & premium dining',
        'Professional conference setup',
        'Keynote speaker facilities',
        'Executive lounge access',
        'Concierge services',
        'Airport transfers',
        'Gala dinner event',
        'Awards ceremony setup'
      ]
    }
  ]

  const hotelPackages = [
    {
      name: 'Romantic Getaway',
      price: 'IDR 3,200,000 / 2 nights',
      room: '40m² Suite',
      guests: 'Up to 2 guests',
      features: [
        'Luxury suite with king bed',
        'Welcome champagne & chocolates',
        'Couples spa treatment',
        'Private candlelit dinner',
        'Late check-out until 2 PM',
        'Complimentary breakfast in bed',
        'Rose petal room decoration',
        'Access to all facilities'
      ]
    },
    {
      name: 'Family Package',
      price: 'IDR 4,800,000 / 3 nights',
      room: '50m² Premium Suite',
      guests: 'Up to 4 guests',
      features: [
        'Premium Suite with sofa bed',
        'Family welcome amenities',
        'Complimentary extra bed',
        'Family dining experiences',
        'Garden activities for children',
        'Swimming pool access',
        'Family game room access',
        'Kids meal options included',
        'Baby cot available on request'
      ],
      popular: true
    },
    {
      name: 'Extended Stay',
      price: 'IDR 12,000,000 / 7 nights',
      room: 'Choice of Suite',
      guests: 'Up to 4 guests',
      features: [
        'Flexible suite accommodation',
        'Weekly housekeeping service',
        'Laundry service included',
        'Kitchen facilities access',
        'Extended minibar privileges',
        'Complimentary Wi-Fi',
        'Business center access',
        'Concierge services',
        'Special weekly dining credits'
      ]
    }
  ]

  const experiencePackages = [
    {
      name: 'Culinary Journey',
      price: 'IDR 4,500,000 / 2 nights',
      experience: 'Dining & Accommodation',
      highlights: 'Chef experiences & tastings',
      features: [
        'Suite accommodation for 2 nights',
        'Welcome chef\'s tasting menu',
        'Cooking class with executive chef',
        'Private wine tasting session',
        'Farm-to-table garden tour',
        'Gourmet breakfast experiences',
        'Recipe collection gift',
        'Culinary photo session'
      ]
    },
    {
      name: 'Garden Escape',
      price: 'IDR 3,800,000 / 2 nights',
      experience: 'Nature & Wellness',
      highlights: 'Garden tours & relaxation',
      features: [
        'Garden-view suite accommodation',
        'Guided botanical garden tours',
        'Morning yoga in the gardens',
        'Spa treatments with natural ingredients',
        'Outdoor picnic lunch setup',
        'Photography workshop',
        'Herb garden cooking class',
        'Meditation sessions'
      ]
    },
    {
      name: 'Celebration Package',
      price: 'IDR 6,800,000 / package',
      experience: 'Special Occasions',
      highlights: 'Customizable celebrations',
      features: [
        'Premium suite accommodation',
        'Customized celebration setup',
        'Professional event coordination',
        'Specialty cake or dessert',
        'Photographer services',
        'Floral arrangements',
        'Special dining experiences',
        'Memory book creation',
        'Personalized gift basket'
      ],
      popular: true
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative text-white h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: "url('https://placehold.co/1920x800/493010/ffffff/png?text=packages')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/25" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg">
              Curated Packages
            </h1>
            <p className="font-inter text-xl md:text-2xl text-neutral-cream-100 leading-relaxed mb-8">
              Discover our thoughtfully designed packages that combine luxury accommodations, 
              exceptional dining, and unique experiences for an unforgettable stay at Whistler Garden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#packages" className="btn-primary">
                Explore Packages
              </a>
              <a href="#contact" className="btn-secondary bg-white text-primary-gold hover:bg-primary-gold-50">
                Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Corporate Packages */}
      <section id="corporate" className="section-padding bg-neutral-cream-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Corporate Packages</h2>
            <p className="font-inter text-lg text-gray-700 max-w-3xl mx-auto">
              Elevate your business events with our professional corporate packages. 
              Perfect for meetings, retreats, conferences, and team building activities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {corporatePackages.map((pkg, index) => (
              <div key={index} className={`relative bg-white border-2 ${pkg.popular ? 'border-primary-gold' : 'border-neutral-beige-200'} rounded-xl p-8 hover:shadow-xl transition-shadow`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-gold text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-2xl font-bold text-primary-gold-800 mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-primary-gold mb-4">{pkg.price}</p>
                  <div className="space-y-1 text-gray-600">
                    <p className="font-semibold">{pkg.venue}</p>
                    <p>{pkg.capacity}</p>
                    <p>{pkg.duration}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-primary-gold mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <button className="w-full btn-primary">
                    Book Now
                  </button>
                  <button className="w-full btn-secondary">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Packages */}
      <section id="hotel" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Hotel Packages</h2>
            <p className="font-inter text-lg text-gray-700 max-w-3xl mx-auto">
              Indulge in luxury with our premium hotel packages. Each package includes exceptional accommodations 
              and exclusive amenities designed for comfort and relaxation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {hotelPackages.map((pkg, index) => (
              <div key={index} className={`relative bg-gradient-to-b from-neutral-cream-50 to-white border-2 ${pkg.popular ? 'border-primary-gold' : 'border-neutral-beige-200'} rounded-xl p-8 hover:shadow-xl transition-shadow`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-gold text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-2xl font-bold text-primary-gold-800 mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-primary-gold mb-4">{pkg.price}</p>
                  <div className="space-y-1 text-gray-600">
                    <p className="font-semibold">{pkg.room}</p>
                    <p>{pkg.guests}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-primary-gold mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <button className="w-full btn-primary">
                    Book Now
                  </button>
                  <button className="w-full btn-secondary">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Packages */}
      <section id="experience" className="section-padding bg-neutral-cream-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Experience Packages</h2>
            <p className="font-inter text-lg text-gray-700 max-w-3xl mx-auto">
              Create lasting memories with our unique experience packages. From culinary adventures 
              to wellness retreats, discover extraordinary moments at Whistler Garden.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {experiencePackages.map((pkg, index) => (
              <div key={index} className={`relative bg-white border-2 ${pkg.popular ? 'border-primary-gold' : 'border-neutral-beige-200'} rounded-xl p-8 hover:shadow-xl transition-shadow`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-gold text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-2xl font-bold text-primary-gold-800 mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-primary-gold mb-4">{pkg.price}</p>
                  <div className="space-y-1 text-gray-600">
                    <p className="font-semibold">{pkg.experience}</p>
                    <p className="italic">{pkg.highlights}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-primary-gold mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <button className="w-full btn-primary">
                    Book Experience
                  </button>
                  <button className="w-full btn-secondary">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="section-padding bg-gradient-to-r from-primary-gold-700 to-primary-gold-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Special Offers</h2>
            <p className="font-inter text-xl text-neutral-cream-100 max-w-3xl mx-auto">
              Take advantage of our seasonal promotions and limited-time offers
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4">Extended Stay Deal</h3>
              <p className="text-6xl font-bold mb-4">20%</p>
              <p className="text-xl mb-6">OFF 7+ night stays</p>
              <p className="mb-6">Perfect for corporate retreats or extended family vacations</p>
              <button className="btn-secondary bg-white text-primary-gold hover:bg-primary-gold-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section-padding bg-neutral-cream-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section-title mb-6">Ready to Book Your Perfect Package?</h2>
            <p className="font-inter text-lg text-gray-700 mb-8">
              Our dedicated team is here to help you create the perfect experience. 
              Contact us today to discuss your needs and customize any package.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <PhoneIcon className="w-8 h-8 text-primary-gold mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2">Call Us</h3>
                <a href="tel:+6281181187567" className="text-gray-600 hover:text-primary-gold cursor-pointer transition-colors">+62 811-8118-7567</a>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <EnvelopeIcon className="w-8 h-8 text-primary-gold mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2">Email Us</h3>
                <a href="mailto:salesteam.wg@gmail.com" className="text-gray-600 hover:text-primary-gold cursor-pointer transition-colors">salesteam.wg@gmail.com</a>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Request Custom Quote
              </button>
              <button className="btn-secondary">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}