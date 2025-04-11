import { PDFPage, PDFForm } from "pdf-lib";

import { addCellFields } from "../../../../../utils/addCellFields";

export const drawStayPurpose = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 61, y: 781 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_12",
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 60, y: 744 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_13",
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 60, y: 711 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_14",
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 60, y: 678 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_15",
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 60, y: 642 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_16",
  });
};
