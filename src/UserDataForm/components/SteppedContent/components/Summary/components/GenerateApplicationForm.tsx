import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { readPdfTemplateAndFill } from '../utils/readPdfTemplateAndFill';
import { useUserData } from '@/state/hooks/useUserData';
import { useToggle } from '@/hooks/useToggle';

export const GenerateApplicationForm = () => {
  const { t } = useTranslation();
  const { state: isGenerating, toggle } = useToggle();
  const { userData } = useUserData();

  const generateApplicationForm = async () => {
    toggle();
    if (!userData) {
      console.error('User data is not available');
      return;
    }

    await readPdfTemplateAndFill(userData);
    toggle();
  };

  return (
    <div>
      <Button isLoading={isGenerating} onClick={generateApplicationForm}>
        {t('common.generate_document', { document: t('common.application_form') })}
      </Button>
    </div>
  );
};
