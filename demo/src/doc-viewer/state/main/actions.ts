import { IDocument } from "../../types";

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

// UPDATE_CURRENT_DOCUMENT
export const UPDATE_CURRENT_DOCUMENT: string = "UPDATE_CURRENT_DOCUMENT";
export interface UpdateCurrentDocument {
  type: typeof UPDATE_CURRENT_DOCUMENT;
  document: IDocument;
}
export const updateCurrentDocument = (
  document: IDocument
): UpdateCurrentDocument => ({ type: UPDATE_CURRENT_DOCUMENT, document });

export type DocumentActions =
  | SetAllDocuments
  | NextDocument
  | PreviousDocument
  | UpdateCurrentDocument;
