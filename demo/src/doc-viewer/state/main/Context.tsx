import React, {
  createContext,
  Dispatch,
  FC,
  useEffect,
  useReducer,
} from "react";
import { DocViewerProps } from "../../DocViewer";
import { DocumentActions, setAllDocuments } from "./actions";
import { initialState, MainState, reducer } from "./reducer";

const AppContext = createContext<{
  state: MainState;
  dispatch: Dispatch<DocumentActions>;
}>({ state: initialState, dispatch: () => null });

const AppProvider: FC<DocViewerProps> = ({ children, documents }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    documents,
    currentDocument: documents[0] || null,
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
