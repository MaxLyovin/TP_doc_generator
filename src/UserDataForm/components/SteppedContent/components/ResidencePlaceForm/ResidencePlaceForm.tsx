import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

import { Form } from '@/components/ui/form';
import { InputField } from '@/components/form/InputField';
import { SelectField } from '@/components/form';
import { provinceOptions as baseProvinceOptions } from '@/constants/options';
import { useUserData } from '@/state/hooks/useUserData';
import { useStepper } from '@/state/hooks/useStepper';
import { NavigationButtons } from '@/components/NavigationButtons/NavigationButtons';

const formSchema = z.object({
  cprVoivodship: z.string(),
  cprCity: z.string(),
  cprStreet: z.string(),
  cprHouseNumber: z.string(),
  cprApartmentNumber: z.string(),
  cprPostalCode: z.string(),
});

export const ResidencePlaceForm = () => {
  const { t } = useTranslation();
  const { userData, setUserData } = useUserData();
  const { goToNextStep } = useStepper();

  const provinceOptions = baseProvinceOptions.map((province) => ({
    value: province,
    label: t(`province.${province}`),
  }));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cprVoivodship: userData?.cprVoivodship,
      cprCity: userData?.cprCity,
      cprStreet: userData?.cprStreet,
      cprHouseNumber: userData?.cprHouseNumber,
      cprApartmentNumber: userData?.cprApartmentNumber,
      cprPostalCode: userData?.cprPostalCode,
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
          <SelectField
            controllerProps={{ control: form.control, name: 'cprVoivodship' }}
            label={t('main_form.field.province.label')}
            options={provinceOptions}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'cprCity' }}
            label={t('main_form.field.city.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'cprStreet' }}
            label={t('main_form.field.street.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'cprHouseNumber' }}
            label={t('main_form.field.house_number.label')}
          />
          <InputField
            controllerProps={{
              control: form.control,
              name: 'cprApartmentNumber',
            }}
            label={t('main_form.field.apartment_number.label')}
          />
          <InputField
            controllerProps={{ control: form.control, name: 'cprPostalCode' }}
            label={t('main_form.field.postal_code.label')}
          />

          <NavigationButtons nextButtonType="submit" />
        </form>
      </Form>
    </div>
  );
};
