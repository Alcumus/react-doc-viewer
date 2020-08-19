import React, { FC, useContext, useEffect } from "react";
import { Document, Page } from "react-pdf";
import styled from "styled-components";
import { MainContext } from "../../../state/Context";
import { IStyledProps } from "../../../types";
import { setNumPages } from "../state/actions";
import { PDFContext } from "../state/Context";

const PDFPages: FC<{}> = () => {
  const {
    state: { currentDocument },
  } = useContext(MainContext);

  const {
    state: { paginated },
    dispatch,
  } = useContext(PDFContext);

  useEffect(() => {
    dispatch(setNumPages(0));
  }, [currentDocument, dispatch]);

  if (!currentDocument || currentDocument.base64Data === undefined) return null;

  return (
    <DocumentPDF
      file={currentDocument.base64Data}
      onLoadSuccess={({ numPages }) => dispatch(setNumPages(numPages))}
      loading={<span>Loading...</span>}
    >
      {paginated ? <SinglePage /> : <AllPages />}
    </DocumentPDF>
  );
};

const DocumentPDF = styled(Document)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default PDFPages;

interface PDFPageProps {
  pageNum?: number;
}

export const SinglePage: FC<PDFPageProps> = (props) => {
  const { pageNum } = props;

  const {
    state: { rendererRect },
  } = useContext(MainContext);
  const {
    state: { zoomLevel, numPages, currentPage },
  } = useContext(PDFContext);

  const _pageNum = pageNum || currentPage;

  return (
    <PageWrapper last={_pageNum >= numPages}>
      <PageTag>
        Page {_pageNum}/{numPages}
      </PageTag>
      <Page
        pageNumber={_pageNum || currentPage}
        scale={zoomLevel}
        height={(rendererRect?.height || 100) - 100}
        width={(rendererRect?.width || 100) - 100}
      />
    </PageWrapper>
  );
};

export const AllPages: FC<PDFPageProps> = (props) => {
  const {
    state: { numPages },
  } = useContext(PDFContext);

  const PagesArray = [];
  for (let i = 0; i < numPages; i++) {
    PagesArray.push(<SinglePage key={i + 1} pageNum={i + 1} />);
  }

  return <>{PagesArray}</>;
};

interface PageWrapperProps {
  last?: boolean;
}
const PageWrapper = styled.div<PageWrapperProps>`
  margin: 20px 0;
`;
const PageTag = styled.div`
  padding: 0 0 10px 10px;
  color: ${(props: IStyledProps) => props.theme.text_tertiary};
  font-size: 14px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
