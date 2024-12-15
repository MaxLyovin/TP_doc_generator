const separator = "_";

export const getCellName = (
  nameBase: string,
  cellIndex: number,
  isSingleCell = false
) => (isSingleCell ? nameBase : `${nameBase}${separator}${cellIndex}`);
