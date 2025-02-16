import { OptionList } from "@/constants/options";

import { useTranslation } from "react-i18next";

export const useTranslatedOptions = <T = string>(options: OptionList<T>) => {
  const { t } = useTranslation();
  return options.map(({ value, translationKey }) => ({
    value: value,
    label: t(translationKey),
  }));
};
