import { DocViewerProps } from "doc-viewer/DocViewer";
import { State } from "doc-viewer/types";
import React, {
  createContext,
  Dispatch,
  FC,
  useEffect,
  useReducer,
} from "react";
import { DocumentActions, setAllDocuments, setConfig } from "./actions";
import { initialState, reducer } from "./reducer";

const AppContext = createContext<{
  state: State;
  dispatch: Dispatch<DocumentActions>;
}>({ state: initialState, dispatch: () => null });

const AppProvider: FC<DocViewerProps> = ({ children, documents, config }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // On inital load, and whenever they change,
  // replace config and documents with th eprops passed in
  useEffect(() => {
    dispatch(setConfig(config));
    dispatch(setAllDocuments(documents));
  }, [config, documents]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
