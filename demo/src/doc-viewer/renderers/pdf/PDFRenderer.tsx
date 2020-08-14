// @ts-ignore
import * as pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import React, { FC, useEffect, useContext } from "react";
import { pdfjs } from "react-pdf";
import styled from "styled-components";
import { PDFProvider } from "../../state/pdf/Context";
import PDFControls from "./PDFControls";
import PDFPages from "./PDFPages";
import { AppContext } from "../../state/main/Context";
import { setCurrentRenderer } from "../../state/main/actions";
import { FileType } from "../../types";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const PDFRenderer: FC<{}> = () => {
  const docTypes: FileType[] = ["application/pdf"];

  // const {
  //   state: { currentDocument },
  //   dispatch,
  // } = useContext(AppContext);

  // useEffect(() => {
  //   if (!currentDocument) return;
  //   if (currentDocument.fileType === undefined) return;

  //   if (docTypes.indexOf(currentDocument?.fileType) >= 0) {
  //     dispatch(setCurrentRenderer(PDFRenderer));
  //   }
  // }, [currentDocument]);

  return (
    <PDFProvider>
      <Container>
        <PDFControls />
        <PDFPages />
      </Container>
    </PDFProvider>
  );
};

export default PDFRenderer;

const Container = styled.div`
  background-color: #eee;
  padding-bottom: 30px;
  overflow: scroll;
`;
