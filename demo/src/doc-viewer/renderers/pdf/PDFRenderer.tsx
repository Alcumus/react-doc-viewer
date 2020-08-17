// @ts-ignore
import events from "alcumus-local-events";
import * as pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import React from "react";
import { pdfjs } from "react-pdf";
import styled from "styled-components";
import { PDFProvider } from "../../state/pdf/Context";
import { DocRenderer, FileType } from "../../types";
import PDFControls from "./PDFControls";
import PDFPages from "./PDFPages";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const docTypes: FileType[] = ["application/pdf"];

const PDFRenderer: DocRenderer = () => {
  return (
    <PDFProvider>
      <Container>
        <PDFControls />
        <PDFPages />
      </Container>
    </PDFProvider>
  );
};

PDFRenderer.priority = 1;

events.on("request-document-renderer", (ev, payload, something) => {
  if (docTypes.indexOf(payload.fileType) >= 0) {
    something.push(PDFRenderer);
  }
});

export default PDFRenderer;

const Container = styled.div`
  flex: 1;
  background-color: #eee;
  overflow: auto;
`;
