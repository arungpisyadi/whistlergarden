'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok
} from '@fortawesome/free-brands-svg-icons'
import {
  MapPinIcon,
  PhoneIcon,
  GlobeAltIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

interface FooterProps {
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubscribing(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter subscription:', email)
      setEmail('')
      setIsSubscribing(false)
      // Show success message here
    }, 1000)
  }

  const socialLinks = [
    { name: 'Facebook', icon: faFacebookF, href: '#' },
    { name: 'Instagram', icon: faInstagram, href: '#' },
    { name: 'YouTube', icon: faYoutube, href: '#' },
    { name: 'TikTok', icon: faTiktok, href: '#' }
  ]

  return (
    <footer className={`bg-black text-white ${className}`}>
      <div className="container-custom py-16">
        {/* Newsletter Section */}
        {/* <div className="text-center mb-16">
          <h3 className="font-playfair text-3xl md:text-4xl font-semibold mb-4">
            NEWS AND OFFERS FROM US
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest news, special offers, and exclusive deals. Subscribe to our newsletter.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white text-gray-900"
                required
              />
              <Button
                type="submit"
                variant="primary"
                disabled={isSubscribing}
                className="font-bold tracking-wide whitespace-nowrap"
              >
                {isSubscribing ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
              </Button>
            </div>
          </form>
        </div> */}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Hotel Logo & Info */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6 md:mb-0">
              <div className="flex flex-col items-center lg:items-start">
                <img
                  src="/images/logos/Logo-Whistler-Garden_white_HD.png"
                  alt="Whistler Garden Logo"
                  className="w-40 h-40 object-contain mb-4 md:mb-0"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience the beauty of luxury at Whistler Garden. Your perfect getaway awaits with exceptional service and unforgettable memories.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center lg:text-left">
            <h4 className="font-playfair text-xl font-semibold mb-6 text-accent-gold">
              Contact Information
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <MapPinIcon className="hidden md:block h-5 w-5 text-accent-gold flex-shrink-0" />
                <span>Jl. Rasuna Said, Salembaran, Kosambi, Tangerang Regency, Banten 15214</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <PhoneIcon className="hidden md:block h-5 w-5 text-accent-gold flex-shrink-0" />
                <span>+62 811-8118-7567</span>
              </div>
              {/* <div className="flex items-center justify-center lg:justify-start space-x-3">
                <GlobeAltIcon className="h-5 w-5 text-accent-gold flex-shrink-0" />
                <span>WHISTLERGARDEN.COM</span>
              </div> */}
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <EnvelopeIcon className="hidden md:block h-5 w-5 text-accent-gold flex-shrink-0" />
                <span>salesteam.wg@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Social Media */}
          <div className="text-center lg:text-left">
            <h4 className="font-playfair text-xl font-semibold mb-6 text-accent-gold">
              Follow Us
            </h4>
            <div className="flex justify-center lg:justify-start space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 hover:bg-accent-gold rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="w-4 h-4"
                  />
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Business Hours:</p>
              <p className="text-white">24/7 Front Desk Service</p>
              <p className="text-white">Restaurant: 6:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © 2025 Whistler Garden. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-accent-gold transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-gold transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-gold transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }