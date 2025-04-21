import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { PreviousStepButton } from '@/components/PreviousStepButton/PreviousStepButton';

interface FamilyMembersFormData {
  name: string;
  sex: string;
  birthday: string;
  kinship: string;
  citizenship: string;
  residencePlace: string;
  isApplying: string;
  isDependent: string;
}

export const FamilyMembersForm = () => {
  const { t } = useTranslation();
  const { handleSubmit } = useForm<FamilyMembersFormData>();

  const onSubmit = (data: FamilyMembersFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <PreviousStepButton />
        <Button type="submit" className="w-full md:w-auto">
          {t('common.next')}
        </Button>
      </div>
    </form>
  );
};
