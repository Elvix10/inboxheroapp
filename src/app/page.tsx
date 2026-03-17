import { Navbar } from "@/components/landing/Navbar"
import { HeroSection } from "@/components/landing/HeroSection"
import { TrustStrip } from "@/components/landing/TrustStrip"
import { Screenshots } from "@/components/landing/Screenshots"
import { CurrentFeatures } from "@/components/landing/CurrentFeatures"
import { WhyInboxHero } from "@/components/landing/WhyInboxHero"
import { ComingSoon } from "@/components/landing/ComingSoon"
import { FinalCTA } from "@/components/landing/FinalCTA"
import { Footer } from "@/components/landing/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <Screenshots />
        <CurrentFeatures />
        <WhyInboxHero />
        <ComingSoon />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
