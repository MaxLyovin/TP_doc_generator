import { PDFPage, PDFForm } from "pdf-lib";

export const drawWojewodaField = (page: PDFPage, form: PDFForm) => {
  const wojewoda = form.createTextField("submitAuthority");

  wojewoda.addToPage(page, {
    x: 130,
    y: 400,
    height: 16,
    backgroundColor: undefined,
    borderColor: undefined,
  });
};
