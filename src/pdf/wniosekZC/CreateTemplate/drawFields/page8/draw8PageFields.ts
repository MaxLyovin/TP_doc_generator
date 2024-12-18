import { PDFPage, PDFForm } from "pdf-lib";

import { drawSignatureDate, drawAttachments } from "./drawFns";

export const draw8PageFields = (page: PDFPage, form: PDFForm) => {
  drawSignatureDate(page, form);
  drawAttachments(page, form);
};
