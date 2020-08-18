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

const MainContext = createContext<{
  state: MainState;
  dispatch: Dispatch<DocumentActions>;
}>({ state: initialState, dispatch: () => null });

const AppProvider: FC<DocViewerProps> = (props) => {
  const { children, documents, config } = props;

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    documents: documents || [],
    currentDocument: documents && documents.length ? documents[0] : null,
    config,
  });

  // On inital load, and whenever they change,
  // replace documents with the new props passed in
  useEffect(() => {
    dispatch(setAllDocuments(documents));
  }, [documents]);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, AppProvider };
