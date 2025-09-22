import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ko"],

  // Used when no locale matches
  defaultLocale: "en",

  // 정적 내보내기를 위해 localePrefix를 'never'로 설정
  localePrefix: "never",

  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the internal ones.
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      ko: "/about",
    },
    // You can add more pathnames here
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
