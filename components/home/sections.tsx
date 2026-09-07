'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, ShieldCheck, Tag, Zap } from 'lucide-react'
import Link from 'next/link'
import { ProjectGallery, ProjectsHeading } from '@/components/home/project-gallery'
import { FaqList } from '@/components/faq-list'
import { Section, SectionTitle } from '@/components/section'
import { GoogleReview, Stars } from '@/components/stars'
import { Button } from '@/components/ui/button'
import { AREAS, HOME_AREAS, HOME_SERVICES, PROCESS, SITE, TESTIMONIALS, WHY_US } from '@/lib/site'
import { interp, useLanguage } from '@/lib/i18n'

export function ServicesPreview() {
  const { t } = useLanguage()
  return (
    <Section className="bg-elevated">
      <SectionTitle marked align="center">
        {t.services.heading}
      </SectionTitle>
      <ul className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2">
        {HOME_SERVICES.map((service) => (
          <li key={service.to}>
            <Link
              href={service.to}
              className="group block overflow-hidden rounded-md border border-hairline bg-background/60 shadow-menu transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={500}
                  className="aspect-16/10 w-full object-cover brightness-95 saturate-[0.9] transition-all duration-500 group-hover:scale-105 group-hover:brightness-100 group-hover:saturate-100"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-5">
                <h3 className="text-base font-semibold tracking-wide text-foreground sm:text-lg">
                  {service.title}
                </h3>
                <span className="shrink-0 text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
                  Découvrir
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function WhyUs() {
  // Animation variants adapted from components/ui/service-grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger the animation of children by 0.1s
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const icons = { zap: Zap, shield: ShieldCheck, tag: Tag } as const

  return (
    <Section className="bg-elevated">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-section font-bold tracking-wide text-foreground">
          Pourquoi <span className="text-primary">Jia Elec</span> ?
        </h2>
        <motion.ul
          className="mt-12 grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {WHY_US.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? Zap
            return (
              <motion.li
                key={item.title}
                variants={itemVariants}
                className="group flex flex-col items-center rounded-md border border-hairline bg-card p-8 text-center shadow-menu transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg"
              >
                <span className="flex size-16 items-center justify-center rounded-full border border-hairline bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-8" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-bold tracking-wide text-foreground">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.body}</p>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </Section>
  )
}

export function Process() {
  return (
    <Section>
      <SectionTitle marked align="center">
        Notre méthode
      </SectionTitle>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        Du premier échange à la remise des clés, nous avançons avec clarté, sécurité et transparence.
      </p>
      <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {PROCESS.map((step) => (
          <li key={step.step} className="text-center">
            <Image
              src={step.image}
              alt=""
              width={128}
              height={64}
              className="mx-auto mb-4 h-16 w-auto object-contain"
            />
            <h3 className="text-base font-medium text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            <p className="mt-3 text-2xl font-semibold text-primary">{step.step}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function AreasPreview() {
  return (
    <Section className="bg-elevated">
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-kicker font-medium text-primary uppercase">Secteurs d’intervention</p>
          <SectionTitle className="mt-2">Un électricien proche de chez vous</SectionTitle>
          <p className="mt-4 text-muted-foreground">
            {SITE.name} intervient dans tout {SITE.city} — de la Médina à la Palmeraie, Targa, Sidi Ghanem et la
            route d’Ourika. Un service local, sérieux et transparent, après un devis gratuit.
          </p>
          <Button className="mt-6" asChild>
            <Link href="/areas">Tous les secteurs</Link>
          </Button>
        </div>
        <ul className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3 lg:col-span-7">
          {HOME_AREAS.map((name) => {
            const area = AREAS.find((a) => a.name === name)
            if (!area) return null
            return (
              <li key={area.name}>
                <Link
                  href="/areas"
                  className="group flex items-start gap-3 rounded-md border border-hairline bg-background/60 p-4 transition-colors duration-200 hover:border-primary/40 hover:bg-background"
                >
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                    <MapPin className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold tracking-wide text-foreground group-hover:text-primary">
                      {area.name}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{area.blurb}</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

export function Testimonials() {
  return (
    <Section>
      <SectionTitle marked align="center">
        Témoignages clients
      </SectionTitle>
      <div className="mt-4 flex justify-center">
        <GoogleReview />
      </div>
      <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {TESTIMONIALS.map((item, index) => (
          <li key={index} className="flex flex-col rounded-md border border-border bg-elevated p-6">
            <Stars />
            <p className="mt-4 flex-1 text-sm text-muted-foreground">“{item.quote}”</p>
            <p className="mt-5 text-sm font-medium text-foreground">
              {item.name}
              <span className="text-muted-foreground"> · {item.area}</span>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Projects() {
  return (
    <Section className="bg-background py-14 sm:py-16 lg:py-20">
      <ProjectsHeading />
      <ProjectGallery />
    </Section>
  )
}

export function Faq() {
  return (
    <Section className="bg-elevated">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionTitle>Questions fréquentes</SectionTitle>
          <p className="mt-4 text-muted-foreground">
            Services électriques à Guéliz, la Médina, Palmeraie et dans tout {SITE.city}.
          </p>
        </div>
        <div className="lg:col-span-8">
          <FaqList />
        </div>
      </div>
    </Section>
  )
}
