import { PDFPage, PDFForm } from "pdf-lib";

import { StartPoint , addCellFields } from "./addCellFields";


type DateFieldsBaseNames = {
  year: string;
  month: string;
  day: string;
};

type DrawDateFieldsProps = {
  page: PDFPage;
  form: PDFForm;
  startPoint: StartPoint;
  dateFieldsBaseNames: DateFieldsBaseNames;
  dimension?: number;
  cellsSpacing?: number;
  dateCorrection?: number;
};

export const drawDateFields = ({
  page,
  form,
  startPoint,
  dateFieldsBaseNames = {
    year: "year",
    month: "month",
    day: "day",
  },
  dimension = 14,
  cellsSpacing = 18,
  dateCorrection,
}: DrawDateFieldsProps) => {
  const yearsCellsAmount = 4;
  const monthCellsAmount = 2;
  const dayCellsAmount = 2;

  const yearStartPoint = startPoint;

  const { xEnd: xYearEnd } = addCellFields({
    page,
    form,
    cellsAmount: yearsCellsAmount,
    cellsSpacing,
    dimension,
    nameBase: dateFieldsBaseNames.year,
    startPoint: yearStartPoint,
  });

  const monthStartPoint = {
    y: startPoint.y,
    x: xYearEnd + cellsSpacing - (dateCorrection || 0),
  };

  const { xEnd: xMonthEnd } = addCellFields({
    page,
    form,
    cellsAmount: monthCellsAmount,
    cellsSpacing,
    dimension: dimension,
    nameBase: dateFieldsBaseNames.month,
    startPoint: monthStartPoint,
  });

  const dayStartPoint = {
    y: startPoint.y,
    x: xMonthEnd + cellsSpacing - (dateCorrection || 0),
  };

  addCellFields({
    page,
    form,
    cellsAmount: dayCellsAmount,
    cellsSpacing,
    dimension: dimension,
    nameBase: dateFieldsBaseNames.day,
    startPoint: dayStartPoint,
  });
};
