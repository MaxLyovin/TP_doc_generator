import { useTranslation } from "react-i18next";

import { OptionList } from "@/constants/options";


export const useTranslatedOptions = <T = string>(options: OptionList<T>) => {
  const { t } = useTranslation();
  return options.map(({ value, translationKey }) => ({
    value: value,
    label: t(translationKey),
  }));
};
