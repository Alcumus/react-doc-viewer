import { FC } from "react";

export type FileType =
  | "application/pdf"
  | "image/png"
  | "image/jpg"
  | "image/jpeg";

export interface IDocument {
  uri: string;
  fileType?: FileType;
  base64Data?: string;
}

export type DocLoader = FC<{}>;

export interface DocViewerConfig {
  pdf?: PDFConfig;
}

export interface PDFConfig {
  paginated?: boolean;
}

export type MainState = {
  config: DocViewerConfig;
  currentFileNo: number;
  documents: IDocument[];
  currentDocument?: IDocument;
};
