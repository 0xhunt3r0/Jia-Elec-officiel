import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { LanguageProvider } from '@/lib/i18n'
import { SiteShell } from '@/components/site-shell'
import { SITE } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${SITE.name} · Électricien agréé à ${SITE.city}`,
  description: SITE.description,
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/icons/favicon.svg?v=2', type: 'image/svg+xml' }],
  },
  openGraph: {
    title: `${SITE.name} · Électricien agréé à ${SITE.city}`,
    description: SITE.description,
    images: ['/hero/hero1.webp'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#131519',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      dir="ltr"
      suppressHydrationWarning
      className={`${inter.className} bg-background antialiased`}
    >
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light')}}catch(e){}})()`}
        </Script>
        <LanguageProvider>
          <SiteShell>{children}</SiteShell>
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LanguageProvider>
      </body>
    </html>
  )
}
