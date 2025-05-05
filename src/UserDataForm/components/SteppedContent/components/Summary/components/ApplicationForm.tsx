import { useEffect, useRef, useState } from 'react';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import { UserData } from '@/@types/userData';
import { readPdfTemplateAndFill } from '../utils/readPdfTemplateAndFill';
import { DocumentViewer } from '@/components/DocumentViewer/DocumentViewer';
import { getDocumentName } from '../utils/getDocumentName';

type ApplicationFormProps = {
  userData: UserData;
};

export const ApplicationForm = ({ userData }: ApplicationFormProps) => {
  const pdfRef = useRef<Blob | undefined>();
  const [isApplicaitonFormLoading, setIsApplicaitonFormLoading] = useState(false);

  const prepareApplicaitonForm = async () => {
    setIsApplicaitonFormLoading(true);
    const pdf = await readPdfTemplateAndFill(userData);

    pdfRef.current = pdf;
    setIsApplicaitonFormLoading(false);
  };

  useEffect(() => {
    prepareApplicaitonForm();
  }, []);

  if (isApplicaitonFormLoading) {
    return <div>Loading...</div>;
  }

  return <DocumentViewer file={pdfRef.current} fileName={getDocumentName(userData.name, userData.surname)} />;
};
