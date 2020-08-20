import { selector } from "recoil";
import {
  currentFileNoState,
  documentLoadingState,
  documentsState,
  privateCurrentDocumentState,
} from "./atoms";

export const setNextDocument = selector<void>({
  key: "setNextDocument",
  get: () => {},
  set: ({ get, set }) => {
    const nextDocumentNo = get(currentFileNoState) + 1;
    set(currentFileNoState, nextDocumentNo);
    set(privateCurrentDocumentState, get(documentsState)[nextDocumentNo]);
    set(documentLoadingState, true);
  },
});

export const setPreviousDocument = selector<void>({
  key: "setPreviousDocument",
  get: ({ get }) => {},
  set: ({ get, set }) => {
    const prevDocumentNo = get(currentFileNoState) - 1;
    set(currentFileNoState, prevDocumentNo);
    set(privateCurrentDocumentState, get(documentsState)[prevDocumentNo]);
    set(documentLoadingState, true);
  },
});
