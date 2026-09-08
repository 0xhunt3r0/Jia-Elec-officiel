'use client'

import { useLanguage } from '@/lib/i18n'
import { PageHero } from '@/components/page-hero'

export function DevisHero() {
  const { t } = useLanguage()
  const q = t.quoteForm
  return <PageHero kicker={q.pageKicker} title={q.pageTitle} description={q.pageDescription} />
}
