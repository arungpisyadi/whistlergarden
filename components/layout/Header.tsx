'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { 
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    'HOME',
    'ROOMS',
    'MEETING AND EVENTS',
    'PROMOS',
    'PHOTOS',
    'ABOUT US',
    'RESTAURANT',
    'CONTACT US'
  ]

  return (
    <header className="bg-primary-500 text-white">
      {/* Top Contact Bar */}
      <div className="border-b border-gray-600">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-4 w-4" />
                <span>+63 32 238 6062</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-4 w-4" />
                <span>FELIX AVENUE, SANTA RIZAL, PHILIPPINES</span>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-4 w-4" />
                <span>STRADELLAHOTEL.COM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center lg:justify-start lg:flex-none">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mb-2">
                <span className="font-playfair font-bold text-2xl text-white">S</span>
              </div>
              <div className="font-playfair text-xl font-bold text-accent-gold text-center">
                STRADELLA<br />HOTEL
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 ml-8">
            {navigationItems.map((item) => (
              <a
                key={item}
                href="#"
                className="font-inter text-sm font-medium hover:text-accent-gold transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-600">
            <nav className="py-4 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block font-inter text-sm font-medium hover:text-accent-gold transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export { Header }