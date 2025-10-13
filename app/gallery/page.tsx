'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CategoryFilter } from '@/components/gallery/CategoryFilter'
import { PhotoGrid } from '@/components/gallery/PhotoGrid'
import { Lightbox } from '@/components/gallery/Lightbox'
import { 
  galleryPhotos, 
  getAllCategories, 
  getPhotosByCategory, 
  Photo 
} from '@/lib/galleryData'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  
  const categories = getAllCategories()
  const filteredPhotos = getPhotosByCategory(activeCategory)

  const handlePhotoClick = (photo: Photo, index: number) => {
    setLightboxPhoto(photo)
    setLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false)
    setLightboxPhoto(null)
  }

  const handleNextPhoto = () => {
    const nextIndex = lightboxIndex + 1
    if (nextIndex < filteredPhotos.length) {
      setLightboxIndex(nextIndex)
      setLightboxPhoto(filteredPhotos[nextIndex])
    }
  }

  const handlePreviousPhoto = () => {
    const prevIndex = lightboxIndex - 1
    if (prevIndex >= 0) {
      setLightboxIndex(prevIndex)
      setLightboxPhoto(filteredPhotos[prevIndex])
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://placehold.co/1920x1080/B59F3B/ffffff.jpg?text=Whistler+Garden+Gallery)'
          }}
        />
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/35" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg">
              Discover Our Gallery
            </h1>
            
            <p className="font-inter text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Immerse yourself in the stunning beauty of Whistler Garden through our curated collection of photographs.
              From luxurious accommodations to breathtaking gardens, explore what makes our venue truly extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-gold mb-4">
              Explore Our Spaces
            </h2>
            <p className="font-inter text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Browse through our carefully curated collection showcasing the elegance and sophistication 
              of Whistler Garden's accommodations, venues, and memorable moments.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Results Info */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="font-inter text-gray-600">
                <span className="font-semibold text-primary-gold">{filteredPhotos.length}</span> 
                {' '}photos
                {activeCategory !== 'all' && (
                  <>
                    {' '}in{' '}
                    <span className="font-semibold text-primary-gold">
                      {categories.find(cat => cat.id === activeCategory)?.name}
                    </span>
                  </>
                )}
              </div>
              
              {/* View Options */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 font-inter">View:</span>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button className="px-3 py-1 text-sm bg-primary-gold text-white rounded font-inter">
                    Grid
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Grid */}
          <PhotoGrid
            photos={filteredPhotos}
            onPhotoClick={handlePhotoClick}
            className="mb-16"
          />

          {/* Additional Info Section */}
          {filteredPhotos.length > 0 && (
            <div className="bg-gradient-gold rounded-2xl p-8 md:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary-gold mb-4">
                  Want to Experience This in Person?
                </h3>
                <p className="font-inter text-gray-700 mb-6 leading-relaxed">
                  Our gallery showcases just a glimpse of what Whistler Garden has to offer. 
                  Contact us to schedule a visit and experience the beauty and elegance firsthand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary font-inter">
                    Schedule a Visit
                  </button>
                  <button className="btn-secondary font-inter">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        photo={lightboxPhoto}
        photos={filteredPhotos}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onNext={handleNextPhoto}
        onPrevious={handlePreviousPhoto}
      />

      {/* Footer */}
      <Footer />
    </main>
  )
}