import { PDFPage, PDFForm } from "pdf-lib";

import { addCellFields } from "../../../../../utils/addCellFields";

export const drawIsSubjectOfCriminal = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 83, y: 410 },
    dimension: 16,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "isSubjectOfCriminal_1",
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 83, y: 313 },
    dimension: 16,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "isSubjectOfCriminal_2",
  });
};
