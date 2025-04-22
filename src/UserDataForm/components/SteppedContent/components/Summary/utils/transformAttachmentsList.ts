import { attachmentBaseName } from '@/pdf/wniosekZC/CreateTemplate/drawFields/page8/drawFns/drawAttachments';

export const transformAttachmentsList = (attachments: string[]) =>
  attachments.reduce((acc, attachment, index) => ({ ...acc, [`${attachmentBaseName}_${index + 1}`]: attachment }), {});
