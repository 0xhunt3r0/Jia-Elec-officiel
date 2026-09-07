import type { TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'flex min-h-32 w-full rounded-xs border border-input bg-transparent px-2.5 py-3 text-sm text-foreground tracking-wide outline-none transition-[border-color] duration-500 placeholder:text-muted-foreground focus-visible:border-primary disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}
