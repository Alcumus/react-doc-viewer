import React, { FC, useState } from "react";
import { PDFLoader } from "./loaders";

export type FileType = "pdf" | "png";

export interface DocViewerProps {
  filePaths: string[];

  /**
   * Enter a fileType to force the Viewer to use that type.
   * This can be useful if a url doesn't have the file name at the end.
   */
  fileType?: FileType;
}

const DocViewer: FC<DocViewerProps> = (props) => {
  const { filePaths, fileType } = props;

  const [currentFile, setCurrentFile] = useState<number>(0);

  const onPrevPressed = () => {
    if (currentFile === 0) return;
    setCurrentFile(currentFile - 1);
  };

  const onNextPressed = () => {
    if (currentFile >= filePaths.length - 1) return;
    setCurrentFile(currentFile + 1);
  };

  let FileLoader = LoaderFilePath(filePaths[currentFile]);
  if (fileType) FileLoader = LoaderFileType(fileType);

  return (
    <div style={{}}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // backgroundColor: "#bbb",
          borderBottom: "1px solid #999",
          padding: 10,
        }}
      >
        <p>
          <span>
            Document {currentFile + 1} of {filePaths.length}
          </span>
        </p>
        <button
          onClick={onPrevPressed}
          disabled={currentFile === 0}
          style={{ marginLeft: 20, marginRight: 5 }}
        >
          {"<"}
        </button>
        <button
          onClick={onNextPressed}
          disabled={currentFile >= filePaths.length - 1}
        >
          {">"}
        </button>
        <FileName filePath={filePaths[currentFile]} />
      </div>

      <FileLoader filePath={filePaths[currentFile]} />
    </div>
  );
};

//
//
//
//
//
//

const FileName: FC<{ filePath: string }> = (props): JSX.Element => {
  let fileName = "";

  const splitURL = props.filePath.split("/");
  if (splitURL.length) {
    fileName = splitURL[splitURL.length - 1];
  }

  return (
    <span style={{ flex: 1, textAlign: "right", color: "#888" }}>
      {fileName}
    </span>
  );
};

//
//
//
//
//
//

export interface RendererProps {
  filePath: string;

  /**
   * Enter a fileType to force the Viewer to use that type.
   * This can be useful if a url doesn't have the file name at the end.
   */
  fileType?: FileType;
}

//
//
//
//
//

const LoaderFilePath = (filePath: string): FC<RendererProps> => {
  let FileLoader = null;

  // Try to assertain fileType from url string
  const splitURL = filePath.split(".");
  if (splitURL.length) {
    const _fileType = splitURL[splitURL.length - 1];
    if (_fileType === "pdf") {
      FileLoader = PDFLoader;
    }
  }

  return FileLoader;
};

const LoaderFileType = (fileType: FileType): FC<RendererProps> => {
  let FileLoader = null;

  if (fileType === "pdf") FileLoader = PDFLoader;
  else if (fileType === "png") FileLoader = PDFLoader;
  else FileLoader = PDFLoader;

  return FileLoader;
};

export default DocViewer;
