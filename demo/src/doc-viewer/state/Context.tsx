import { DocViewerProps } from "doc-viewer/DocViewer";
import { State } from "doc-viewer/types";
import React, {
  createContext,
  Dispatch,
  FC,
  useEffect,
  useReducer,
} from "react";
import { DocumentActions, SET_CONFIG, SET_FILE_PATHS } from "./actions";
import { initialState, reducer } from "./reducer";

const AppContext = createContext<{
  state: State;
  dispatch: Dispatch<DocumentActions>;
}>({ state: initialState, dispatch: () => null });

const AppProvider: FC<DocViewerProps> = ({ children, filePaths, config }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // On inital load, and whenever they change,
  // replace config and filepaths with th eprops passed in
  useEffect(() => {
    dispatch({ type: SET_CONFIG, config });
    dispatch({ type: SET_FILE_PATHS, filePaths });
  }, [config, filePaths]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
