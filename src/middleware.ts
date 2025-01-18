import { MiddlewareConfig, NextResponse, type NextRequest } from 'next/server';
import { middlewareAuth } from './utils/middlewareAuth';

export const config: MiddlewareConfig = {
  matcher: ['/profile/:path*', '/auth/:path*'],
};

export async function middleware(request: NextRequest) {
  const url = request.url;
  const { pathname } = request.nextUrl;

  const isAuthPath = pathname.startsWith('/auth/sign-up') || pathname.startsWith('/auth/sign-in');

  if (pathname.startsWith('/profile')) {
    const user = await middlewareAuth(request);
    if (!user) return NextResponse.redirect(new URL('/auth/sign-in', url));
  }

  if (isAuthPath) {
    const user = await middlewareAuth(request);
    if (user) return NextResponse.redirect(new URL('/profile', url));
  }

  return NextResponse.next();
}
