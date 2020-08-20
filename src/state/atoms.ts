import { atom, selector } from "recoil";
import { IConfig, IDocument } from "../types";

export const currentFileNoState = atom<number>({
  key: "currentFileNoState",
  default: 0,
});

export const documentsState = atom<IDocument[]>({
  key: "documentsState",
  default: [],
});

export const documentLoadingState = atom<boolean>({
  key: "documentLoadingState",
  default: true,
});

export const privateCurrentDocumentState = atom<IDocument | undefined>({
  key: "privateCurrentDocumentState",
  default: undefined,
});
export const currentDocumentState = selector<IDocument | undefined>({
  key: "currentDocumentState",
  get: ({ get }) => get(privateCurrentDocumentState),
  set: ({ get, set }, newValue) => {
    set(privateCurrentDocumentState, newValue);
    set(documentLoadingState, false);
  },
});

export const rendererRectState = atom<DOMRect | undefined>({
  key: "rendererRectState",
  default: undefined,
});

export const configState = atom<IConfig>({
  key: "configState",
  default: {},
});
