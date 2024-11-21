import { PDFPage, PDFForm } from "pdf-lib";

export const drawSubmittingCity = (page: PDFPage, form: PDFForm) => {
  const submittingCity = form.createTextField("submittingCity");

  submittingCity.addToPage(page, {
    x: 365,
    y: 710,
    height: 16,
    backgroundColor: undefined,
    borderColor: undefined,
  });
};
