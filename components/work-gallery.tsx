'use client'

import { Gallery, GalleryImage } from '@/components/ui/shared-element-gallery'
import { Section, SectionTitle } from '@/components/section'

type Photo = { id: string; src: string; alt: string }

const SECTIONS: { title: string; photos: Photo[] }[] = [
  {
    title: 'Éclairage & décoration',
    photos: [{ id: 'e1', src: '/gallery/gallery-1.webp', alt: "Projet d'éclairage et décoration" }],
  },
  {
    title: 'Armoires électriques & locaux techniques',
    photos: [{ id: 'e2', src: '/gallery/e-gallery-1.webp', alt: 'Armoire électrique et local technique' }],
  },
]

export function WorkGallery() {
  return (
    <Section>
      <SectionTitle marked align="center">
        Nos projets électriques récents
      </SectionTitle>
      <Gallery>
        <div className="mt-12 flex flex-col gap-12">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 flex items-center gap-4 text-xl font-semibold tracking-wide text-foreground">
                {section.title}
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]">
                {section.photos.map((photo) => (
                  <GalleryImage
                    key={photo.id}
                    id={photo.id}
                    src={photo.src}
                    alt={photo.alt}
                    className="w-72 shrink-0 snap-start [&_img]:aspect-4/3"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Gallery>
    </Section>
  )
}
