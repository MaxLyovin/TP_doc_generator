import { Eye, Pencil } from "lucide-react";
import { useTranslation } from "react-i18next";

type ArcionButtonContentProps = {
  isIntroduction: boolean;
  shouldShowContinueButton: boolean;
};

export const ArcionButtonContent = ({
  shouldShowContinueButton,
  isIntroduction,
}: ArcionButtonContentProps) => {
  const { t } = useTranslation();

  if (shouldShowContinueButton) {
    return <>{t("common.continue")}</>;
  }

  if (isIntroduction) {
    return (
      <>
        <Eye />
        {t("common.view")}
      </>
    );
  }

  return (
    <>
      <Pencil />
      {t("common.edit")}
    </>
  );
};
