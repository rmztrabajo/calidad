// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token && request.nextUrl.pathname.startsWith('/protected')) {
    return NextResponse.redirect(new URL('/', request.url)); // Redirige al login
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/protected/:path*'],
};
