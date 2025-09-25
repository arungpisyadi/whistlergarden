import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSlider } from '@/components/sections/HeroSlider'
import { CorporateEvents } from '@/components/sections/CorporateEvents'
import { Testimonial } from '@/components/sections/Testimonial'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Corporate Events Section */}
      <CorporateEvents />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Footer */}
      <Footer />
    </main>
  )
}