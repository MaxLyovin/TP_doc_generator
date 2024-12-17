import { PDFPage, PDFForm } from "pdf-lib";

export const drawTravelsOutsidePoland = (page: PDFPage, form: PDFForm) => {
  const travelsOutsidePoland = form.createTextField("travelsOutsidePoland");

  travelsOutsidePoland.enableMultiline();

  travelsOutsidePoland.addToPage(page, {
    x: 40,
    y: 325,
    height: 100,
    width: 530,
    backgroundColor: undefined,
    borderColor: undefined,
  });
};
