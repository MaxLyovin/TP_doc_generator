export const dataMapFullToShort = {
  surname: "A.S",
  name: "A.N",
  familyName: "A.SF",
};

export const dataMapShortToFull = {
  "A.S": "surname",
  "A.N": "name",
  "A.SF": "familyName",
};

export const dataMap = Object.assign(dataMapFullToShort, dataMapShortToFull);

export const transformData = (data: Partial<typeof dataMap>) =>
  Object.fromEntries(
    Object.entries(data).map(([key, value]) => [dataMap[key] || key, value])
  );

export const dataMapWithMeta = {
  surname: { shortName: "A.S", cellsAmount: 20 },
  name: { shortName: "A.N", cellsAmount: 20 },
  familyName: { shortName: "A.SF", cellsAmount: 20 },
} as const;

export const docxCells = Object.values(dataMapWithMeta).reduce(
  (acc: string[], { cellsAmount, shortName }) => {
    const cells: string[] = [];
    for (let index = 0; index <= cellsAmount; index++) {
      cells.push(`${shortName}_${index}`);
    }
    return [...acc, ...cells];
  },
  []
);
