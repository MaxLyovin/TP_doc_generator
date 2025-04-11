import { PDFPage, PDFForm } from "pdf-lib";

import { addCellFields } from "../../../../../utils/addCellFields";

export const drawLegalBasisForStaying = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 102, y: 593 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "legalBasisForStaying_1",
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 102, y: 563 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "legalBasisForStaying_2",
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 102, y: 534 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "legalBasisForStaying_3",
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 102, y: 505 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "legalBasisForStaying_4",
  });
};
