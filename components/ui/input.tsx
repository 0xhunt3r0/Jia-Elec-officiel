import type { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Input({ className, type = 'text', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-12 w-full rounded-xs border border-input bg-transparent px-2.5 py-2 text-sm text-foreground tracking-wide outline-none transition-[border-color] duration-500 placeholder:text-muted-foreground focus-visible:border-primary disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}
