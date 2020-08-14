import { useContext, useEffect } from "react";
import { updateCurrentDocument } from "../state/main/actions";
import { AppContext } from "../state/main/Context";
import { DocRenderer, FileType, IDocument } from "../types";
import useRendererSelector from "./useRendererSelector";

/**
 * Custom Hook for loading the current document into context
 */
const useDocumentLoader = (): {
  currentDocument: IDocument | undefined;
  CurrentRenderer: DocRenderer;
} => {
  const {
    state: { currentDocument },
    dispatch,
  } = useContext(AppContext);

  const { CurrentRenderer } = useRendererSelector();

  const documentURI = currentDocument?.uri || "";

  useEffect(
    () => {
      if (!currentDocument) return;

      Promise.resolve().then(async () => {
        const res = await fetch(currentDocument.uri);
        const blob = await res.blob();

        var reader = new FileReader();
        reader.onloadend = () => {
          dispatch(
            updateCurrentDocument({
              ...currentDocument,
              base64Data: reader.result as string,
              fileType: blob.type as FileType,
            })
          );
        };
        reader.readAsDataURL(blob);
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
