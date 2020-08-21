import { atom, selector } from "recoil";
import { initialMainState } from ".";
import { IConfig, IDocument } from "../types";

export default class MainAtoms {
  static currentFileNoState = atom<number>({
    key: "currentFileNoState",
    default: initialMainState.currentFileNo,
  });

  static documentsState = atom<IDocument[]>({
    key: "documentsState",
    default: initialMainState.documents,
  });

  static documentLoadingState = atom<boolean>({
    key: "documentLoadingState",
    default: initialMainState.documentLoading,
  });

  static privateCurrentDocumentState = atom<IDocument | undefined>({
    key: "privateCurrentDocumentState",
    default: initialMainState.currentDocument,
  });
  static currentDocumentState = selector<IDocument | undefined>({
    key: "currentDocumentState",
    get: ({ get }) => get(MainAtoms.privateCurrentDocumentState),
    set: ({ get, set }, newValue) => {
      set(MainAtoms.privateCurrentDocumentState, newValue);
      set(MainAtoms.documentLoadingState, false);
    },
  });

  static rendererRectState = atom<DOMRect | undefined>({
    key: "rendererRectState",
    default: initialMainState.rendererRect,
  });

  static configState = atom<IConfig>({
    key: "configState",
    default: initialMainState.config,
  });
}
