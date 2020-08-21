import { atom } from "recoil";
import { initialPDFState } from ".";

export default class PDFAtoms {
  static zoomLevel = atom<number>({
    key: "zoomLevel",
    default: initialPDFState.zoomLevel,
  });

  static paginated = atom<boolean>({
    key: "paginated",
    default: initialPDFState.paginated,
  });

  static numPages = atom<number>({
    key: "numPages",
    default: initialPDFState.numPages,
  });

  static currentPage = atom<number>({
    key: "currentPage",
    default: initialPDFState.currentPage,
  });
}
