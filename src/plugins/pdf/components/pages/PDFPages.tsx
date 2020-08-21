import React, { FC, useEffect } from "react";
import { Document } from "react-pdf";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import MainAtoms from "../../../../state/atoms";
import PDFAtoms from "../../state/atoms";
import { PDFAllPages } from "./PDFAllPages";
import PDFSinglePage from "./PDFSinglePage";

const PDFPages: FC<{}> = () => {
  const currentDocument = useRecoilValue(MainAtoms.currentDocumentState);
  const setNumPages = useSetRecoilState(PDFAtoms.numPages);
  const resetNumPages = useResetRecoilState(PDFAtoms.numPages);
  const resetCurrentPage = useResetRecoilState(PDFAtoms.currentPage);
  const paginated = useRecoilValue(PDFAtoms.paginated);

  useEffect(() => {
    resetNumPages();
    resetCurrentPage();
  }, [currentDocument, resetCurrentPage, resetNumPages]);

  if (!currentDocument || currentDocument.base64Data === undefined) return null;

  return (
    <DocumentPDF
      file={currentDocument.base64Data}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      loading={<span>Loading...</span>}
    >
      {paginated ? <PDFSinglePage /> : <PDFAllPages />}
    </DocumentPDF>
  );
};

const DocumentPDF = styled(Document)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default PDFPages;
