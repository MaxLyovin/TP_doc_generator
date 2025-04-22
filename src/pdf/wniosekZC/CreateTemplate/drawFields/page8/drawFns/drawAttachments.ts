import { PDFPage, PDFForm } from 'pdf-lib';

const attachmentsAmount = 15;
const yShiftBetweenAttachments = 15;
const getYshift = (n: number) => yShiftBetweenAttachments * (n - 1);
const firstAttachmenStartPoint = { x: 72, y: 603 };
export const attachmentBaseName = 'attachment';

export const drawAttachments = (page: PDFPage, form: PDFForm) => {
  const drawAttachment = (orderNumber: number) => {
    const yShift = getYshift(orderNumber);
    const attachment = form.createTextField(`${attachmentBaseName}_${orderNumber}`);

    attachment.addToPage(page, {
      x: firstAttachmenStartPoint.x,
      y: firstAttachmenStartPoint.y - yShift,
      height: 16,
      width: 500,
      backgroundColor: undefined,
      borderColor: undefined,
    });
  };

  for (let index = 1; index <= attachmentsAmount; index++) {
    drawAttachment(index);
  }
};
