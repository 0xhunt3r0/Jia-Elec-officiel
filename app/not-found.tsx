import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-site flex-col items-center justify-center gap-4 px-6 pt-24 text-center">
      <p className="text-kicker font-medium tracking-widest text-primary uppercase">404</p>
      <h1 className="text-hero font-medium uppercase">Page introuvable</h1>
      <p className="max-w-md text-muted-foreground">
        Cette page n'existe pas. Retournez à l'accueil ou appelez-nous si vous souhaitiez prendre rendez-vous.
      </p>
      <Button asChild>
        <Link href="/">Retour à l'accueil</Link>
      </Button>
    </div>
  )
}
