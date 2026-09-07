import { ArrowUpRight, MapPin } from 'lucide-react'
import { AREAS } from '@/lib/site'

/** Build a Google Maps link for the coordinates — no API key required. */
function mapsUrl(lat: number, lng: number) {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
}

export function LocationsGrid() {
  return (
    <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {AREAS.map((area) => (
        <li key={area.name}>
          <a
            href={mapsUrl(area.lat, area.lng)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-md border border-hairline bg-elevated p-4 transition-colors duration-200 hover:border-primary/40 hover:bg-background"
            aria-label={`Ouvrir ${area.name} sur Google Maps`}
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
              <MapPin className="size-4" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold tracking-wide text-foreground group-hover:text-primary">
                {area.name}
              </span>
              <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{area.blurb}</span>
            </span>
            <ArrowUpRight
              className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
              aria-hidden="true"
            />
          </a>
        </li>
      ))}
    </ul>
  )
}