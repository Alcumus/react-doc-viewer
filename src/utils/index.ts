import { useContext, useEffect } from "react";
import { updateCurrentDocument } from "../state/actions";
import { AppContext } from "../state/Context";
import { FileType, IDocument } from "../types";

/**
 * Custom Hook for loading the current document into context
 */
export const useDocumentLoader = (): {
  currentDocument: IDocument | undefined;
} => {
  const {
    state: { currentDocument },
    dispatch,
  } = useContext(AppContext);

  const documentURI = currentDocument?.uri || "";

  useEffect(() => {
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
  }, [documentURI]);

  return { currentDocument };
};
