import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of paths to exclude from middleware
const PUBLIC_FILE = /\.(.*)$/;
const EXCLUDED_PATHS = ['/_next', '/favicon.ico', '/auth'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static files, _next, favicon.ico, and /auth route
  if (
    EXCLUDED_PATHS.some((path) => pathname.startsWith(path)) ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get('auth');
  if (authCookie?.value === 'sneha123') {
    return NextResponse.next();
  }

  // Redirect to /auth if not authenticated
  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = '/auth';
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|auth).*)'],
};
