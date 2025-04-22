import { UserData } from '@/@types/userData';
import { dash } from '@/constants/separators';
import { getCellName } from '@/pdf/utils/getCellName';
import { dataMapWithMeta } from '@/utils/transformData';

type DataWithValuesTransformedToString = Record<keyof UserData, string>;
type DataWithExtractedData<Data> = Omit<Data, 'familyMemebers' | 'attachmentsList'>;

type DataForCellsPreparation = Partial<DataWithExtractedData<DataWithValuesTransformedToString>>;

type PrepareCellsDataOption = {
  data: DataForCellsPreparation;
  withBracketsWrapper?: boolean;
  shouldTransformToShort?: boolean;
};

export const prepareCellsData = ({
  data,
  withBracketsWrapper = true,
  shouldTransformToShort = true,
}: PrepareCellsDataOption) => {
  const cellsData: [string, string][] = [];

  for (const [nameBase, value] of Object.entries(data)) {
    const docFieldMeta = dataMapWithMeta[nameBase as keyof typeof dataMapWithMeta];

    if (docFieldMeta === undefined) {
      continue;
    }

    if (docFieldMeta.type === 'date') {
      const [dateNameBase] = nameBase.split('Date');

      const [year, month, date] = value.split(dash);
      const dateParts = [
        { value: year, partBaseName: `${dateNameBase}Year` },
        { value: month, partBaseName: `${dateNameBase}Month` },
        { value: date, partBaseName: `${dateNameBase}Day` },
      ];

      dateParts.forEach(({ partBaseName, value }) => {
        const splitedValue = value.toString().split('');

        for (let index = 0; index < splitedValue.length; index++) {
          const cellName = getCellName(partBaseName, index);

          cellsData.push([withBracketsWrapper ? `{${cellName}}` : cellName, (splitedValue[index] ?? '').toUpperCase()]);
        }
      });

      continue;
    }

    if (docFieldMeta.cellsAmount === 1) {
      cellsData.push([nameBase, value]);
      continue;
    }

    const splitedValue = value.split('');

    for (let index = docFieldMeta.type === 'select' ? 1 : 0; index < docFieldMeta.cellsAmount; index++) {
      const cellName = getCellName(shouldTransformToShort ? docFieldMeta.shortName : nameBase, index);

      if (docFieldMeta.type === 'select') {
        const cellFromSelectValue = index === Number(value) ? 'X' : '';
        cellsData.push([withBracketsWrapper ? `{${cellName}}` : cellName, cellFromSelectValue.toUpperCase()]);
        continue;
      }
      cellsData.push([withBracketsWrapper ? `{${cellName}}` : cellName, (splitedValue[index] ?? '').toUpperCase()]);
    }
  }

  return cellsData;
};
