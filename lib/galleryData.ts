export interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  aspectRatio: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}

// Gallery categories
export const galleryCategories: GalleryCategory[] = [
  {
    id: 'accommodations',
    name: 'Accommodations',
    description: 'Luxury suites and rooms featuring sophisticated design',
    icon: '🏨',
    count: 12
  },
  {
    id: 'venues',
    name: 'Venues',
    description: 'Elegant event spaces and meeting facilities',
    icon: '🏛️',
    count: 15
  },
  {
    id: 'events',
    name: 'Events',
    description: 'Memorable celebrations and corporate gatherings',
    icon: '🎭',
    count: 18
  },
  {
    id: 'dining',
    name: 'Dining',
    description: 'Exquisite culinary experiences and elegant dining spaces',
    icon: '🍽️',
    count: 10
  },
  {
    id: 'gardens',
    name: 'Gardens & Architecture',
    description: 'Beautiful landscapes and stunning architectural details',
    icon: '🌸',
    count: 14
  }
];

// Photo collections for each category
export const galleryPhotos: Photo[] = [
  // Accommodations
  {
    id: 'acc-001',
    src: 'https://placehold.co/800x600/7C3AED/FFFFFF/jpg?text=Suite+Room+40m²+Bedroom',
    alt: 'Suite Room 40m² - Bedroom View',
    title: 'Suite Room 40m²',
    description: 'Spacious bedroom with modern amenities and elegant furnishing',
    category: 'accommodations',
    aspectRatio: '4/3'
  },
  {
    id: 'acc-002',
    src: 'https://placehold.co/800x450/3B82F6/FFFFFF/jpg?text=Premium+Suite+Living+Area',
    alt: 'Premium Suite Room 50m² - Living Area',
    title: 'Premium Suite Room 50m²',
    description: 'Luxurious living area with comfortable seating and premium décor',
    category: 'accommodations',
    aspectRatio: '16/9'
  },
  {
    id: 'acc-003',
    src: 'https://placehold.co/600x800/10B981/FFFFFF/jpg?text=Premium+Suite+Bathroom',
    alt: 'Suite Bathroom',
    title: 'Premium Bathroom',
    description: 'Modern bathroom with luxurious fixtures and marble finishings',
    category: 'accommodations',
    aspectRatio: '3/4'
  },
  {
    id: 'acc-004',
    src: 'https://placehold.co/800x450/EA580C/FFFFFF/jpg?text=Garden+View+Balcony',
    alt: 'Suite Balcony View',
    title: 'Garden View Balcony',
    description: 'Private balcony overlooking the beautiful garden landscape',
    category: 'accommodations',
    aspectRatio: '16/9'
  },
  
  // Venues
  {
    id: 'ven-001',
    src: 'https://placehold.co/800x450/DC2626/FFFFFF/jpg?text=Sky+Glass+House+Interior',
    alt: 'Sky Glass House Interior',
    title: 'Sky Glass House',
    description: 'Modern glass pavilion perfect for intimate gatherings and ceremonies',
    category: 'venues',
    aspectRatio: '16/9'
  },
  {
    id: 'ven-002',
    src: 'https://placehold.co/800x600/6B7280/FFFFFF/jpg?text=Royal+Glass+House+Setup',
    alt: 'Royal Glass House Setup',
    title: 'Royal Glass House',
    description: 'Elegant venue setup for weddings and special celebrations',
    category: 'venues',
    aspectRatio: '4/3'
  },
  {
    id: 'ven-003',
    src: 'https://placehold.co/800x450/D97706/FFFFFF/jpg?text=Grand+Ballroom+Space',
    alt: 'Grand Ballroom',
    title: 'Grand Ballroom',
    description: 'Spacious ballroom with crystal chandeliers and elegant décor',
    category: 'venues',
    aspectRatio: '16/9'
  },
  {
    id: 'ven-004',
    src: 'https://placehold.co/800x600/059669/FFFFFF/jpg?text=VIP+Function+Room',
    alt: 'VIP Function Room',
    title: 'VIP Function Room',
    description: 'Intimate setting for executive meetings and private functions',
    category: 'venues',
    aspectRatio: '4/3'
  },
  
  // Events
  {
    id: 'eve-001',
    src: 'https://placehold.co/800x450/7C3AED/FFFFFF/jpg?text=Garden+Wedding+Ceremony',
    alt: 'Wedding Ceremony Setup',
    title: 'Garden Wedding Ceremony',
    description: 'Beautiful outdoor ceremony with floral arrangements and elegant seating',
    category: 'events',
    aspectRatio: '16/9'
  },
  {
    id: 'eve-002',
    src: 'https://placehold.co/800x600/3B82F6/FFFFFF/jpg?text=Elegant+Wedding+Reception',
    alt: 'Wedding Reception',
    title: 'Elegant Wedding Reception',
    description: 'Beautifully decorated reception hall with romantic lighting',
    category: 'events',
    aspectRatio: '4/3'
  },
  {
    id: 'eve-003',
    src: 'https://placehold.co/800x450/10B981/FFFFFF/jpg?text=Corporate+Conference',
    alt: 'Corporate Meeting',
    title: 'Corporate Conference',
    description: 'Professional meeting setup with modern AV equipment',
    category: 'events',
    aspectRatio: '16/9'
  },
  {
    id: 'eve-004',
    src: 'https://placehold.co/800x600/EA580C/FFFFFF/jpg?text=Special+Celebration',
    alt: 'Birthday Celebration',
    title: 'Special Celebration',
    description: 'Festive party setup with decorations and entertainment area',
    category: 'events',
    aspectRatio: '4/3'
  },
  
  // Dining
  {
    id: 'din-001',
    src: 'https://placehold.co/800x450/DC2626/FFFFFF/jpg?text=Whistler+Restaurant+Interior',
    alt: 'Main Restaurant Interior',
    title: 'Whistler Restaurant',
    description: 'Elegant dining room with sophisticated ambiance and garden views',
    category: 'dining',
    aspectRatio: '16/9'
  },
  {
    id: 'din-002',
    src: 'https://placehold.co/800x600/6B7280/FFFFFF/jpg?text=Fine+Dining+Experience',
    alt: 'Fine Dining Setup',
    title: 'Fine Dining Experience',
    description: 'Exquisite table setting with premium tableware and floral arrangements',
    category: 'dining',
    aspectRatio: '4/3'
  },
  {
    id: 'din-003',
    src: 'https://placehold.co/800x600/D97706/FFFFFF/jpg?text=Culinary+Masterpiece',
    alt: 'Gourmet Cuisine',
    title: 'Culinary Masterpiece',
    description: 'Artfully presented dishes showcasing our chef\'s expertise',
    category: 'dining',
    aspectRatio: '4/3'
  },
  {
    id: 'din-004',
    src: 'https://placehold.co/800x450/059669/FFFFFF/jpg?text=Private+Dining+Room',
    alt: 'Private Dining Area',
    title: 'Private Dining Room',
    description: 'Intimate dining space for exclusive gatherings and celebrations',
    category: 'dining',
    aspectRatio: '16/9'
  },
  
  // Gardens & Architecture
  {
    id: 'gar-001',
    src: 'https://placehold.co/800x450/7C3AED/FFFFFF/jpg?text=Whistler+Garden+Landscape',
    alt: 'Garden Landscape',
    title: 'Whistler Gardens',
    description: 'Lush tropical gardens with carefully curated plant collections',
    category: 'gardens',
    aspectRatio: '16/9'
  },
  {
    id: 'gar-002',
    src: 'https://placehold.co/800x600/3B82F6/FFFFFF/jpg?text=Traditional+Balinese+Design',
    alt: 'Balinese Architecture',
    title: 'Traditional Balinese Design',
    description: 'Authentic architectural elements showcasing local craftsmanship',
    category: 'gardens',
    aspectRatio: '4/3'
  },
  {
    id: 'gar-003',
    src: 'https://placehold.co/600x800/10B981/FFFFFF/jpg?text=Garden+Water+Feature',
    alt: 'Water Feature',
    title: 'Garden Water Feature',
    description: 'Tranquil water fountain creating a serene atmosphere',
    category: 'gardens',
    aspectRatio: '3/4'
  },
  {
    id: 'gar-004',
    src: 'https://placehold.co/800x450/EA580C/FFFFFF/jpg?text=Whistler+Garden+Exterior',
    alt: 'Building Exterior',
    title: 'Whistler Garden Exterior',
    description: 'Impressive building façade blending modern and traditional elements',
    category: 'gardens',
    aspectRatio: '16/9'
  }
];

// Helper functions
export const getPhotosByCategory = (category: string): Photo[] => {
  if (category === 'all') return galleryPhotos;
  return galleryPhotos.filter(photo => photo.category === category);
};

export const getCategoryById = (categoryId: string): GalleryCategory | undefined => {
  return galleryCategories.find(cat => cat.id === categoryId);
};

export const getAllCategories = (): GalleryCategory[] => {
  return [
    { id: 'all', name: 'All Photos', description: 'View all gallery photos', icon: '📷', count: galleryPhotos.length },
    ...galleryCategories
  ];
};