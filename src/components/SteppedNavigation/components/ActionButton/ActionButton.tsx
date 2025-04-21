import { Button } from '@/components/ui/button';

import { ArcionButtonContent } from './ArcionButtonContent';

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
  // TODO: consider possibility select any step
  // const isButtonVisible = isActive
  //   ? false
  //   : isStepCompleted || shouldShowContinueButton;

  const isButtonVisible = true;

  return (
    <Button
      className={`${isButtonVisible ? 'visible' : 'invisible'} w-full md:w-auto`}
      variant="outline"
      onClick={action}
    >
      <ArcionButtonContent isIntroduction={isIntroduction} shouldShowContinueButton={shouldShowContinueButton} />
    </Button>
  );
};
