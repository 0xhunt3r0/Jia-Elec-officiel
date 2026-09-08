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
  const whatsapp = text(data, 'whatsapp', 40)
  const email = text(data, 'email', 120)
  const firstname = text(data, 'firstname', 80)
  const profile = text(data, 'profile', 80)
  const address = text(data, 'address', 200)
  const deadline = text(data, 'deadline', 80)
  const surface = text(data, 'surface', 40)
  const instructions = text(data, 'instructions', 500)
  const payment = text(data, 'payment', 120)
  const intervention = text(data, 'intervention', 80)
  const materials = text(data, 'materials', 120)
  const propertyType = text(data, 'propertyType', 80)

  if (name.length < 2) return { status: 'error', message: 'Veuillez saisir votre nom.' }
  if (firstname && firstname.length < 2) return { status: 'error', message: 'Veuillez saisir votre prénom.' }
  if (!/^[+\d][\d\s().-]{6,}$/.test(phone)) {
    return { status: 'error', message: 'Veuillez saisir un numéro de téléphone valide.' }
  }
  if (whatsapp && !/^[+\d][\d\s().-]{6,}$/.test(whatsapp)) {
    return { status: 'error', message: 'Veuillez saisir un numéro WhatsApp valide.' }
  }
  if (!AREA_NAMES.has(area)) return { status: 'error', message: 'Veuillez choisir votre secteur.' }
  if (!JOBS.has(job)) return { status: 'error', message: 'Veuillez choisir un type de travaux.' }

  // Forward the request to Telegram (secrets stay server-side via env vars)
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (token && chatId) {
    try {
      // Robustly pick up uploaded files. In some Next.js runtimes the FormData
      // entries are provided as file-like objects that aren't literal
      // `instanceof File`, so avoid that check and keep genuine Blobs as-is
      // (appending them to FormData sends their raw bytes).
      const photos = data
        .getAll('photos')
        .filter((p): p is File => typeof p === 'object' && p !== null && p.size > 0)
        .slice(0, 4)
      console.log('[quote-request] photos attached:', photos.length, photos.map((p) => p.name))

      const escape = (s: string) =>
        s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

      const caption =
        `<b>⚡ Nouvelle demande de devis !</b>\n\n` +
        `<b>Nom:</b> ${escape(name)}\n` +
        `<b>Prénom:</b> ${escape(firstname || '—')}\n` +
        `<b>Téléphone:</b> ${escape(phone)}\n` +
        `<b>WhatsApp:</b> ${escape(whatsapp || '—')}\n` +
        `<b>Email:</b> ${escape(email || '—')}\n` +
        `<b>Secteur:</b> ${escape(area)}\n` +
        `<b>Profil:</b> ${escape(profile || '—')}\n` +
        `<b>Type de bien:</b> ${escape(propertyType || '—')}\n` +
        `<b>Recherche:</b> ${escape(intervention || '—')}\n` +
        `<b>Matériaux:</b> ${escape(materials || '—')}\n` +
        `<b>Travaux:</b> ${escape(job)}\n` +
        `<b>Adresse:</b> ${escape(address || '—')}\n` +
        `<b>Délai:</b> ${escape(deadline || '—')}\n` +
        `<b>Surface:</b> ${escape(surface || '—')}\n` +
        `<b>Paiement:</b> ${escape(payment || '—')}\n` +
        `<b>Description:</b>\n${escape(message || '—')}\n` +
        (instructions ? `<b>Instructions:</b> ${escape(instructions)}\n` : '')

      if (photos.length === 0) {
        // Text-only message
        const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: caption, parse_mode: 'HTML' }),
        })
        if (!r.ok) console.error('[quote-request] Telegram sendMessage failed:', r.status, await r.text())
      } else if (photos.length === 1) {
        // Single photo with caption
        const fd = new FormData()
        fd.append('chat_id', chatId)
        fd.append('caption', caption)
        fd.append('parse_mode', 'HTML')
        fd.append('photo', photos[0], photos[0].name || 'photo.jpg')
        const r = await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
          method: 'POST',
          body: fd,
        })
        if (!r.ok) console.error('[quote-request] Telegram sendPhoto failed:', r.status, await r.text())
      } else {
        // Multiple photos: send them as a media group, then the details separately.
        // Telegram media groups accept up to 10 items, so 1–4 photos fit in one album.
        const items = photos.map((p, i) => ({ type: 'photo', media: `attach://photo${i}` }))
        const fd = new FormData()
        fd.append('chat_id', chatId)
        fd.append('media', JSON.stringify(items))
        photos.forEach((p, i) => {
          fd.append(`photo${i}`, p, p.name || `photo${i}.jpg`)
        })
        const r = await fetch(`https://api.telegram.org/bot${token}/sendMediaGroup`, {
          method: 'POST',
          body: fd,
        })
        if (!r.ok) console.error('[quote-request] Telegram sendMediaGroup failed:', r.status, await r.text())
        const r2 = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: caption, parse_mode: 'HTML' }),
        })
        if (!r2.ok) console.error('[quote-request] Telegram sendMessage failed:', r2.status, await r2.text())
      }
    } catch (error) {
      // Never fail the user's submission because of a Telegram outage — log it
      console.error('[quote-request] Telegram forwarding failed:', error)
    }
  } else {
    console.warn('[quote-request] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not set — skipping Telegram notification.')
  }

  console.log('[quote-request]', { name, phone, area, job, message, at: new Date().toISOString() })

  return { status: 'sent' }
}
