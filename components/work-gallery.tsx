'use client'

import { Gallery, GalleryGrid, GalleryImage } from '@/components/ui/shared-element-gallery'
import { Section, SectionTitle } from '@/components/section'

const PHOTOS = [
  { id: '1', src: '/gallery/gallery-1.webp' },
  { id: '2', src: '/gallery/gallery-2.webp' },
  { id: '3', src: '/gallery/gallery-3.webp' },
  { id: '4', src: '/gallery/gallery-4.webp' },
  { id: '5', src: '/gallery/gallery-5.webp' },
  { id: '6', src: '/gallery/gallery-6.webp' },
  { id: '7', src: '/gallery/gallery-7.webp' },
  { id: '8', src: '/gallery/gallery-8.webp' },
  { id: '9', src: '/gallery/gallery-9.webp' },
  { id: '10', src: '/gallery/gallery-10.webp' },
]

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
              alt={`Electrical project ${photo.id}`}
            />
          ))}
        </GalleryGrid>
      </Gallery>
    </Section>
  )
}
