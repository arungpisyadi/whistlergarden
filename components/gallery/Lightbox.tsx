'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Photo } from '@/lib/galleryData'

interface LightboxProps {
  photo: Photo | null
  photos: Photo[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export const Lightbox = ({
  photo,
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious
}: LightboxProps) => {
  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          onPrevious()
          break
        case 'ArrowRight':
          onNext()
          break
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    document.body.style.overflow = 'hidden' // Prevent background scroll

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, onNext, onPrevious])

  if (!isOpen || !photo) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto p-4 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-white">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold">
              {photo.title}
            </h2>
            <p className="font-inter text-gray-300 mt-1">
              {currentIndex + 1} of {photos.length}
            </p>
          </div>
          
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Image container */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Previous button */}
          {photos.length > 1 && currentIndex > 0 && (
            <button
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-300 p-3 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Previous photo"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          
          {/* Next button */}
          {photos.length > 1 && currentIndex < photos.length - 1 && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-300 p-3 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Next photo"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          
          {/* Image */}
          <div className="relative max-w-full max-h-full">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[70vh] w-auto h-auto object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Photo description */}
        <div className="text-center text-white mt-4 max-w-2xl mx-auto">
          <p className="font-inter text-gray-300 leading-relaxed">
            {photo.description}
          </p>
        </div>
        
        {/* Thumbnail navigation */}
        {photos.length > 1 && (
          <div className="mt-6 flex justify-center">
            <div className="flex gap-2 overflow-x-auto max-w-full pb-2">
              {photos.map((thumbPhoto, index) => (
                <button
                  key={thumbPhoto.id}
                  onClick={() => {
                    const diff = index - currentIndex
                    if (diff > 0) {
                      for (let i = 0; i < diff; i++) onNext()
                    } else if (diff < 0) {
                      for (let i = 0; i < Math.abs(diff); i++) onPrevious()
                    }
                  }}
                  className={`
                    relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all
                    ${index === currentIndex 
                      ? 'border-primary-gold shadow-lg' 
                      : 'border-white/20 hover:border-white/50'
                    }
                  `}
                >
                  <Image
                    src={thumbPhoto.src}
                    alt={thumbPhoto.alt}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}