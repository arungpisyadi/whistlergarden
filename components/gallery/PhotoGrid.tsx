'use client'

import Image from 'next/image'
import { Photo } from '@/lib/galleryData'

interface PhotoGridProps {
  photos: Photo[]
  onPhotoClick: (photo: Photo, index: number) => void
  className?: string
}

export const PhotoGrid = ({ photos, onPhotoClick, className = '' }: PhotoGridProps) => {
  if (photos.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-4xl text-gray-400">📷</span>
        </div>
        <p className="text-gray-500 font-inter text-lg">No photos found in this category</p>
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          onClick={() => onPhotoClick(photo, index)}
        >
          <div className="relative overflow-hidden">
            <div 
              className={`relative w-full ${
                photo.aspectRatio === '16/9' ? 'aspect-video' : 
                photo.aspectRatio === '4/3' ? 'aspect-[4/3]' : 
                photo.aspectRatio === '3/4' ? 'aspect-[3/4]' : 
                'aspect-square'
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              
              {/* View icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg 
                    className="w-8 h-8 text-primary-gold" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Photo info */}
            <div className="p-4">
              <h3 className="font-playfair text-lg font-semibold text-primary-gold mb-2 line-clamp-1">
                {photo.title}
              </h3>
              <p className="font-inter text-gray-600 text-sm line-clamp-2">
                {photo.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}