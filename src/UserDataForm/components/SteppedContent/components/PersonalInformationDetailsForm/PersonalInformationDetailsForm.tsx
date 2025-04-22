import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { InputField, SelectField } from '@/components/form';
import { PreviousStepButton } from '@/components/PreviousStepButton/PreviousStepButton';
import { useUserData } from '@/state/hooks/useUserData';
import { sexOptions } from '@/constants/options';
import { useStepper } from '@/state/hooks/useStepper';

const formSchema = z.object({
  birthdayDate: z.string(),
  sex: z.string(),
  placeOfBirth: z.string(),
  countryOfBirth: z.string(),
  nationality: z.string(),
  citizenship: z.string(),
  martialStatus: z.string(),
  education: z.string(),
  height: z.string(),
  colourOfEyes: z.string(),
  specialMarks: z.string(),
  pesel: z.string(),
});

export const PersonalInformationDetailsForm = () => {
  const { t } = useTranslation();
  const { userData, setUserData } = useUserData();
  const { goToNextStep } = useStepper();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      birthdayDate: userData?.birthday,
      sex: userData?.sex,
      placeOfBirth: userData?.placeOfBirth,
      countryOfBirth: userData?.countryOfBirth,
      nationality: userData?.nationality,
      citizenship: userData?.citizenship,
      martialStatus: userData?.martialStatus,
      education: userData?.education,
      height: userData?.height,
      colourOfEyes: userData?.colourOfEyes,
      specialMarks: userData?.specialMarks,
      pesel: userData?.pesel,
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
            controllerProps={{ control: form.control, name: 'birthdayDate' }}
            label={t('main_form.field.birthday.label')}
            inputProps={{ type: 'date' }}
          />
          <SelectField
            options={sexOptions.map((option) => ({
              value: option,
              label: t(`common.sex.${option}`),
            }))}
            controllerProps={{ control: form.control, name: 'sex' }}
            label={t('main_form.field.sex.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'placeOfBirth' }}
            label={t('main_form.field.place_of_birth.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'countryOfBirth' }}
            label={t('main_form.field.country_of_birth.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'nationality' }}
            label={t('main_form.field.nationality.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'citizenship' }}
            label={t('main_form.field.citizenship.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'martialStatus' }}
            label={t('main_form.field.martial_status.label')}
          />

          <InputField
            controllerProps={{
              control: form.control,
              name: 'education',
            }}
            label={t('main_form.field.education.label')}
          />

          <InputField
            controllerProps={{
              control: form.control,
              name: 'height',
            }}
            label={t('main_form.field.height.label')}
          />
          <InputField
            controllerProps={{
              control: form.control,
              name: 'colourOfEyes',
            }}
            label={t('main_form.field.colour_of_eyes.label')}
          />

          <InputField
            controllerProps={{ control: form.control, name: 'specialMarks' }}
            label={t('main_form.field.special_marks.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'pesel' }}
            label={t('main_form.field.pesel.label')}
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
