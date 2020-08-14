// @ts-ignore
import events from "alcumus-local-events";
import * as pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import React from "react";
import { pdfjs } from "react-pdf";
import styled from "styled-components";
import { PDFProvider } from "../../state/pdf/Context";
import { DocRenderer, FileType } from "../../types";
import PDFPages from "./PDFPages";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const docTypes: FileType[] = ["application/pdf"];

const PDFRenderer2: DocRenderer = () => {
  return (
    <PDFProvider>
      <Container>
        <PDFPages />
      </Container>
    </PDFProvider>
  );
};

PDFRenderer2.priority = 2;

events.on("request-document-renderer", (_, payload, something) => {
  if (docTypes.indexOf(payload.fileType) >= 0) {
    something.push(PDFRenderer2);
  }
});

export default PDFRenderer2;

const Container = styled.div`
  background-color: #eee;
  padding-bottom: 30px;
  overflow: scroll;
`;
