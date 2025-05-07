import { useState } from 'react';
import { Document, Page, Thumbnail } from 'react-pdf';
import download from 'downloadjs';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

type DocumentViewerProps = {
  file: Blob | undefined;
  fileName: string;
  downloadFileName?: string;
};

export const DocumentViewer = ({ file, fileName, downloadFileName }: DocumentViewerProps) => {
  const [numPages, setNumPages] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  };

  const onClickDownload = () => {
    if (!file) {
      return;
    }

    download(file, downloadFileName || fileName, 'application/pdf');
  };

  return (
    <Document file={file} onLoadSuccess={onDocumentLoadSuccess} loading="Loading PDF...">
      <Dialog>
        <Card className="w-fit">
          <CardContent>
            {/* condiser use custom pregenerated thubnail for better flexibility and styles control */}
            <Thumbnail pageNumber={1} width={250} className="pointer-events-none" />
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="w-full flex flex-col gap-4">
              <DialogTrigger asChild>
                <Button variant="secondary" className="w-full">
                  preview
                </Button>
              </DialogTrigger>

              <Button className="w-full" onClick={onClickDownload}>
                download
              </Button>
            </div>
          </CardFooter>
        </Card>

        <DialogContent className="max-w-[800px] max-h-[80vh] overflow-scroll">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
          </DialogHeader>
          <div>
            {Array.from(new Array(numPages), (_el, index) => (
              <div className="w-fit h-auto m-5 p-4 border-2">
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              </div>
            ))}
          </div>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Document>
  );
};
