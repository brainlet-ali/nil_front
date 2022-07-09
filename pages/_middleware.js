import { NextResponse } from 'next/server'
import { APP } from '@/lib/constant'
export async function middleware(req) {
  const { pathname } = req.nextUrl

  if (pathname === '/') {
    return NextResponse.redirect(APP.SITE_URL + '/version/9.19')
  }

  if (pathname === '/version') {
    // return NextResponse.redirect(APP.SITE_URL + '/version/9.19')
  }
  return NextResponse.next()
}
