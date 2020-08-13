import PDFRenderer from "doc-viewer/renderers/pdf/PDFRenderer";
import PNGRenderer from "doc-viewer/renderers/png/PNGRenderer";
import { useDocumentLoader } from "doc-viewer/utils";
import React, { FC } from "react";
import JPGRenderer from "./jpg/JPGRenderer";

const ProxyRenderer: FC<{}> = () => {
  const { currentDocument } = useDocumentLoader();

  switch (currentDocument?.fileType) {
    case "application/pdf":
      return <PDFRenderer />;
    case "image/png":
      return <PNGRenderer />;
    case "image/jpg":
    case "image/jpeg":
      return <JPGRenderer />;
    default:
      return null;
  }
};

export default ProxyRenderer;
