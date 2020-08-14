import React, { FC } from "react";
import { useDocumentLoader } from "../utils";
import PDFRenderer from "./pdf/PDFRenderer";
import PNGRenderer from "./png/PNGRenderer";
import JPGRenderer from "./jpg/JPGRenderer";

const ProxyRenderer: FC<{}> = () => {
  const { currentDocument, CurrentRenderer } = useDocumentLoader();

  // if (!CurrentRenderer) return null;
  // return <CurrentRenderer />;

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
