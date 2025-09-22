"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function AboutPage() {
  const t = useTranslations("About");
  const tNav = useTranslations("Navigation");
  const tCommon = useTranslations("Common");

  const handleLanguageChange = (locale: "en" | "ko") => {
    if (typeof window !== "undefined" && window.changeLocale) {
      window.changeLocale(locale);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <header
        style={{
          marginBottom: "2rem",
          borderBottom: "1px solid #ccc",
          paddingBottom: "1rem",
        }}
      >
        <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Link href="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
            {tNav("home")}
          </Link>
          <Link
            href="/about"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#0070f3",
            }}
          >
            {tNav("about")}
          </Link>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <span>{tCommon("currentLanguage")}</span>
            <button
              onClick={() => handleLanguageChange("en")}
              style={{ padding: "0.5rem" }}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange("ko")}
              style={{ padding: "0.5rem" }}
            >
              한국어
            </button>
          </div>
        </nav>
      </header>

      <main>
        <h1 style={{ color: "#333", marginBottom: "1rem" }}>{t("title")}</h1>
        <p style={{ lineHeight: "1.6", marginBottom: "2rem", color: "#666" }}>
          {t("description")}
        </p>

        <div style={{ marginTop: "2rem" }}>
          <Link
            href="/"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#666",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            {t("back")}
          </Link>
        </div>
      </main>
    </div>
  );
}
