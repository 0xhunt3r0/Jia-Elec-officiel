import type { MetadataRoute } from 'next'

const BASE_URL = 'https://jiaelec.ma'

const routes = [
  '',
  '/services',
  '/contact',
  '/devis',
  '/depannage',
  '/installation',
  '/maintenance',
  '/renovation',
  '/areas',
  '/armoires',
  '/switchboard',
  '/work',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
