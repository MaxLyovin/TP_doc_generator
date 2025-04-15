import { useTranslation } from "react-i18next";

import { useStepper } from "@/state/hooks/useStepper";
import { Button } from "../ui/button";

export const PreviousStepButton = () => {
  const { t } = useTranslation();
  const { goToPreviousStep } = useStepper();

  return <Button variant='secondary' onClick={goToPreviousStep}>{t("common.previous")}</Button>;
};
