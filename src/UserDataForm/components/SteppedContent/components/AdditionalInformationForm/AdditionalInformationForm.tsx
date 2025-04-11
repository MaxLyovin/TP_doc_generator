import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { InputField, SelectField, TextAreaField } from '@/components/form';
import { PreviousStepButton } from '@/components/PreviousStepButton/PreviousStepButton';
import { useUserData } from '@/state/hooks/useUserData';
import { yesNoOptions as baseYesNoOptions } from '@/constants/options';
import { useStepper } from '@/state/hooks/useStepper';
import { useTranslatedOptions } from '@/i18n/useTranslatedOptions';

const formSchema = z.object({
  meansOfSubstence: z.string(),
  medicalInsurance: z.string(),
  clauseDLRS: z.string(),
  isSentenced: z.string(),
  sentencedDescription: z.string(),
  isSubjectOfCriminal: z.string(),
  subjectOfCriminalDescription: z.string(),
  hasLiabilitiesResulting: z.string(),
  liabilitiesResultingDescription: z.string(),
});

export const AdditionalInformationForm = () => {
  const { t } = useTranslation();
  const { userData, setUserData } = useUserData();
  const { goToNextStep } = useStepper();

  const yesNoOptions = useTranslatedOptions(baseYesNoOptions);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      meansOfSubstence: userData?.meansOfSubstence,
      medicalInsurance: userData?.medicalInsurance,
      clauseDLRS: userData?.clauseDLRS,
      isSentenced: userData?.isSentenced,
      sentencedDescription: userData?.sentencedDescription,
      isSubjectOfCriminal: userData?.isSubjectOfCriminal,
      subjectOfCriminalDescription: userData?.subjectOfCriminalDescription,
      hasLiabilitiesResulting: userData?.hasLiabilitiesResulting,
      liabilitiesResultingDescription: userData?.liabilitiesResultingDescription,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setUserData((data) => ({
      ...data,
      ...values,
    }));
    goToNextStep();
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <InputField
            controllerProps={{ control: form.control, name: 'meansOfSubstence' }}
            label={t('main_form.field.means_of_substence.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'medicalInsurance' }}
            label={t('main_form.field.medical_insurance.label')}
          />
          <SelectField
            controllerProps={{ control: form.control, name: 'clauseDLRS' }}
            options={yesNoOptions}
            label={t('main_form.field.clause_DLRS.label')}
          />
          <SelectField
            controllerProps={{ control: form.control, name: 'isSentenced' }}
            options={yesNoOptions}
            label={t('main_form.field.is_sentenced.label')}
          />
          <TextAreaField
            controllerProps={{ control: form.control, name: 'sentencedDescription' }}
            label={t('main_form.field.sentenced_description.label')}
          />

          <SelectField
            controllerProps={{ control: form.control, name: 'isSubjectOfCriminal' }}
            options={yesNoOptions}
            label={t('main_form.field.is_subject_of_criminal.label')}
          />
          <TextAreaField
            controllerProps={{ control: form.control, name: 'subjectOfCriminalDescription' }}
            label={t('main_form.field.subjec_of_criminal_description.label')}
          />

          <SelectField
            controllerProps={{ control: form.control, name: 'hasLiabilitiesResulting' }}
            options={yesNoOptions}
            label={t('main_form.field.has_liabilities_resulting.label')}
          />
          <TextAreaField
            controllerProps={{ control: form.control, name: 'liabilitiesResultingDescription' }}
            label={t('main_form.field.liabilities_resulting_description.label')}
          />

          <div className="flex justify-between">
            <PreviousStepButton />
            <Button type="submit">{t('common.next')}</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
