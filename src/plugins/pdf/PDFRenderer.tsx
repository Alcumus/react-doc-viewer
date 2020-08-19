// @ts-ignore
import * as pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import React from "react";
import { pdfjs } from "react-pdf";
import { DocRenderer } from "../../types";
import linkRenderResponder from "../../utils/linkRenderResponder";
import PDFControls from "./components/PDFControls";
import PDFPages from "./components/PDFPages";
import { PDFProvider } from "./state/Context";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const PDFRenderer: DocRenderer = () => {
  return (
    <PDFProvider>
      <PDFControls />
      <PDFPages />
    </PDFProvider>
  );
};

export default PDFRenderer;

PDFRenderer.fileTypes = ["application/pdf"];
PDFRenderer.priority = 1;
linkRenderResponder(PDFRenderer);
