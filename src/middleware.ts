import { NextResponse, type NextRequest } from "next/server";

import { getUrl } from "./lib/get-url";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get('next-auth.session-token')
  const pathname = req.nextUrl.pathname

  if (pathname === '/sign-in' && token) 
    return NextResponse.redirect(new URL(getUrl('/dashboard')))

  if (pathname.includes('/dashboard') && !token)
    return NextResponse.redirect(new URL(getUrl('/sign-in')))
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
