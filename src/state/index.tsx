import { MutableSnapshot } from "recoil";
import { DocViewerProps } from "..";
import { IConfig, IDocument } from "../types";
import {
  configState,
  privateCurrentDocumentState,
  documentsState,
} from "./atoms";

export type MainState = {
  currentFileNo: number;
  documents: IDocument[];
  documentLoading?: boolean;
  currentDocument?: IDocument;
  rendererRect?: DOMRect;
  config?: IConfig;
};

export const initializeRecoilRoot = (
  props: DocViewerProps
): ((mutableSnapshot: MutableSnapshot) => void) => {
  return ({ set }) => {
    set(documentsState, props.documents);
    set(privateCurrentDocumentState, props.documents[0]);
    set(configState, props.config || {});
  };
};
