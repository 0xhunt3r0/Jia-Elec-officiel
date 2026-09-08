import { NextRequest, NextResponse } from 'next/server'

const locales = ['fr', 'en', 'ar'] as const
const defaultLocale = 'fr'

function isAsset(pathname: string) {
  return pathname.includes('.') || pathname.startsWith('/_next') || pathname.startsWith('/api')
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (isAsset(pathname)) return NextResponse.next()

  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]

  if (firstSegment && locales.includes(firstSegment as (typeof locales)[number])) {
    const locale = firstSegment
    const path = segments.slice(1).length ? `/${segments.slice(1).join('/')}` : '/'
    const rewriteUrl = request.nextUrl.clone()
    rewriteUrl.pathname = path
    const response = NextResponse.rewrite(rewriteUrl)
    response.cookies.set('jia-elec-lang', locale, { path: '/', sameSite: 'lax' })
    return response
  }

  // Default language is always French: any path without a locale prefix
  // redirects to /fr — regardless of any previously saved language cookie.
  const url = request.nextUrl.clone()
  url.pathname = `/fr${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
