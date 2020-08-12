import { DocViewerConfig, IDocument } from "doc-viewer/types";

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

// SET_DOCUMENTS
export const SET_ALL_DOCUMENTS: string = "SET_ALL_DOCUMENTS";
export interface SetAllDocuments {
  type: typeof SET_ALL_DOCUMENTS;
  documents: IDocument[];
}
export const setAllDocuments = (documents: IDocument[]): SetAllDocuments => ({
  type: SET_ALL_DOCUMENTS,
  documents,
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
  | SetAllDocuments
  | SetPDFPaginated;
