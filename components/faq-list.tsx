'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import { FAQS } from '@/lib/site'

export function FaqList() {
  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-border border-y border-border">
      {FAQS.map((item) => (
        <Accordion.Item key={item.q} value={item.q}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-foreground transition-colors duration-300 hover:text-primary">
              {item.q}
              <Plus
                className="size-5 shrink-0 text-primary transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-45"
                aria-hidden="true"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
            <p className="max-w-copy pb-5 text-sm text-muted-foreground">{item.a}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
