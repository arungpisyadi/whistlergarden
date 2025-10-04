import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery - Whistler Garden',
  description: 'Explore the stunning beauty of Whistler Garden through our photo gallery. View our luxurious accommodations, beautiful gardens, elegant event spaces, and memorable moments.',
  keywords: 'gallery, photos, whistler garden images, hotel photos, garden photos, event venue photos, accommodation images, balinese architecture, luxury suites, wedding venues',
  openGraph: {
    title: 'Gallery - Whistler Garden',
    description: 'Explore the stunning beauty of Whistler Garden through our photo gallery.',
    images: [
      {
        url: '/images/hero/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Whistler Garden Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery - Whistler Garden',
    description: 'Explore the stunning beauty of Whistler Garden through our photo gallery.',
    images: ['/images/hero/cover.jpg'],
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}