import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

type Locale = (typeof routing.locales)[number];

// Import messages statically
const messages = {
  en: () => import("../messages/en.json").then((module) => module.default),
  ko: () => import("../messages/ko.json").then((module) => module.default),
};

export default getRequestConfig(async ({ requestLocale }) => {
  // 정적 내보내기에서는 requestLocale이 항상 undefined일 수 있으므로
  // 기본 로케일을 사용하거나 다른 방법으로 로케일을 결정합니다
  let locale: Locale = routing.defaultLocale;

  const resolvedLocale = await requestLocale;

  // requestLocale이 있고 지원하는 로케일인 경우 사용
  if (resolvedLocale && routing.locales.includes(resolvedLocale as Locale)) {
    locale = resolvedLocale as Locale;
  }

  return {
    locale,
    messages: await messages[locale](),
  };
});
