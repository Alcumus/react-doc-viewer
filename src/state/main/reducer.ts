import { IDocument, IConfig } from "../../types";
import {
  MainStateActions,
  NEXT_DOCUMENT,
  PREVIOUS_DOCUMENT,
  SetAllDocuments,
  SET_ALL_DOCUMENTS,
  UpdateCurrentDocument,
  UPDATE_CURRENT_DOCUMENT,
  SET_RENDERER_RECT,
  SetRendererRect,
  SET_MAIN_CONFIG,
  SetMainConfig,
} from "./actions";

export type MainState = {
  currentFileNo: number;
  documents: IDocument[];
  currentDocument?: IDocument;
  rendererRect?: DOMRect;
  config?: IConfig;
};

export const initialState: MainState = {
  currentFileNo: 0,
  documents: [],
  currentDocument: undefined,
  rendererRect: undefined,
  config: {},
};

export type MainStateReducer = (
  state: MainState,
  action: MainStateActions
) => MainState;

export const reducer: MainStateReducer = (
  state = initialState,
  action: MainStateActions
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

    case SET_RENDERER_RECT: {
      const { rect } = action as SetRendererRect;
      return {
        ...state,
        rendererRect: rect,
      };
    }

    case SET_MAIN_CONFIG: {
      const { config } = action as SetMainConfig;
      return {
        ...state,
        config,
      };
    }

    default:
      return state;
  }
};
