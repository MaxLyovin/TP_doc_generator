import { PDFPage, PDFForm } from "pdf-lib";
import { getCellName } from "./getCellName";

type StartPoint = {
  x: number;
  y: number;
};

type AddFieldCielsArgs = {
  page: PDFPage;
  form: PDFForm;
  startPoint: StartPoint;
  dimension: number;
  cellsAmount: number;
  cellsSpacing: number;
  nameBase: string;
};

export const addCellFields = ({
  page,
  form,
  nameBase,
  startPoint,
  dimension,
  cellsAmount,
  cellsSpacing,
}: AddFieldCielsArgs) => {
  let xStartPosition = startPoint.x;
  const cellsNameList = [];

  const cellsSpacingBase = cellsSpacing;

  for (let cellIndex = 0; cellIndex < cellsAmount; cellIndex++) {
    const cell = form.createTextField(getCellName(nameBase, cellIndex));

    cell.addToPage(page, {
      x: xStartPosition,
      y: startPoint.y,
      height: dimension,
      width: dimension,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    xStartPosition = xStartPosition + cellsSpacingBase;
    cellsNameList.push(cell.getName());
  }
};
