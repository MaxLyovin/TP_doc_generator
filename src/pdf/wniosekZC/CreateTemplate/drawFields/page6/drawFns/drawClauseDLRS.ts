import { PDFPage, PDFForm } from "pdf-lib";

export const drawClauseDLRS = (page: PDFPage, form: PDFForm) => {
  const medicalInsurance = form.createTextField("clauseDLRS");

  medicalInsurance.enableMultiline();

  medicalInsurance.addToPage(page, {
    x: 48,
    y: 752,
    height: 16,
    width: 515,
    backgroundColor: undefined,
    borderColor: undefined,
  });
};
