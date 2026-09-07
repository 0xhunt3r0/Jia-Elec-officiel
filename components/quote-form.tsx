'use client'

import type { ReactNode } from 'react'
import { useActionState } from 'react'
import { Check } from 'lucide-react'
import { submitQuote, type QuoteState } from '@/app/actions/quote'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { AREAS, JOB_TYPES, SITE } from '@/lib/site'

const selectClass =
  'flex h-12 w-full rounded-xs border border-input bg-transparent px-2.5 text-sm text-foreground outline-none transition-[border-color] duration-500 focus-visible:border-primary [&>option]:bg-elevated'

const initial: QuoteState = { status: 'idle' }

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [state, action, pending] = useActionState(submitQuote, initial)

  if (state.status === 'sent') {
    return (
      <div className="rounded-md border border-border bg-elevated p-6">
        <div className="flex size-10 items-center justify-center rounded-sm bg-primary text-primary-foreground">
          <Check className="size-5" aria-hidden="true" />
        </div>
        <h3 className="mt-4 text-lg font-medium text-foreground">Demande reçue</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Nous vous rappellerons au numéro que vous avez laissé. Pour une urgence, appelez ou écrivez sur WhatsApp au{' '}
          {SITE.phoneDisplay} dès maintenant.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild>
            <a href={SITE.phoneHref}>Appelez-nous</a>
          </Button>
          <Button variant="outline" asChild>
            <a href={SITE.whatsapp}>WhatsApp</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form action={action} className="rounded-md border border-border bg-elevated p-6 sm:p-8">
      {!compact ? (
        <>
          <h3 className="text-lg font-medium text-foreground uppercase">Demandez un devis gratuit</h3>
          <p className="mt-1 text-sm text-muted-foreground">Décrivez le travail. Nous répondons par téléphone, généralement le jour même.</p>
        </>
      ) : null}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Nom" htmlFor="name">
          <Input id="name" name="name" required autoComplete="name" placeholder="Votre nom" />
        </Field>
        <Field label="Téléphone" htmlFor="phone">
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+212 6 …" />
        </Field>
        <Field label="Quartier" htmlFor="area">
          <select id="area" name="area" required className={selectClass} defaultValue="">
            <option value="" disabled>
              Votre quartier
            </option>
            {AREAS.map((a) => (
              <option key={a.name} value={a.name}>
                {a.name}
              </option>
            ))}
            <option value="Other">Autre / non listé</option>
          </select>
        </Field>
        <Field label="Type de travaux" htmlFor="job">
          <select id="job" name="job" required className={selectClass} defaultValue="">
            <option value="" disabled>
              De quoi avez-vous besoin ?
            </option>
            {JOB_TYPES.map((job) => (
              <option key={job} value={job}>
                {job}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Détails" htmlFor="message">
            <Textarea id="message" name="message" rows={4} placeholder="Panne de courant, nouvelle cuisine, éclairage de jardin…" />
          </Field>
        </div>
      </div>
      {state.status === 'error' ? (
        <p role="alert" className="mt-4 text-sm text-destructive">
          {state.message}
        </p>
      ) : null}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={pending}>
          {pending ? 'Envoi…' : 'Demander un devis gratuit'}
        </Button>
        <a
          href={SITE.whatsapp}
          className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
        >
          Ou écrivez-nous sur WhatsApp
        </a>
      </div>
    </form>
  )
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  )
}
