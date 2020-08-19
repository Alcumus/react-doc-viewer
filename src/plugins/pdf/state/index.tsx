import React, { createContext, Dispatch, FC, useReducer } from "react";
import { PDFActions } from "./actions";
import { initialPDFState, PDFState, PDFStateReducer, reducer } from "./reducer";

const PDFContext = createContext<{
  state: PDFState;
  dispatch: Dispatch<PDFActions>;
}>({ state: initialPDFState, dispatch: () => null });

const PDFProvider: FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer<PDFStateReducer>(
    reducer,
    initialPDFState
  );

  return (
    <PDFContext.Provider value={{ state, dispatch }}>
      {children}
    </PDFContext.Provider>
  );
};

export { PDFContext, PDFProvider };
