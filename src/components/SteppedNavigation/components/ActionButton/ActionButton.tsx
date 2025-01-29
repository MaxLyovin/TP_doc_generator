import { Button } from "@/components/ui/button";

import { ArcionButtonContent } from "./ArcionButtonContent";

type ActionButtonProps = {
  isIntroduction: boolean;
  isStepCompleted: boolean;
  shouldShowContinueButton: boolean;
  action: () => void;
};

export const ActionButton = ({
  isIntroduction,
  isStepCompleted,
  shouldShowContinueButton,
  action,
}: ActionButtonProps) => {
  const isButtonVisible = isStepCompleted || shouldShowContinueButton;

  return (
    <Button
      className={isButtonVisible ? "visible" : "invisible"}
      variant="outline"
      onClick={action}
    >
      <ArcionButtonContent
        isIntroduction={isIntroduction}
        shouldShowContinueButton={shouldShowContinueButton}
      />
    </Button>
  );
};
