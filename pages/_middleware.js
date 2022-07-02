import { NextResponse } from 'next/server'
import { APP } from '@/lib/constant'
export async function middleware(req) {
  const { pathname } = req.nextUrl
  if (pathname === '/') {
    return NextResponse.redirect(APP.SITE_URL + '/version')
  }
  return NextResponse.next()
}
