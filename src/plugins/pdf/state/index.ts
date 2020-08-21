export interface IPDFState {
  zoomLevel: number;
  paginated: boolean;
  numPages: number;
  currentPage: number;
}

export const initialPDFState: IPDFState = {
  zoomLevel: 1,
  paginated: true,
  numPages: 0,
  currentPage: 1,
};
