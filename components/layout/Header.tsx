'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface NavigationItem {
  name: string
  href: string
}

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems: NavigationItem[] = [
    { name: 'HOME', href: '/' },
    { name: 'EVENTS', href: '/events' },
    { name: 'PACKAGES', href: '/packages' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT', href: '/contact' }
  ]

  const isActive = (href: string) => pathname === href

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu when pathname changes
  useEffect(() => {
    closeMobileMenu()
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the hero section (100vh)
      const heroHeight = window.innerHeight
      
      // Check if we've scrolled past the hero section
      const shouldBeSticky = window.scrollY >= heroHeight
      
      setIsSticky(shouldBeSticky)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Call once to check initial position
    handleScroll()

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`top-0 left-0 right-0 z-[9999] text-white transition-all duration-300 ease-in-out ${
      isSticky
        ? 'fixed bg-white bg-opacity-25 backdrop-blur-sm shadow-lg border border-black/10'
        : 'absolute'
    }`}>
      {/* Main Navigation */}
      <div className="container-custom">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/images/logos/Logo-Whistler-Garden_white_HD.png"
                alt="Whistler Garden Logo"
                width={200}
                height={60}
                className="h-auto w-auto max-w-[35%] md:max-w-[65%]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6 md:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-inter text-xs md:text-sm font-medium transition-colors duration-200 py-2 ${
                  isActive(item.href)
                    ? 'text-primary-gold-light'
                    : 'hover:text-primary-gold-light'
                }`}
              >
                {item.name}
                {/* Active indicator - bottom border */}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-gold-light"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Burger Button - Visible on mobile only */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group focus:outline-none focus:ring-2 focus:ring-primary-gold-light focus:ring-offset-2 focus:ring-offset-transparent"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {/* Hamburger Icon - transforms to X when open */}
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-heading"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          
          {/* Mobile Menu Panel */}
          <div className={`absolute top-0 right-0 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 id="mobile-menu-heading" className="text-lg font-semibold text-gray-900">
                Menu
              </h2>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-gold-light"
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
              >
                <span className="sr-only">Close menu</span>
                {/* X icon */}
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="py-4" id="mobile-menu">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-6 py-4 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-gold-light bg-gray-50 border-r-4 border-primary-gold-light'
                      : 'text-gray-900 hover:text-primary-gold-light hover:bg-gray-50'
                  }`}
                  onClick={closeMobileMenu}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      closeMobileMenu()
                      // Let the Link handle navigation
                    }
                  }}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="ml-auto">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export { Header }