import { Hero } from '@/components/home/hero'
import { TrustedBrands } from '@/components/home/trusted-brands'
import {
  AreasPreview,
  Faq,
  Process,
  Projects,
  ServicesPreview,
  Testimonials,
  WhyUs,
} from '@/components/home/sections'
import { SITE } from '@/lib/site'

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: SITE.name,
    telephone: SITE.phone,
    url: '/',
    areaServed: { '@type': 'City', name: SITE.city },
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressCountry: 'MA',
    },
    openingHours: 'Mo-Sa 08:00-19:00',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <WhyUs />
      <ServicesPreview />
      <TrustedBrands />
      <Projects />
      <Process />
      <AreasPreview />
      <Testimonials />
      <Faq />
    </>
  )
}
