import { PDFPage, PDFForm } from "pdf-lib";

export const drawStayPurposeAdditional = (page: PDFPage, form: PDFForm) => {
  const stayPurposeAdditional1 = form.createTextField("stayPurposeAdditional");

  stayPurposeAdditional1.enableMultiline();

  stayPurposeAdditional1.addToPage(page, {
    x: 80,
    y: 608,
    height: 32,
    width: 100,
    backgroundColor: undefined,
    borderColor: undefined,
  });
};
