import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

import { getToken } from 'next-auth/jwt';
import { Locale, i18n } from '@/i18n-config';
import { CustomMiddleware } from './chain';

const unprotectedPaths = ['/discover', '/auth'];

function getUnprotectedRoutes(unprotectedPaths: string[], locales: Locale[]) {
  let unprotectedPathsWithLocale = [...unprotectedPaths];

  unprotectedPaths.forEach((route) => {
    locales.forEach(
      (locale) =>
        (unprotectedPathsWithLocale = [
          ...unprotectedPathsWithLocale,
          `/${locale}${route}`,
        ])
    );
  });

  return unprotectedPathsWithLocale;
}

export function withAuthMiddleware(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    // Create a response object to pass down the chain
    const response = NextResponse.next();

    const token = await getToken({ req: request });

    // @ts-ignore
    request.nextauth = request.nextauth || {};
    // @ts-ignore
    request.nextauth.token = token;
    const pathname = request.nextUrl.pathname;

    const unprotectedPathsWithLocale = getUnprotectedRoutes(unprotectedPaths, [
      ...i18n.locales,
    ]);

    if (
      !token &&
      !unprotectedPathsWithLocale.some((path) => pathname.includes(path))
    ) {
      const signInUrl = new URL('/discover', request.url);
      return NextResponse.redirect(signInUrl);
    }

    return middleware(request, event, response);
  };
}
