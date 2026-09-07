'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'

type InfiniteSliderProps = {
  children: ReactNode
  className?: string
  /** Duration of one full loop in seconds */
  duration?: number
  /** Gap between items in px */
  gap?: number
  reverse?: boolean
}

/**
 * Seamless infinite horizontal slider.
 * Children are rendered in two identical halves (each carrying its own gap),
 * and the track translates by exactly one half's measured pixel width in a
 * linear loop — so the seam between the copies is perfectly invisible.
 */
export function InfiniteSlider({
  children,
  className,
  duration = 30,
  gap = 48,
  reverse = false,
}: InfiniteSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [halfWidth, setHalfWidth] = useState(0)

  // Measure one half of the track exactly (in px) and re-measure on resize.
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setHalfWidth(trackRef.current.scrollWidth / 2)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const half = (hidden: boolean) => (
    <div
      aria-hidden={hidden || undefined}
      className="flex w-max shrink-0 items-center"
      style={{ gap, paddingRight: gap }}
    >
      {children}
    </div>
  )

  return (
    <div className={cn('group relative overflow-hidden', className)}>
      <motion.div
        ref={trackRef}
        className="flex w-max items-center"
        animate={{ x: reverse ? [-halfWidth, 0] : [0, -halfWidth] }}
        transition={{
          duration: halfWidth ? duration : 0,
          repeat: halfWidth ? Infinity : 0,
          ease: 'linear',
        }}
      >
        {half(false)}
        {half(true)}
      </motion.div>
    </div>
  )
}

