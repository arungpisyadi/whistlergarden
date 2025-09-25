import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Whistler Garden - Luxury Accommodation',
  description: 'Experience the beauty and luxury of Whistler Garden. Premium accommodations, exceptional service, and unforgettable experiences await.',
  keywords: 'hotel, luxury, accommodation, whistler, booking, rooms, restaurant',
  authors: [{ name: 'Whistler Garden' }],
  openGraph: {
    title: 'Whistler Garden - Luxury Accommodation',
    description: 'Experience the beauty and luxury of Whistler Garden. Premium accommodations, exceptional service, and unforgettable experiences await.',
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
    <html lang="en" className={montserrat.variable}>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}