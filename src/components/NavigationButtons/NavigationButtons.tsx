import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { PreviousStepButton } from '@/components/PreviousStepButton/PreviousStepButton';

interface NavigationButtonsProps {
  onNext?: () => void;
  nextButtonType?: 'button' | 'submit';
}

export const NavigationButtons = ({ onNext, nextButtonType = 'button' }: NavigationButtonsProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row justify-between gap-4 mt-8">
      <PreviousStepButton />
      <Button type={nextButtonType} onClick={onNext} className="w-full md:w-auto">
        Далее
      </Button>
    </div>
  );
};
