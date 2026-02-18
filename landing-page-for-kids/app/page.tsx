import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { AniquemSection } from "@/components/aniquem-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <HowItWorksSection />
        <AniquemSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
