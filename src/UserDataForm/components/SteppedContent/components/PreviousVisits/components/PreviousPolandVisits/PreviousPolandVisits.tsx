import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

import { Form } from '@/components/ui/form';
import { InputField } from '@/components/form';
import { Button } from '@/components/ui/button';

import { PolandVisitsTable } from './PolandVisitsTable';

const formSchema = z.object({
  from: z.string(),
  to: z.string(),
  legalBase: z.string(),
});

export type Visit = {
  from: string;
  to: string;
  legalBase: string;
};

type PreviousPolandVisitsProps = {
  visits: Visit[];
  addVisit: (visit: Visit) => void;
  removeVisit: (visitIndex: number) => void;
};

export const PreviousPolandVisits = ({ visits, addVisit, removeVisit }: PreviousPolandVisitsProps) => {
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from: undefined,
      to: undefined,
      legalBase: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    addVisit(values);
  };

  return (
    <div>
      <div>
        <h3 className="font-semibold mb-4">{t('common.previous_poland_stay')}</h3>
        <div className="mb-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-start">
              <InputField
                controllerProps={{ control: form.control, name: 'legalBase' }}
                label={t('main_form.field.previous_poland_stay_legalBase.label')}
              />
              <div className="flex flex-col gap-4 items-stretch justify-between sm:flex-row sm:items-end">
                <InputField
                  controllerProps={{ control: form.control, name: 'from' }}
                  label={t('main_form.field.previous_poland_stay_from.label')}
                  inputProps={{ type: 'date' }}
                  className="w-full"
                />
                <InputField
                  controllerProps={{ control: form.control, name: 'to' }}
                  label={t('main_form.field.previous_poland_stay_to.label')}
                  inputProps={{ type: 'date' }}
                  className="w-full"
                />

                <Button className="w-full sm:grow" type="submit">
                  {t('common.add')}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      {!!visits.length && <PolandVisitsTable visits={visits} removeVisit={removeVisit} />}
    </div>
  );
};
