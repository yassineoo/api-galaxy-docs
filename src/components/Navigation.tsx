import Link from "next/link";
import { useLanguage } from "../hooks/useLanguage";

export default function Navigation() {
  const { t, locale, setLocale } = useLanguage();
  const language = locale === "en" ? "pt" : "en";

  function handleLocaleChange(language: string) {
    if (!window) {
      return;
    }

    localStorage.setItem("lang", language);
    setLocale(language);
  }

  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href={`/${locale}/intro`}>{t("docs")}</Link>
        </li>
        <li>
          <Link href={`/${locale}/${t("about").toLowerCase()}`}>
            {t("about")}
          </Link>
        </li>
        <li>
          <button onClick={() => handleLocaleChange(language)}>{locale}</button>
        </li>
      </ul>
    </nav>
  );
}
