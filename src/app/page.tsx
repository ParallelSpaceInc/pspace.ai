"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("Index");
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
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Link href="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
            {tNav("home")}
          </Link>
          <Link href="/about" style={{ textDecoration: "none" }}>
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              padding: "1.5rem",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ color: "#555", marginBottom: "1rem" }}>Next.js 15</h2>
            <p style={{ color: "#777" }}>
              Latest version of Next.js with improved performance and features.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "1.5rem",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ color: "#555", marginBottom: "1rem" }}>next-intl</h2>
            <p style={{ color: "#777" }}>
              Internationalization support for multiple languages.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "1.5rem",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ color: "#555", marginBottom: "1rem" }}>
              GitHub Pages
            </h2>
            <p style={{ color: "#777" }}>
              Static deployment ready for GitHub Pages hosting.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
