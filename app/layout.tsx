import type { Metadata } from 'next'
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google'
import './globals.css'

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

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dancing',
})

export const metadata: Metadata = {
  title: 'Stradella Hotel - Luxury Accommodation',
  description: 'Experience the beauty and luxury of Stradella Hotel. Premium accommodations, exceptional service, and unforgettable experiences await.',
  keywords: 'hotel, luxury, accommodation, stradella, booking, rooms, restaurant',
  authors: [{ name: 'Stradella Hotel' }],
  openGraph: {
    title: 'Stradella Hotel - Luxury Accommodation',
    description: 'Experience the beauty and luxury of Stradella Hotel. Premium accommodations, exceptional service, and unforgettable experiences await.',
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
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${dancingScript.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}