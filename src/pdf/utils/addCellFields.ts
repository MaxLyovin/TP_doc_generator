import { PDFPage, PDFForm, TextAlignment } from "pdf-lib";
import { getCellName } from "./getCellName";

export type StartPoint = {
  x: number;
  y: number;
};

type AddFieldCielsArgs = {
  page: PDFPage;
  form: PDFForm;
  startPoint: StartPoint;
  dimension: number;
  cellsAmount?: number;
  cellsSpacing: number;
  nameBase: string;
  indexShift?: number;
  cellsCorrection?: {
    each: number;
    correction: number;
  };
};

export const addCellFields = ({
  page,
  form,
  nameBase,
  startPoint,
  dimension,
  cellsAmount = 1,
  indexShift = 0,
  cellsSpacing,
  cellsCorrection,
}: AddFieldCielsArgs) => {
  let xStartPosition = startPoint.x;
  const cellsNameList = [];
  const isSingleCell = cellsAmount === 1;

  let cellsSpacingBase = cellsSpacing;

  for (
    let cellIndex = indexShift;
    cellIndex < cellsAmount + indexShift;
    cellIndex++
  ) {
    const cell = form.createTextField(
      getCellName(nameBase, cellIndex, isSingleCell)
    );
    cell.setAlignment(TextAlignment.Center);

    cell.addToPage(page, {
      x: xStartPosition,
      y: startPoint.y,
      height: dimension,
      width: dimension,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    if (
      cellsCorrection &&
      cellIndex !== 0 &&
      cellIndex % cellsCorrection.each === 0
    ) {
      cellsSpacingBase = cellsSpacingBase + cellsCorrection.correction;
    }

    xStartPosition = xStartPosition + cellsSpacingBase;
    cellsNameList.push(cell.getName());
  }

  return { xEnd: xStartPosition };
};
