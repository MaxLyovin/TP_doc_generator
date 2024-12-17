import { PDFPage, PDFForm } from "pdf-lib";

export const drawMeansOfSubstence = (page: PDFPage, form: PDFForm) => {
  const meansOfSubstence = form.createTextField("meansOfSubstence");

  meansOfSubstence.enableMultiline();

  meansOfSubstence.addToPage(page, {
    x: 40,
    y: 215,
    height: 62,
    width: 530,
    backgroundColor: undefined,
    borderColor: undefined,
  });
};
