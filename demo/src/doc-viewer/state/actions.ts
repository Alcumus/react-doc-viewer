import { DocViewerConfig } from "doc-viewer/types";

export const SET_CONFIG: string = "SET_CONFIG";
export interface SetConfig {
  type: typeof SET_CONFIG;
  config: DocViewerConfig;
}
export const setConfig = (config: DocViewerConfig): SetConfig => ({
  type: SET_CONFIG,
  config,
});

// NEXT_DOCUMENT
export const NEXT_DOCUMENT: string = "NEXT_DOCUMENT";
export interface NextDocument {
  type: typeof NEXT_DOCUMENT;
}
export const nextDocument = (): NextDocument => ({ type: NEXT_DOCUMENT });

// PREVIOUS_DOCUMENT
export const PREVIOUS_DOCUMENT: string = "PREVIOUS_DOCUMENT";
export interface PreviousDocument {
  type: typeof PREVIOUS_DOCUMENT;
}
export const previousDocument = (): PreviousDocument => ({
  type: PREVIOUS_DOCUMENT,
});

// SET_DOCUMENT
export const SET_DOCUMENT: string = "SET_DOCUMENT";
export interface SetDocument {
  type: typeof SET_DOCUMENT;
  value: number;
}
export const setDocument = (value: number): SetDocument => ({
  type: SET_DOCUMENT,
  value,
});

// SET_FILE_PATHS
export const SET_FILE_PATHS: string = "SET_FILE_PATHS";
export interface SetFilePaths {
  type: typeof SET_FILE_PATHS;
  filePaths: string[];
}
export const setFilePaths = (filePaths: string[]): SetFilePaths => ({
  type: SET_FILE_PATHS,
  filePaths,
});

// SET_PAGINATED
export const SET_PDF_PAGINATED: string = "SET_PDF_PAGINATED";
export interface SetPDFPaginated {
  type: typeof SET_PDF_PAGINATED;
  value: boolean;
}
export const setPDFPaginated = (value: boolean): SetPDFPaginated => ({
  type: SET_PDF_PAGINATED,
  value,
});

export type DocumentActions =
  | SetConfig
  | NextDocument
  | PreviousDocument
  | SetDocument
  | SetFilePaths
  | SetPDFPaginated;
