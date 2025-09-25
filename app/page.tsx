import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSlider } from '@/components/sections/HeroSlider'
import { CorporateEvents } from '@/components/sections/CorporateEvents'
import { BirthdayParties } from '@/components/sections/BirthdayParties'
import { ArisanReuni } from '@/components/sections/ArisanReuni'
import { CommunityEvents } from '@/components/sections/CommunityEvents'
import { FamilyGathering } from '@/components/sections/FamilyGathering'
import { AboutUs } from '@/components/sections/AboutUs'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Corporate Events Section */}
      <CorporateEvents />

      {/* Birthday Parties Section */}
      <BirthdayParties />

      {/* Arisan & Reuni Section */}
      <ArisanReuni />

      {/* Community Events Section */}
      <CommunityEvents />

      {/* Family Gathering Section */}
      <FamilyGathering />

      {/* About Us Section */}
      <AboutUs />

      {/* Footer */}
      <Footer />
    </main>
  )
}