import { PDFPage, PDFForm } from "pdf-lib";

import { addCellFields } from "../../../../../utils/addCellFields";

export const drawIsCurrentlyInPoland = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 367, y: 733 },
    dimension: 16,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "isCurrentlyInPoland_1",
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 463, y: 733 },
    dimension: 16,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "isCurrentlyInPoland_2",
  });
};
