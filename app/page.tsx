import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import DemoCarousel from "@/components/demo-carousel"
import Analytics from "@/components/analytics"
import Download from "@/components/download"
import TechStack from "@/components/tech-stack"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <DemoCarousel />
        <Analytics />
        <Download />
        <TechStack />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
