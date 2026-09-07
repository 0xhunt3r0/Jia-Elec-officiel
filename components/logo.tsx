import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center shrink-0', className)} aria-label="Jia Elec home">
      <span className="relative flex h-20 w-auto items-center justify-center sm:h-24">
        {/* Shown in dark mode */}
        <Image
          src="/light-logo.png"
          alt="Jia Elec"
          width={280}
          height={96}
          className="logo-dark h-full w-auto object-contain"
          priority
        />
        {/* Shown in light mode */}
        <Image
          src="/logo.png"
          alt=""
          aria-hidden="true"
          width={280}
          height={96}
          className="logo-light h-full w-auto object-contain"
          priority
        />
      </span>
    </Link>
  )
}
