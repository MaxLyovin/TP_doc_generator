import { PDFPage, PDFForm } from "pdf-lib";
import { addCellFields } from "./utils/addCellFields";

export const drawNameFields = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 214, y: 182 },
    dimension: 14,
    cellsAmount: 20,
    cellsSpacing: 18,
    nameBase: "name",
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 214, y: 151 },
    dimension: 14,
    cellsAmount: 20,
    cellsSpacing: 18,
    nameBase: "name--SecondLine",
  });
};
