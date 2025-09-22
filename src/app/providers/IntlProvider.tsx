"use client";

import { NextIntlClientProvider } from "next-intl";
import { useState, useEffect } from "react";

// 메시지를 정적으로 import
const messages = {
  en: () => import("@/messages/en.json").then((module) => module.default),
  ko: () => import("@/messages/ko.json").then((module) => module.default),
};

type Locale = "en" | "ko";
type Messages = Record<string, unknown>;

// 전역 함수 타입 선언
declare global {
  interface Window {
    changeLocale: (newLocale: Locale) => void;
  }
}

export function IntlProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [loadedMessages, setLoadedMessages] = useState<Messages | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 로컬 스토리지에서 저장된 로케일 가져오기
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    const defaultLocale = savedLocale || "en";

    setLocale(defaultLocale);

    // 해당 로케일의 메시지 로드
    messages[defaultLocale]().then((msgs) => {
      setLoadedMessages(msgs);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    // 로케일이 변경될 때마다 메시지 다시 로드
    if (locale) {
      setIsLoading(true);
      messages[locale]().then((msgs) => {
        setLoadedMessages(msgs);
        setIsLoading(false);
        localStorage.setItem("locale", locale);
      });
    }
  }, [locale]);

  // 로케일 변경 함수를 전역적으로 사용할 수 있도록 window 객체에 추가
  useEffect(() => {
    window.changeLocale = (newLocale: Locale) => {
      setLocale(newLocale);
    };
  }, []);

  if (isLoading || !loadedMessages) {
    return <div>Loading...</div>;
  }

  return (
    <NextIntlClientProvider messages={loadedMessages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
