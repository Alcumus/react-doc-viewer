import { RendererProps } from "doc-viewer/doc-viewer";
import * as pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import React, { FC, useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const PDFLoader: FC<RendererProps> = (props) => {
  const { filePath, fileType } = props;

  const [numPages, setNumPages] = useState<number>(null);
  const [pageNum, setPageNum] = useState<number>(1);

  useEffect(() => {
    setNumPages(null);
    setPageNum(1);
  }, [filePath]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // const onPrevPressed = () => {
  //   setPageNum(pageNum - 1);
  // };

  // const onNextPressed = () => {
  //   if (pageNum >= numPages) return;
  //   setPageNum(pageNum + 1);
  // };

  const PagesArray = [];
  for (let i = 0; i < numPages; i++) {
    PagesArray.push(
      <div key={i + 1}>
        <div style={{ padding: 10, color: "#888" }}>Page {i + 1}</div>
        <Page pageNumber={i + 1} />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#eee",
        paddingTop: 30,
      }}
    >
      {/* <div style={{ display: "flex", flexDirection: "row" }}>
        <p>
          PDF Page {pageNum} of {numPages}
        </p>
        <button onClick={onPrevPressed} disabled={pageNum === 1}>
          {"<"}
        </button>
        <button onClick={onNextPressed} disabled={pageNum >= numPages}>
          {">"}
        </button>
      </div> */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Document
          file={filePath}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<span>Loading PDF…</span>}
        >
          {/* <Page pageNumber={pageNum} /> */}
          {PagesArray}
        </Document>
      </div>
    </div>
  );
};

export default PDFLoader;
