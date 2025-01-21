import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import pl from "./pl.json";
import ru from "./ru.json";

export const resources = {
  en: { translation: en },
  pl: { translation: pl },
  ru: { translation: ru },
} as const;

export const defaultNS = "translation";

i18n.use(initReactI18next).init({
  returnNull: false,
  debug: true,
  fallbackLng: "en",
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18n;
