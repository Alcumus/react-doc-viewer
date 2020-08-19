import events from "alcumus-local-events";
// @ts-ignore
import * as pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import React from "react";
import { pdfjs } from "react-pdf";
import { DocRenderer, FileType } from "../../types";
import PDFControls from "./components/PDFControls";
import PDFPages from "./components/PDFPages";
import { PDFProvider } from "./state/Context";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const docTypes: FileType[] = ["application/pdf"];

const PDFRenderer: DocRenderer = () => {
  return (
    <PDFProvider>
      <PDFControls />
      <PDFPages />
    </PDFProvider>
  );
};

PDFRenderer.priority = 1;

events.on(
  "request-document-renderer",
  (_ev: any, payload: { fileType: FileType }, something: DocRenderer[]) => {
    if (docTypes.indexOf(payload.fileType) >= 0) {
      something.push(PDFRenderer);
    }
  }
);

export default PDFRenderer;
