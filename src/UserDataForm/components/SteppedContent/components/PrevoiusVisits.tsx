import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { PreviousStepButton } from '@/components/PreviousStepButton/PreviousStepButton';

const PrevoiusVisits: React.FC = () => {
  const { t } = useTranslation();

  const handleClickNext = () => {
    // Handle next button click
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <PreviousStepButton />
      <Button onClick={handleClickNext} className="w-full md:w-auto">
        {t('common.next')}
      </Button>
    </div>
  );
};

export default PrevoiusVisits;
