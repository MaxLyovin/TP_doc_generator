const separator = "_";

export const getCellName = (nameBase: string, cellIndex: number) =>
  `${nameBase}${separator}${cellIndex}`;
