import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { InputField } from '@/components/form/InputField';
import { PreviousStepButton } from '@/components/PreviousStepButton/PreviousStepButton';
import { useUserData } from '@/state/hooks/useUserData';
import { useStepper } from '@/state/hooks/useStepper';

const formSchema = z.object({
  surname: z.string(),
  previousSurname: z.string(),
  familyName: z.string(),
  name: z.string(),
  previousName: z.string(),
  fatherName: z.string(),
  motherName: z.string(),
  motherMaidenName: z.string(),
});

export const PersonalInformationNamesForm = () => {
  const { t } = useTranslation();
  const { userData, setUserData } = useUserData();
  const { goToNextStep } = useStepper();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      surname: userData?.surname,
      previousSurname: userData?.previousSurname,
      familyName: userData?.familyName,
      name: userData?.name,
      previousName: userData?.previousName,
      fatherName: userData?.fatherName,
      motherName: userData?.motherName,
      motherMaidenName: userData?.motherMaidenName,
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
            controllerProps={{ control: form.control, name: 'surname' }}
            label={t('main_form.field.surname.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'previousSurname' }}
            label={t('main_form.field.previous_surname.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'familyName' }}
            label={t('main_form.field.family_name.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'name' }}
            label={t('main_form.field.name.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'previousName' }}
            label={t('main_form.field.previous_name.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'fatherName' }}
            label={t('main_form.field.father_name.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'motherName' }}
            label={t('main_form.field.mother_name.label')}
          />
          <InputField
            controllerProps={{
              control: form.control,
              name: 'motherMaidenName',
            }}
            label={t('main_form.field.mother_maiden_name.label')}
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
