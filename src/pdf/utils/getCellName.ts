import { underscore } from "../../constants/separators";

export const getCellName = (
  nameBase: string,
  cellIndex: number,
  isSingleCell = false
) => (isSingleCell ? nameBase : `${nameBase}${underscore}${cellIndex}`);
