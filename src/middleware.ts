import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

// Your existing createMiddleware setup
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
});

export default function middleware(req: NextRequest) {
  // Attempt to retrieve the locale from the previous URL
  const referer = req.headers.get("referer");
  let refererLocale = "";

  if (referer) {
    // Extract the locale from the URL path in the Referer header
    const pathLocaleMatch = referer.match(/\/\/[^/]+\/([^/]+)/);
    if (pathLocaleMatch && locales.includes(pathLocaleMatch[1])) {
      refererLocale = pathLocaleMatch[1];
    }
  }

  // Fallback to the default locale if no valid locale was found in the Referer
  const effectiveLocale = refererLocale || "en";

  // Check if the current request's URL already includes a locale
  const hasLocale = locales.some((locale) =>
    req.nextUrl.pathname.startsWith(`/${locale}`)
  );
  if (!hasLocale) {
    // If not, redirect to the same URL but with the effective locale prefixed
    const url = req.nextUrl.clone();
    url.pathname = `/${effectiveLocale}${url.pathname}`;
    return NextResponse.redirect(url);
  }

  // Proceed with the next-intl middleware if the locale is already present
  return intlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|es)/:path*"],
};
