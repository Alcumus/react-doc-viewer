import { useContext, useEffect, useState } from "react";
import { updateCurrentDocument } from "../state/main/actions";
import { AppContext } from "../state/main/Context";
import { FileType, IDocument, DocRenderer } from "../types";

/**
 * Custom Hook for loading the current document into context
 */
export const useDocumentLoader = (): {
  currentDocument: IDocument | undefined;
  CurrentRenderer: DocRenderer | undefined;
} => {
  const {
    state: { currentDocument, CurrentRenderer },
    dispatch,
  } = useContext(AppContext);

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

// Hook
export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};
