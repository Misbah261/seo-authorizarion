export const metadata = {
  title: 'Search Authority | SEO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import PressLogos from '@/components/press-logos'
import RoutesView from '@/components/routes-view'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import Pricing from '@/components/pricing'
import Features03 from '@/components/features-03'
import Cta02 from '@/components/cta-02'

export default function Home() {
  return (
    <>
      <Hero />
      <PressLogos />
      <RoutesView />
      <Features />
      <Features02 />
      <div className="hidden sm:block">
        <Pricing />
      </div>
      <Features03/>
      <Cta02/>
    </>
  )
}