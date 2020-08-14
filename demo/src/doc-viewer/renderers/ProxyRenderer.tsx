import React, { FC } from "react";
import useDocumentLoader from "../utils/useDocumentLoader";

const ProxyRenderer: FC<{}> = () => {
  const { CurrentRenderer } = useDocumentLoader();

  if (!CurrentRenderer) return null;
  return <CurrentRenderer />;
};

export default ProxyRenderer;
