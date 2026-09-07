import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 font-semibold whitespace-nowrap capitalize tracking-wide transition-[color,background-color,border-color] duration-300 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'border border-primary bg-primary text-primary-foreground hover:border-foreground hover:bg-foreground hover:text-ink',
        outline:
          'border border-foreground bg-transparent text-foreground hover:border-primary hover:text-primary',
        ghost: 'bg-transparent text-foreground hover:text-primary',
        dark: 'border border-ink bg-ink text-foreground hover:border-foreground hover:bg-foreground hover:text-ink',
      },
      size: {
        default: 'h-auto rounded-xs px-8 py-3.5 text-base',
        lg: 'h-auto rounded-xs px-8 py-3.5 text-base',
        sm: 'h-10 rounded-xs px-4 text-sm',
        icon: 'size-11 rounded-xs',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

export { buttonVariants }
