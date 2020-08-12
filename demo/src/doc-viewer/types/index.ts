import { FC } from "react";

export type FileExt = "pdf" | "png";
export interface IDocument {
  uri: string;
  fileType?: FileExt;
}

export type DocLoader = FC<{}>;

export interface DocViewerConfig {
  pdf?: PDFConfig;
}

export interface PDFConfig {
  paginated?: boolean;
}

export type State = {
  config: DocViewerConfig;
  currentFileNo: number;
  documents: IDocument[];
  currentDocument?: IDocument;
};
