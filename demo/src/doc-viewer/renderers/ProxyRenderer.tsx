import PDFRenderer from "doc-viewer/renderers/pdf/PDFRenderer";
import { AppContext } from "doc-viewer/state/Context";
import React, { FC, useContext } from "react";
import { DocLoader } from "doc-viewer/types";
import PNGRenderer from "doc-viewer/renderers/png/PNGRenderer";

const ProxyRenderer: FC<{}> = () => {
  const {
    state: { filePaths, currentPath },
  } = useContext(AppContext);

  if (!filePaths.length) return null;

  let FileLoader: DocLoader = null;

  const splitURL = currentPath.split(".");
  if (splitURL.length) {
    const _fileType = splitURL[splitURL.length - 1];
    if (_fileType === "pdf") {
      FileLoader = PDFRenderer;
    } else {
      FileLoader = PNGRenderer;
    }
  }

  return <FileLoader />;
};

export default ProxyRenderer;
