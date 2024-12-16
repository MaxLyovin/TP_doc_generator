import { PDFPage, PDFForm } from "pdf-lib";
import { addCellFields } from "../../../../../utils/addCellFields";

export const drawStayPurpose = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 60, y: 418 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_1",
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 60, y: 385 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_2",
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 60, y: 352 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_3",
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 60, y: 310 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_4",
  });
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 60, y: 276 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_5",
  });
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 60, y: 229 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_6",
  });
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 60, y: 198 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_7",
  });
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 60, y: 169 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_8",
  });
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 60, y: 143 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_9",
  });
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 60, y: 103 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_10",
  });
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 60, y: 70 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "stayPurpose_11",
  });
};
