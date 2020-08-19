import { useContext, useEffect } from "react";
import { updateCurrentDocument } from "../state/main/actions";
import { MainContext } from "../state/main/Context";
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
    state: { currentDocument },
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
        });
        fileReader.readAsDataURL(blob);
      });
    },
    // eslint ignore added, because a warning appears for dispatch to
    // be a dependancy of the useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [documentURI]
  );

  return { currentDocument, CurrentRenderer };
};

export default useDocumentLoader;
