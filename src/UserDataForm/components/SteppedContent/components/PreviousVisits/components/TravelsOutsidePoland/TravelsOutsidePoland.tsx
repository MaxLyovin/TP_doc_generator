import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

import { Form } from '@/components/ui/form';
import { InputField } from '@/components/form';
import { Button } from '@/components/ui/button';

import { TravelsOutsidePolandTable } from './TravelsOutsidePolandTable';

const formSchema = z.object({
  from: z.string(),
  to: z.string(),
  country: z.string(),
});

export type Travel = {
  from: string;
  to: string;
  country: string;
};

type TravelsOutsidePolandProps = {
  travels: Travel[];
  addTravel: (travel: Travel) => void;
  removeTravel: (travelIndex: number) => void;
};

export const TravelsOutsidePoland = ({ travels, addTravel, removeTravel }: TravelsOutsidePolandProps) => {
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from: undefined,
      to: undefined,
      country: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    addTravel(values);
  };

  return (
    <div>
      <div>
        <h3 className="font-semibold mb-4">{t('travels_outside_poland.header')}</h3>
        <div className="mb-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-start">
              <InputField
                controllerProps={{ control: form.control, name: 'country' }}
                label={t('travels_outside_poland.field.country.label')}
              />
              <div className="flex gap-4 items-end justify-between">
                <InputField
                  controllerProps={{ control: form.control, name: 'from' }}
                  label={t('common.from')}
                  inputProps={{ type: 'date' }}
                />
                <InputField
                  controllerProps={{ control: form.control, name: 'to' }}
                  label={t('common.to')}
                  inputProps={{ type: 'date' }}
                />
              </div>
              <Button className="w-full md:w-auto" type="submit">
                {t('common.add')}
              </Button>
            </form>
          </Form>
        </div>
      </div>
      {!!travels.length && <TravelsOutsidePolandTable travels={travels} removeTravel={removeTravel} />}
    </div>
  );
};
