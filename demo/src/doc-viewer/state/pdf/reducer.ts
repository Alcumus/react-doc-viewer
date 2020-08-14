import {
  PDFActions,
  SetCurrentPage,
  SetNumPages,
  SetPDFPaginated,
  SetZoomLevel,
  SET_CURRENT_PAGE,
  SET_NUM_PAGES,
  SET_PDF_PAGINATED,
  SET_ZOOM_LEVEL,
} from "./actions";

export type PDFState = {
  minZoom: number;
  maxZoom: number;
  zoomLevel: number;
  paginated: boolean;
  numPages: number;
  currentPage: number;
};

export const initialPDFState: PDFState = {
  minZoom: 0.2,
  maxZoom: 2,
  zoomLevel: 1,
  paginated: false,
  numPages: 0,
  currentPage: 1,
};

export const reducer = (
  state = initialPDFState,
  action: PDFActions
): PDFState => {
  switch (action.type) {
    case SET_ZOOM_LEVEL: {
      const { value } = action as SetZoomLevel;

      const newZoom =
        (value >= state.maxZoom && state.maxZoom) ||
        (value <= state.minZoom && state.minZoom) ||
        value;

      return { ...state, zoomLevel: newZoom };
    }

    case SET_PDF_PAGINATED: {
      const { value } = action as SetPDFPaginated;
      return { ...state, paginated: value };
    }

    case SET_NUM_PAGES: {
      const { value } = action as SetNumPages;
      return { ...state, numPages: value };
    }

    case SET_CURRENT_PAGE: {
      const { value } = action as SetCurrentPage;
      return { ...state, currentPage: value };
    }

    default:
      return state;
  }
};
