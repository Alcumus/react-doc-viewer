import React, { FC, useContext, useEffect } from "react";
import { Document, Page } from "react-pdf";
import styled from "styled-components";
import { MainContext } from "../../state/main/Context";
import { setCurrentPage, setNumPages } from "../../state/pdf/actions";
import { PDFContext } from "../../state/pdf/Context";

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
  align-items: center;
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
    state: { paginated, zoomLevel, numPages, currentPage },
    dispatch,
  } = useContext(PDFContext);

  return (
    <PageWrapper>
      {paginated && numPages > 1 && (
        <>
          <PageNavButtonLeft
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            disabled={currentPage === 1}
          >
            {"<"}
          </PageNavButtonLeft>

          <PageNavButtonRight
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            disabled={currentPage >= numPages}
          >
            {">"}
          </PageNavButtonRight>
        </>
      )}

      <PageTag>
        Page {pageNum || currentPage}/{numPages}
      </PageTag>
      <Page
        pageNumber={pageNum || currentPage}
        scale={zoomLevel}
        height={rendererRect?.height - 100}
        width={rendererRect?.width - 50}
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

const PageWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 80px;
`;
const PageTag = styled.div`
  padding: 0 0 10px 10px;
  color: #888;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const PageNavButton = styled.button`
  position: fixed;
  z-index: 1;
  top: 50%;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  font-size: 18px;
  margin-top: 10px;
  background-color: #bbb;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  color: #fff;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  border: 0;
  outline: none;
`;
const PageNavButtonRight = styled(PageNavButton)`
  right: 20px;
`;
const PageNavButtonLeft = styled(PageNavButton)`
  left: 20px;
`;
