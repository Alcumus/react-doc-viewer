import { DocViewerConfig, State } from "doc-viewer/types";
import {
  DocumentActions,
  NEXT_DOCUMENT,
  PREVIOUS_DOCUMENT,
  SetConfig,
  SetDocument,
  SetFilePaths,
  SET_CONFIG,
  SET_DOCUMENT,
  SET_FILE_PATHS,
  SET_PDF_PAGINATED,
  SetPDFPaginated,
} from "./actions";

const initialConfig: DocViewerConfig = {
  pdf: { paginated: false },
};

export const initialState: State = {
  config: initialConfig,
  currentFileNo: 0,
  filePaths: [],
  currentPath: "",
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

    case NEXT_DOCUMENT: {
      const nextFile = state.currentFileNo + 1;
      return {
        ...state,
        currentFileNo: nextFile,
        currentPath: state.filePaths[nextFile],
      };
    }

    case PREVIOUS_DOCUMENT: {
      const prevFile = state.currentFileNo - 1;
      return {
        ...state,
        currentFileNo: state.currentFileNo - 1,
        currentPath: state.filePaths[prevFile],
      };
    }

    case SET_DOCUMENT: {
      const { value } = action as SetDocument;
      return {
        ...state,
        currentFileNo: value,
        currentPath: state.filePaths[value],
      };
    }

    case SET_FILE_PATHS: {
      const { filePaths } = action as SetFilePaths;
      return { ...state, filePaths, currentPath: filePaths[0] || "" };
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
