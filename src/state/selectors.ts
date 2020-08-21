import { selector } from "recoil";
import MainAtoms from "./atoms";

export default class MainSelectors {
  static setNextDocument = selector<void>({
    key: "setNextDocument",
    get: () => {},
    set: ({ get, set }) => {
      const nextDocumentNo = get(MainAtoms.currentFileNoState) + 1;
      set(MainAtoms.currentFileNoState, nextDocumentNo);
      set(
        MainAtoms.privateCurrentDocumentState,
        get(MainAtoms.documentsState)[nextDocumentNo]
      );
      set(MainAtoms.documentLoadingState, true);
    },
  });

  static setPreviousDocument = selector<void>({
    key: "setPreviousDocument",
    get: ({ get }) => {},
    set: ({ get, set }) => {
      const prevDocumentNo = get(MainAtoms.currentFileNoState) - 1;
      set(MainAtoms.currentFileNoState, prevDocumentNo);
      set(
        MainAtoms.privateCurrentDocumentState,
        get(MainAtoms.documentsState)[prevDocumentNo]
      );
      set(MainAtoms.documentLoadingState, true);
    },
  });
}
