import { resources, defaultNS } from "../i18n/i18n";

export type TranslationKey = keyof typeof resources.en.translation;

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources.en;
  }
}
