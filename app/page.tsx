import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSlider } from '@/components/sections/HeroSlider'
import { FeatureSections } from '@/components/sections/FeatureSections'
import { Testimonial } from '@/components/sections/Testimonial'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Features Section */}
      <FeatureSections />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Footer */}
      <Footer />
    </main>
  )
}