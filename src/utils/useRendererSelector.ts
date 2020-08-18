import events from "alcumus-local-events";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../state/main/Context";
import { DocRenderer } from "../types";

/**
 * Custom Hook for loading the current document into context
 */
const useRendererSelector = (): {
  CurrentRenderer: DocRenderer;
} => {
  const {
    state: { currentDocument },
  } = useContext(MainContext);

  const [CurrentRenderer, setCurrentRenderer] = useState<DocRenderer>(null);

  useEffect(() => {
    Promise.resolve().then(async () => {
      const respondingRenderers = [];

      // Emit async event, to populate respondingRenderers array
      await events.emitAsync(
        "request-document-renderer",
        currentDocument,
        respondingRenderers
      );

      // Arbitrary sorting of priorities for demo purposes
      const [SelectedRenderer] = respondingRenderers.sort(
        (a, b) => a.priority - b.priority
      );

      if (SelectedRenderer && SelectedRenderer !== undefined) {
        setCurrentRenderer(() => SelectedRenderer);
      } else {
        setCurrentRenderer(null);
      }
    });
  }, [currentDocument]);

  return { CurrentRenderer };
};

export default useRendererSelector;
