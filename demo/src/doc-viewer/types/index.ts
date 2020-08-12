import { FC } from "react";

export type FileType = "pdf" | "png";

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
  filePaths: string[];
  currentPath: string;
};
