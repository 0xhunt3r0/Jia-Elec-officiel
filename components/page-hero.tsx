import Image from 'next/image'
import { Kicker } from '@/components/section'

export function PageHero({
  kicker,
  title,
  description,
  image = '/villa.webp',
}: {
  kicker: string
  title: string
  description: string
  image?: string
}) {
  return (
    <section className="relative isolate min-h-96 overflow-hidden pt-28">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="hero-overlay absolute inset-0 bg-linear-to-b from-background/80 via-background/70 to-background/90" />
      <div className="relative mx-auto flex max-w-site flex-col justify-end gap-3 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Kicker>{kicker}</Kicker>
        <h1 className="hero-title max-w-3xl text-hero font-medium tracking-wide text-foreground uppercase">{title}</h1>
        <p className="hero-subtitle max-w-copy text-muted-foreground">{description}</p>
      </div>
    </section>
  )
}
