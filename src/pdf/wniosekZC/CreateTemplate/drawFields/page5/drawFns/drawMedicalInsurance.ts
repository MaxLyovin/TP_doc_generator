import { PDFPage, PDFForm } from "pdf-lib";

export const drawMedicalInsurance = (page: PDFPage, form: PDFForm) => {
  const medicalInsurance = form.createTextField("medicalInsurance");

  medicalInsurance.enableMultiline();

  medicalInsurance.addToPage(page, {
    x: 40,
    y: 127,
    height: 60,
    width: 530,
    backgroundColor: undefined,
    borderColor: undefined,
  });
};
