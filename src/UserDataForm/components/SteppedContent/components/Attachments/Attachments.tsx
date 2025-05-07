import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useUserData } from '@/state/hooks/useUserData';
import { PreviousStepButton } from '@/components/PreviousStepButton/PreviousStepButton';
import { Button } from '@/components/ui/button';
import { useStepper } from '@/state/hooks/useStepper';

import { AttachmentForm } from './components/AttachmentForm';
import { AttachmentList } from './components/AttachmentList';

export const Attachments = () => {
  const { t } = useTranslation();
  const { userData, setUserData } = useUserData();
  const { goToNextStep } = useStepper();
  const [attachmentsList, setAttachmentsList] = useState<string[]>(userData?.attachmentsList ?? []);

  const addAttachment = (attachment: string) => setAttachmentsList((prev) => [...prev, attachment]);
  const removeAttachment = (attachmentIndex: number) =>
    setAttachmentsList((prev) => prev.filter((_item, index) => index !== attachmentIndex));

  useEffect(() => {
    setUserData((data) => ({
      ...data,
      attachmentsList,
    }));
  }, [attachmentsList]);

  return (
    <div className="text-start">
      <h3 className="mb-4 font-semibold">{t('main_form.step.attachments')}</h3>
      <AttachmentForm addAttachment={addAttachment} />
      <div className="mt-8">
        <AttachmentList attachmentsList={attachmentsList} removeAttachment={removeAttachment} />
      </div>
      <div className="flex justify-between mt-8">
        <PreviousStepButton />
        <Button onClick={goToNextStep}>{t('common.next')}</Button>
      </div>
    </div>
  );
};
