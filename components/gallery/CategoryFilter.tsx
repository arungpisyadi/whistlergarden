'use client'

import { useState } from 'react'
import { GalleryCategory } from '@/lib/galleryData'

interface CategoryFilterProps {
  categories: GalleryCategory[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
  className?: string
}

export const CategoryFilter = ({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  className = '' 
}: CategoryFilterProps) => {
  return (
    <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-full font-inter text-sm font-medium
            transition-all duration-300 border-2
            ${activeCategory === category.id
              ? 'bg-primary-gold text-white border-primary-gold shadow-lg'
              : 'bg-white text-primary-gold border-primary-gold hover:bg-primary-gold hover:text-white'
            }
          `}
        >
          <span className="text-lg">{category.icon}</span>
          <span>{category.name}</span>
          <span className={`
            text-xs px-2 py-1 rounded-full
            ${activeCategory === category.id
              ? 'bg-white/20 text-white'
              : 'bg-primary-gold/10 text-primary-gold group-hover:bg-white/20 group-hover:text-white'
            }
          `}>
            {category.count}
          </span>
        </button>
      ))}
    </div>
  )
}