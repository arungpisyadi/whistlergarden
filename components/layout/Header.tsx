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
  const pathname = usePathname()

  const navigationItems: NavigationItem[] = [
    { name: 'HOME', href: '/' },
    { name: 'EVENTS', href: '/events' },
    { name: 'PACKAGES', href: '/packages' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT', href: '/contact' }
  ]

  const isActive = (href: string) => pathname === href

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

          {/* Navigation - Right-aligned and always visible */}
          <nav className="flex items-center space-x-6 md:space-x-8">
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
        </div>
      </div>
    </header>
  )
}

export { Header }