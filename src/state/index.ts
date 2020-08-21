import { MutableSnapshot } from "recoil";
import { DocViewerProps } from "..";
import { IConfig, IDocument } from "../types";
import MainAtoms from "./atoms";

export type IMainState = {
  currentFileNo: number;
  documents: IDocument[];
  documentLoading: boolean;
  currentDocument?: IDocument;
  rendererRect?: DOMRect;
  config: IConfig;
};

export const initialMainState: IMainState = {
  currentFileNo: 0,
  documents: [],
  documentLoading: true,
  currentDocument: undefined,
  rendererRect: undefined,
  config: {},
};

export const initializeRecoilRoot = (
  props: DocViewerProps
): ((mutableSnapshot: MutableSnapshot) => void) => {
  return ({ set }) => {
    set(MainAtoms.documentsState, props.documents);
    set(MainAtoms.privateCurrentDocumentState, props.documents[0]);
    set(MainAtoms.configState, props.config || initialMainState.config);
  };
};
