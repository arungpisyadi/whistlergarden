import type { Metadata } from 'next'
import { Inter, Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import '../lib/fontawesome'
import SocialMediaSidebar from '@/components/layout/SocialMediaSidebar'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Whistler Garden - Luxury Hotel & Venue',
  description: 'Discover Whistler Garden, a luxury hotel and premier event venue offering exceptional accommodations, elegant dining, and unforgettable experiences in a beautiful garden setting.',
  keywords: 'hotel, luxury, venue, whistler garden, accommodation, wedding venue, events, garden, resort, booking, rooms, restaurant',
  authors: [{ name: 'Whistler Garden' }],
  openGraph: {
    title: 'Whistler Garden - Luxury Hotel & Venue',
    description: 'Discover Whistler Garden, a luxury hotel and premier event venue offering exceptional accommodations, elegant dining, and unforgettable experiences in a beautiful garden setting.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} ${playfairDisplay.variable}`}>
      <body className={montserrat.className}>
        {children}
        <SocialMediaSidebar />
      </body>
    </html>
  )
}