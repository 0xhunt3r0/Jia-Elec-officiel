'use server'

import { AREAS, JOB_TYPES } from '@/lib/site'

export type QuoteState = { status: 'idle' } | { status: 'sent' } | { status: 'error'; message: string }

const AREA_NAMES = new Set<string>([...AREAS.map((a) => a.name), 'Other'])
const JOBS = new Set<string>(JOB_TYPES)

function text(data: FormData, key: string, max = 200) {
  return String(data.get(key) ?? '')
    .trim()
    .slice(0, max)
}

export async function submitQuote(_prev: QuoteState, data: FormData): Promise<QuoteState> {
  const name = text(data, 'name', 120)
  const phone = text(data, 'phone', 40)
  const area = text(data, 'area', 80)
  const job = text(data, 'job', 80)
  const message = text(data, 'message', 2000)

  if (name.length < 2) return { status: 'error', message: 'Veuillez saisir votre nom.' }
  if (!/^[+\d][\d\s().-]{6,}$/.test(phone)) {
    return { status: 'error', message: 'Veuillez saisir un numéro de téléphone valide.' }
  }
  if (!AREA_NAMES.has(area)) return { status: 'error', message: 'Veuillez choisir votre secteur.' }
  if (!JOBS.has(job)) return { status: 'error', message: 'Veuillez choisir un type de travaux.' }

  // TODO: persist to a database or forward by email/WhatsApp. For now the
  // request is validated server-side and logged.
  console.log('[quote-request]', { name, phone, area, job, message, at: new Date().toISOString() })

  return { status: 'sent' }
}
