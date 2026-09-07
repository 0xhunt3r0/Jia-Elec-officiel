'use client'

import { useState } from 'react'
import { useActionState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Building2,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Hammer,
  Home,
  Hotel,
  ImagePlus,
  Landmark,
  LayoutGrid,
  Lightbulb,
  Loader2,
  MapPin,
  MoreHorizontal,
  PlugZap,
  Power,
  Send,
  Snowflake,
  Store,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { submitQuote, type QuoteState } from '@/app/actions/quote'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AREAS, SITE } from '@/lib/site'
import { interp, useLanguage } from '@/lib/i18n'

import { cn } from '@/lib/utils'

const PROFILE_ICONS = [Home, Hotel, Building2, Store, Landmark, Building2]
const SERVICE_ICONS = [PlugZap, Wrench, Hammer, Lightbulb, LayoutGrid, Power, Snowflake, MoreHorizontal]

const contentVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.2 } },
}

const initial: QuoteState = { status: 'idle' }
export function QuoteMultistep({ compact = false }: { compact?: boolean }) {
  const { t, lang } = useLanguage()
  const q = t.quoteForm
  const STEPS = q.steps
  const PROFILES: { label: string; icon: LucideIcon }[] = q.profiles.map((label, i) => ({
    label,
    icon: PROFILE_ICONS[i] ?? MoreHorizontal,
  }))
  const SERVICES: { label: string; icon: LucideIcon }[] = t.jobTypes.map((label, i) => ({
    label,
    icon: SERVICE_ICONS[i] ?? MoreHorizontal,
  }))
  const DEADLINES = q.deadlines
  const PAYMENT_METHODS: { label: string; description: string }[] = q.paymentMethods
  const [state, action, pending] = useActionState(submitQuote, initial)
  const [step, setStep] = useState(0)

  const [profile, setProfile] = useState('')
  const [service, setService] = useState('')
  const [sector, setSector] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [surface, setSurface] = useState('')
  const [instructions, setInstructions] = useState('')
  const [photos, setPhotos] = useState<FileList | null>(null)
  const [payment, setPayment] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [area, setArea] = useState('')
  const [consent, setConsent] = useState(false)

  const isStepValid = () => {
    switch (step) {
      case 0:
        return profile !== ''
      case 1:
        return service !== '' && sector !== '' && address.trim().length >= 5
      case 2:
        return true // photos optional
      case 3:
        return payment !== ''
      case 4:
        return name.trim().length >= 2 && phone.trim().length >= 6 && area !== '' && consent
      default:
        return true
    }
  }

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1))
  const prev = () => setStep((s) => Math.max(s - 1, 0))

  if (state.status === 'sent') {
    return (
      <Card className="bg-elevated">
        <CardContent className="p-8 text-center">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <CheckCircle2 className="size-6" aria-hidden="true" />
          </div>
          <h3 className="mt-5 text-lg font-medium text-foreground uppercase">{q.successTitle}</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            {q.successBody}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <a href={SITE.phoneHref}>{t.ui.callNow}</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={SITE.whatsapp}>WhatsApp</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }
const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-5">
            <div>
              <Label>{q.profileLabel}</Label>
              <p className="mt-1 text-sm text-muted-foreground">{q.profileHint}</p>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {PROFILES.map((p, i) => (
                  <label
                    key={p.label}
                    className={cn(
                      'flex cursor-pointer items-center gap-3 rounded-md border border-input bg-background/40 p-4 transition-colors duration-200 hover:border-primary/50',
                      profile === p.label && 'border-primary bg-primary/5',
                    )}
                  >
                    <input type="radio" name="profile" className="sr-only" checked={profile === p.label} onChange={() => setProfile(p.label)} />
                    <p.icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="flex-1 text-sm font-medium text-foreground">{p.label}</span>
                    {profile === p.label ? <Check className="size-4 text-primary" aria-hidden="true" /> : null}
                  </label>
                ))}
              </div>
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-medium text-foreground">{q.needTitle}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{q.needHint}</p>
            </div>
            <div className="space-y-2">
              <Label>{q.serviceLabel}</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger><SelectValue placeholder={q.servicePlaceholder} /></SelectTrigger>
                <SelectContent>{SERVICES.map((s) => (<SelectItem key={s.label} value={s.label}>{s.label}</SelectItem>))}</SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{q.sectorLabel}</Label>
              <Select value={sector} onValueChange={setSector}>
                <SelectTrigger><SelectValue placeholder={q.sectorPlaceholder} /></SelectTrigger>
                <SelectContent>{AREAS.map((a) => (<SelectItem key={a.name} value={a.name}>{a.name}</SelectItem>))}</SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">{q.addressLabel}</Label>
              <div className="relative">
                <MapPin className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <Input id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder={q.addressPlaceholder} className="pl-9" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">{q.descriptionLabel}</Label>
              <Textarea id="description" name="message" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} placeholder={q.descriptionPlaceholder} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>{q.deadlineLabel}</Label>
                <Select value={deadline} onValueChange={setDeadline}>
                  <SelectTrigger><SelectValue placeholder={q.deadlinePlaceholder} /></SelectTrigger>
                  <SelectContent>{DEADLINES.map((d) => (<SelectItem key={d} value={d}>{d}</SelectItem>))}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="surface">{q.surfaceLabel}</Label>
                <Input id="surface" name="surface" type="number" min="0" value={surface} onChange={(e) => setSurface(e.target.value)} placeholder={q.surfacePlaceholder} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="instructions">{q.instructionsLabel}</Label>
              <Textarea id="instructions" name="instructions" rows={2} value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder={q.instructionsPlaceholder} />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <Label>Photos du projet (max 2)</Label>
            <p className="text-sm text-muted-foreground">
              Ajoutez quelques photos pour nous aider à mieux comprendre votre besoin. <em>(Facultatif)</em>
            </p>
            <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed border-input p-8 text-center transition-colors duration-200 hover:border-primary">
              <ImagePlus className="size-8 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground">
                {photos && photos.length > 0 ? `${photos.length} fichier(s) sélectionné(s)` : 'Cliquez pour ajouter des photos'}
              </span>
              <span className="text-xs text-muted-foreground">
                Images uniquement (JPEG, PNG, WebP, GIF, HEIC), 8 MB max chacune.
              </span>
              <input
                type="file"
                name="photos"
                accept="image/jpeg,image/png,image/webp,image/gif,image/heic"
                multiple
                className="sr-only"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 2) {
                    const dt = new DataTransfer()
                    dt.items.add(e.target.files[0])
                    dt.items.add(e.target.files[1])
                    e.target.files = dt.files
                  }
                  setPhotos(e.target.files)
                }}
              />
            </label>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-medium text-foreground">Précisez vos préférences pour la facturation.</h3>
              <p className="mt-1 text-sm text-muted-foreground">Choisissez votre mode de paiement.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input id="whatsapp" name="whatsapp" type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="+212 6 ··· (facultatif)" autoComplete="tel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email <span className="text-muted-foreground">(facultatif)</span></Label>
                <Input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="vous@exemple.com" autoComplete="email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Ville / quartier</Label>
              <Select value={area} onValueChange={setArea}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Marrakech, Guéliz…" />
                </SelectTrigger>
                <SelectContent>
                  {AREAS.map((a) => (
                    <SelectItem key={a.name} value={a.name}>{a.name}</SelectItem>
                  ))}
                  <SelectItem value="Other">Autre / non listé</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <label className="flex cursor-pointer items-start gap-3">
              <Checkbox checked={consent} onCheckedChange={(v) => setConsent(v === true)} className="mt-0.5" />
              <span className="text-sm text-muted-foreground">J’accepte d’être contacté concernant ma demande de devis.</span>
            </label>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <form action={action} className="rounded-md border border-border bg-elevated p-6 sm:p-8">
      {!compact ? (
        <div className="mb-6">
          <h3 className="text-lg font-medium text-foreground uppercase">Demander un devis gratuit</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            4 étapes rapides. Nous répondons par téléphone, généralement le jour même.
          </p>
        </div>
      ) : null}

      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between">
          {STEPS.map((title, i) => (
            <div key={title} className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => i <= step && setStep(i)}
                aria-current={i === step ? 'step' : undefined}
                className={cn(
                  'flex size-6 items-center justify-center rounded-full border text-[11px] font-semibold transition-colors duration-300',
                  i < step
                    ? 'border-primary bg-primary text-primary-foreground'
                    : i === step
                      ? 'border-primary text-primary ring-2 ring-primary/20'
                      : 'border-hairline text-muted-foreground',
                )}
              >
                {i < step ? <Check className="size-3.5" aria-hidden="true" /> : i + 1}
              </button>
              <span
                className={cn(
                  'mt-1.5 hidden text-[11px] sm:block',
                  i === step ? 'font-medium text-foreground' : 'text-muted-foreground',
                )}
              >
                {title}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full bg-primary"
            initial={false}
            animate={{ width: `${(step / (STEPS.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Hidden fields so every step's values submit with the form */}
      <input type="hidden" name="profile" value={profile} />
      <input type="hidden" name="workType" value={service} />
      <input type="hidden" name="sector" value={sector} />
      <input type="hidden" name="address" value={address} />
      <input type="hidden" name="message" value={description} />
      <input type="hidden" name="deadline" value={deadline} />
      <input type="hidden" name="surface" value={surface} />
      <input type="hidden" name="instructions" value={instructions} />
      <input type="hidden" name="payment" value={payment} />
      <input type="hidden" name="whatsapp" value={whatsapp} />
      <input type="hidden" name="area" value={area} />
      <input type="hidden" name="consent" value={consent ? 'on' : ''} />

      <AnimatePresence mode="wait">
        <motion.div key={step} variants={contentVariants} initial="hidden" animate="visible" exit="exit">
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      {state.status === 'error' ? (
        <p role="alert" className="mt-4 text-sm text-destructive">
          {state.message}
        </p>
      ) : null}

      <div className="mt-6 flex items-center justify-between gap-3">
        <Button type="button" variant="outline" onClick={prev} disabled={step === 0} className="flex items-center gap-1">
          <ChevronLeft className="size-4" aria-hidden="true" /> {q.back}
        </Button>
        {step === STEPS.length - 1 ? (
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button type="submit" disabled={!isStepValid() || pending} className="flex items-center gap-1.5">
              {pending ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" /> {q.sending}
                </>
              ) : (
                <>
                  {q.send} <Send className="size-4" aria-hidden="true" />
                </>
              )}
            </Button>
          </motion.div>
        ) : (
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button type="button" onClick={next} disabled={!isStepValid()} className="flex items-center gap-1.5">
              {q.next} <ChevronRight className="size-4" aria-hidden="true" />
            </Button>
          </motion.div>
        )}
      </div>
    </form>
  )
}
function OptionCard({
  icon: Icon,
  label,
  children,
}: {
  icon?: LucideIcon
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-md border border-input bg-background/40 p-3 transition-colors duration-200 hover:border-primary/50 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5">
      {Icon ? <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" /> : null}
      <span className="flex-1 text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  )
}