import { DocViewerConfig, MainState } from "../types";
import {
  DocumentActions,
  NEXT_DOCUMENT,
  PREVIOUS_DOCUMENT,
  SetAllDocuments,
  SetPDFPaginated,
  SET_ALL_DOCUMENTS,
  SET_PDF_PAGINATED,
  UpdateCurrentDocument,
  UPDATE_CURRENT_DOCUMENT,
} from "./actions";

export const initialConfig: DocViewerConfig = {
  pdf: { paginated: false },
};

export const initialState: MainState = {
  config: initialConfig,
  currentFileNo: 0,
  documents: [],
  currentDocument: undefined,
};

export const reducer = (
  state = initialState,
  action: DocumentActions
): MainState => {
  switch (action.type) {
    case SET_ALL_DOCUMENTS: {
      const { documents } = action as SetAllDocuments;
      return { ...state, documents, currentDocument: documents[0] || null };
    }

    case NEXT_DOCUMENT: {
      const nextDocumentNo = state.currentFileNo + 1;
      return {
        ...state,
        currentFileNo: nextDocumentNo,
        currentDocument: state.documents[nextDocumentNo],
      };
    }

    case PREVIOUS_DOCUMENT: {
      const prevDocumentNo = state.currentFileNo - 1;
      return {
        ...state,
        currentFileNo: state.currentFileNo - 1,
        currentDocument: state.documents[prevDocumentNo],
      };
    }

    case UPDATE_CURRENT_DOCUMENT: {
      const { document } = action as UpdateCurrentDocument;
      return {
        ...state,
        currentDocument: document,
      };
    }

    case SET_PDF_PAGINATED: {
      const { value } = action as SetPDFPaginated;
      return {
        ...state,
        config: {
          ...state.config,
          pdf: { ...state.config.pdf, paginated: value },
        },
      };
    }

    default:
      return state;
  }
};
