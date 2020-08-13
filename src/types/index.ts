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
