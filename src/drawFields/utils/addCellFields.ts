import { PDFPage, PDFForm } from "pdf-lib";

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

  for (let cellIndex = 0; cellIndex < cellsAmount; cellIndex++) {
    const cell = form.createTextField(`${nameBase}_${cellIndex}`);

    cell.addToPage(page, {
      x: xStartPosition,
      y: startPoint.y,
      height: dimension,
      width: dimension,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    xStartPosition = xStartPosition + cellsSpacing;
  }
};
