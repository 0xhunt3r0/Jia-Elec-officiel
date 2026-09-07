'use client'

import { cn } from '@/lib/utils'
import type { CSSProperties } from 'react'

type ProgressiveBlurProps = {
  className?: string
  /** Which edge the blur fades from */
  direction: 'left' | 'right' | 'top' | 'bottom'
  /** Maximum blur radius in px (at the edge) */
  blurIntensity?: number
}

const LAYERS = 5

/**
 * Edge fade using stacked backdrop-blur layers — each layer is blurrier
 * the closer it sits to the chosen edge, producing a smooth gradient blur.
 */
export function ProgressiveBlur({
  className,
  direction,
  blurIntensity = 1,
}: ProgressiveBlurProps) {
  // The mask must be OPAQUE at the chosen edge and fade inward.
  // "to right"  → black (visible) starts at the LEFT edge
  // "to left"   → black (visible) starts at the RIGHT edge
  // "to bottom" → black (visible) starts at the TOP edge
  // "to top"    → black (visible) starts at the BOTTOM edge
  const maskDirection =
    direction === 'left' ? 'right' : direction === 'right' ? 'left' : direction === 'top' ? 'bottom' : 'top'
  const mask = `linear-gradient(to ${maskDirection}, black 0%, black 40%, transparent 100%)`

  return (
    <div className={cn('pointer-events-none', className)}>
      {Array.from({ length: LAYERS }).map((_, i) => {
        // Layer 0 is closest to the edge (strongest blur, smallest),
        // each next layer extends further in with less blur.
        const blur = ((LAYERS - i) / LAYERS) * 24 * blurIntensity
        const size = ((i + 1) / LAYERS) * 100

        let style: CSSProperties
        if (direction === 'left') {
          style = { left: 0, width: `${size}%` }
        } else if (direction === 'right') {
          style = { right: 0, width: `${size}%` }
        } else if (direction === 'top') {
          style = { top: 0, height: `${size}%` }
        } else {
          style = { bottom: 0, height: `${size}%` }
        }

        return (
          <div
            key={i}
            className="absolute"
            style={{
              ...style,
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        )
      })}
    </div>
  )
}

