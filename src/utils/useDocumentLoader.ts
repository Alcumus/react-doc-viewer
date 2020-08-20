import { useContext, useEffect } from "react";
import { setDocumentLoading, updateCurrentDocument } from "../state/actions";
import { MainContext } from "../state";
import { DocRenderer, FileType, IDocument } from "../types";
import useRendererSelector from "./useRendererSelector";

/**
 * Custom Hook for loading the current document into context
 */
const useDocumentLoader = (): {
  currentDocument: IDocument | undefined;
  CurrentRenderer: DocRenderer | undefined;
} => {
  const {
    state: { currentFileNo, currentDocument },
    dispatch,
  } = useContext(MainContext);

  const { CurrentRenderer } = useRendererSelector();

  const documentURI = currentDocument?.uri || "";

  useEffect(
    () => {
      if (!currentDocument) return;

      Promise.resolve().then(async () => {
        const res = await fetch(documentURI);
        const blob = await res.blob();

        const fileReader = new FileReader();
        fileReader.addEventListener("loadend", () => {
          dispatch(
            updateCurrentDocument({
              ...currentDocument,
              base64Data: fileReader.result as string,
              fileType: blob.type as FileType,
            })
          );
          dispatch(setDocumentLoading(false));
        });
        fileReader.readAsDataURL(blob);
      });
    },
    // eslint ignore added, because a warning appears for dispatch to
    // be a dependancy of the useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentFileNo, documentURI]
  );

  return { currentDocument, CurrentRenderer };
};

export default useDocumentLoader;
