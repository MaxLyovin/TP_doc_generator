import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { InputField } from '@/components/form';

type AttachmentFormProps = {
  addAttachment: (attachment: string) => void;
};

const formSchema = z.object({
  attachment: z.string().min(1, 'Attachment is required'),
});

export const AttachmentForm = ({ addAttachment }: AttachmentFormProps) => {
  const { t } = useTranslation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      attachment: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    addAttachment(values.attachment);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <InputField
            controllerProps={{ control: form.control, name: 'attachment' }}
            label={t('main_form.field.medical_insurance.label')}
          />
          <Button type="submit">{t('common.add')}</Button>
        </div>
      </form>
    </Form>
  );
};
