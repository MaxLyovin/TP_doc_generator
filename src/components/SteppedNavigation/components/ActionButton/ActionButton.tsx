import { Button } from "@/components/ui/button";

import { ArcionButtonContent } from "./ArcionButtonContent";

type ActionButtonProps = {
  isActive: boolean;
  isIntroduction: boolean;
  isStepCompleted: boolean;
  shouldShowContinueButton: boolean;
  action: () => void;
};

export const ActionButton = ({
  isActive,
  isIntroduction,
  isStepCompleted,
  shouldShowContinueButton,
  action,
}: ActionButtonProps) => {
  const isButtonVisible = isActive
    ? false
    : isStepCompleted || shouldShowContinueButton;

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
