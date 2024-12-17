import { PDFPage, PDFForm } from "pdf-lib";

export const drawPreviousVisitsPoland = (page: PDFPage, form: PDFForm) => {
  const stayPurposeAdditional1 = form.createTextField("previousVisitsPoland");

  stayPurposeAdditional1.enableMultiline();

  stayPurposeAdditional1.addToPage(page, {
    x: 40,
    y: 55,
    height: 90,
    width: 530,
    backgroundColor: undefined,
    borderColor: undefined,
  });
};
