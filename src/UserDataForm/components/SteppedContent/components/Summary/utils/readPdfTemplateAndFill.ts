import fontkit from '@pdf-lib/fontkit';
import download from 'downloadjs';
import { PDFDocument } from 'pdf-lib';

import pdfBase from '@/assets/pdf/templates/wniosekZC_template.pdf';
import fontBase from '@/assets/fonts/Ubuntu-R.ttf';
import { UserData } from '@/@types/userData';

import { prepareCellsData } from './prepareCellsData';
import { transformUserDataForApplicationForm } from './transformUserDataForApplicationForm';

export const readPdfTemplateAndFill = async (userData: UserData) => {
  const pdfBaseBytes = await fetch(pdfBase).then((res) => res.arrayBuffer());
  const ubuntuFontBytes = await fetch(fontBase).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(pdfBaseBytes);
  pdfDoc.registerFontkit(fontkit);
  const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes);

  const form = pdfDoc.getForm();

  const cellsData = prepareCellsData({
    data: transformUserDataForApplicationForm(userData),
    withBracketsWrapper: false,
    shouldTransformToShort: false,
  });

  cellsData.forEach(([cellId, value]) => {
    try {
      const cell = form.getTextField(cellId);
      cell.setText(value.toUpperCase());
      cell.updateAppearances(ubuntuFont);
    } catch (error) {
      console.log(error);
    }
  });

  download(await pdfDoc.save(), 'filledPdf.pdf', 'application/pdf');
};
