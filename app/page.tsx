import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { CulinarySection } from '@/components/sections/CulinarySection'
import { FacilitiesSection } from '@/components/sections/FacilitiesSection'
import { OverviewSection } from '@/components/sections/OverviewSection'
import { FeatureSections } from '@/components/sections/FeatureSections'
import { CompanyInfoSection } from '@/components/sections/CompanyInfoSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section with Cover Image */}
      <Hero />

      {/* Company Information */}
      <CompanyInfoSection />

      {/* About Whistler Garden */}
      <AboutSection />

      {/* Culinary Excellence */}
      <CulinarySection />

      {/* World-Class Facilities */}
      <FacilitiesSection />

      {/* Photo Slides Section for Facility Showcase */}
      {/* <FeatureSections /> */}

      {/* Overview & Key Selling Points */}
      <OverviewSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}