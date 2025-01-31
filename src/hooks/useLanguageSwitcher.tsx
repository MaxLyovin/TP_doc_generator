import { useState } from "react";
import { useTranslation } from "react-i18next";

const useLanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "pl", name: "Polski", flag: "🇵🇱" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ];

  return {
    changeLanguage, languages, currentLanguage
  }
}

export { useLanguageSwitcher }