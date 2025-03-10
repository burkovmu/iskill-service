import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Pricing from '@/components/Pricing'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <WhyUs />
      <Pricing />
      <Reviews />
      <FAQ />
      <Blog />
      <Contact />
    </main>
  )
}
