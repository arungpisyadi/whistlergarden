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

const leftNavigationItems = [
    {
        text: 'HOME',
        href: '#'
    },
    {
        text: 'CORPORATE EVENTS',
        href: '#corporate'
    },
    {
        text: 'BIRTHDAY',
        href: '#birthday'
    },
    {
        text: 'ARISAN & REUNI',
        href: '#arisan-reuni'
    }
]

    const rightNavigationItems = [
    {
        text: 'COMMUNITY EVENTS',
        href: '#community'
    },
    {
        text: 'FAMILY GATHERING',
        href: '#family-gathering'
    },
    {
        text: 'ABOUT US',
        href: '#about'
    },
    {
        text: 'CONTACT US',
        href: '#'
    }
]

const allNavigationItems = [...leftNavigationItems, ...rightNavigationItems]

return (
    <header className="bg-transparent">
        {/* Top Contact Bar */}
        <div className="bg-white text-primary-500">
            <div className="container-custom">
                <div className="flex flex-col sm:flex-row justify-between items-center pt-2 pb-4 text-xs gap-2">
                    <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <PhoneIcon className="h-4 w-4" />
                        <span>+63 32 238 6062</span>
                    </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center space-x-6 gap-2">
                        <div className="flex items-center space-x-2">
                            <MapPinIcon className="h-4 w-4" />
                            <span>FELIX AVENUE, SANTA RIZAL, PHILIPPINES</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <EnvelopeIcon className="h-4 w-4" />
                            <span>WHISTLERGARDEN.COM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-primary-500 text-white">
            <div className="container-custom">
                {/* Mobile Layout */}
                <div className="flex justify-between items-center py-4 lg:hidden">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2"
                    >
                        {isMobileMenuOpen ? (
                        <XMarkIcon className="h-6 w-6" />
                        ) : (
                        <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>

                    {/* Mobile Logo */}
                    <div className="flex-1 flex justify-center">
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center">
                                <img src="/images/logos/logo-transp-white.png" alt="Whistler Garden Logo" />
                            </div>
                        </div>
                    </div>

                    {/* Spacer for mobile alignment */}
                    <div className="w-10"></div>
                </div>

                {/* Desktop Layout - Three Section Design */}
                <div className="hidden lg:flex justify-between items-center py-10">
                    <div className="flex items-center justify-between w-full">
                        {/* Left Navigation */}
                        <nav className="flex space-x-6 bg-primary-500 text-white">
                            {leftNavigationItems.map((item) => (
                                <a
                                key={item?.text || 'nav-item'}
                                href={item?.href || '#'}
                                className="font-inter text-xs font-medium hover:text-accent-gold transition-colors duration-200 whitespace-nowrap"
                                >
                                {typeof item?.text === 'string' ? item.text : 'Menu Item'}
                                </a>
                            ))}
                        </nav>

                        {/* Center Logo */}
                        <div className="flex-shrink-0 w-40">
                            <div className="flex flex-col items-center">
                                <div className="w-40 h-40 bg-primary-500 rounded-full flex items-center justify-center absolute top-2.5 z-40">
                                    <img src="/images/logos/logo-transp-white.png" alt="Whistler Garden Logo" />
                                </div>
                            </div>
                        </div>

                        {/* Right Navigation */}
                        <nav className="flex space-x-6 bg-primary-500 text-white">
                            {rightNavigationItems.map((item) => (
                                <a
                                key={item?.text || 'nav-item'}
                                href={item?.href || '#'}
                                className="font-inter text-xs font-medium hover:text-accent-gold transition-colors duration-200 whitespace-nowrap"
                                >
                                {typeof item?.text === 'string' ? item.text : 'Menu Item'}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-600">
                    <nav className="py-4 space-y-4">
                    {allNavigationItems.map((item) => (
                        <a
                        key={item?.text || 'nav-item'}
                        href={item?.href || '#'}
                        className="block font-inter text-sm font-medium hover:text-accent-gold transition-colors duration-200 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                        >
                        {typeof item?.text === 'string' ? item.text : 'Menu Item'}
                        </a>
                    ))}
                    </nav>
                </div>
                )}
            </div>
        </div>
    </header>
)
}

export { Header }