'use client'

import { Gallery, GalleryGrid, GalleryImage } from '@/components/ui/shared-element-gallery'
import { Section, SectionTitle } from '@/components/section'

// Flat album of project photos — gallery-1.webp … gallery-30.webp
const PHOTOS = Array.from({ length: 30 }, (_, i) => ({
  id: String(i + 1),
  src: `/gallery/gallery-${i + 1}.webp`,
})).sort((a, b) => Number(a.id) - Number(b.id))

export function WorkGallery() {
  return (
    <Section>
      <SectionTitle marked align="center">
        Nos projets électriques récents
      </SectionTitle>
      <Gallery>
        <GalleryGrid className="mt-12">
          {PHOTOS.map((photo) => (
            <GalleryImage
              key={photo.id}
              id={photo.id}
              src={photo.src}
              alt={`Projet électrique ${photo.id}`}
            />
          ))}
        </GalleryGrid>
      </Gallery>
    </Section>
  )
}
