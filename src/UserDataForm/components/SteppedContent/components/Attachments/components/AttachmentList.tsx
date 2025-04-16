import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';

type AttachmentListProps = {
  attachmentsList: string[];
  removeAttachment: (attachmentIndex: number) => void;
};

export const AttachmentList = ({ attachmentsList, removeAttachment }: AttachmentListProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <h4 className="mb-4">{t('common.attachments')}</h4>
      <div>
        {attachmentsList.length > 0 ? (
          <ul className="space-y-2">
            {attachmentsList.map((attachment, index) => (
              <li key={attachment} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                <span>{attachment}</span>
                <Button variant="ghost" size="icon" onClick={() => removeAttachment(index)}>
                  <X className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-6 text-muted-foreground">{t('common.empty_list')}</div>
        )}
      </div>
    </div>
  );
};
