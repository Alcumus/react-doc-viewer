import { DocViewerConfig, State } from "doc-viewer/types";
import {
  DocumentActions,
  NEXT_DOCUMENT,
  PREVIOUS_DOCUMENT,
  SetAllDocuments,
  SetConfig,
  SetPDFPaginated,
  SET_ALL_DOCUMENTS,
  SET_CONFIG,
  SET_PDF_PAGINATED,
} from "./actions";

const initialConfig: DocViewerConfig = {
  pdf: { paginated: false },
};

export const initialState: State = {
  config: initialConfig,
  currentFileNo: 0,
  documents: [],
  currentDocument: null,
};

export const reducer = (
  state = initialState,
  action: DocumentActions
): State => {
  switch (action.type) {
    case SET_CONFIG: {
      const { config } = action as SetConfig;
      return { ...state, config: config || initialConfig };
    }

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
