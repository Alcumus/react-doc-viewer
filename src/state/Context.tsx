import React, {
  createContext,
  Dispatch,
  FC,
  useEffect,
  useReducer,
} from "react";
import { DocViewerProps } from "../DocViewer";
import { MainState } from "../types";
import { DocumentActions, setAllDocuments } from "./actions";
import { initialConfig, initialState, reducer } from "./reducer";

const AppContext = createContext<{
  state: MainState;
  dispatch: Dispatch<DocumentActions>;
}>({ state: initialState, dispatch: () => null });

const AppProvider: FC<DocViewerProps> = ({ children, documents, config }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    config: config || initialConfig,
  });

  // On inital load, and whenever they change,
  // replace documents with the new props passed in
  useEffect(() => {
    dispatch(setAllDocuments(documents));
  }, [documents]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
