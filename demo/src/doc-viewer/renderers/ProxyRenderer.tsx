import React, { FC, useCallback, useContext } from "react";
import styled from "styled-components";
import { setRendererRect } from "../state/main/actions";
import { MainContext } from "../state/main/Context";
import useDocumentLoader from "../utils/useDocumentLoader";
import useWindowSize from "../utils/useWindowSize";

const ProxyRenderer: FC<{}> = () => {
  const { CurrentRenderer } = useDocumentLoader();
  const size = useWindowSize();

  const { dispatch } = useContext(MainContext);

  const containerRef = useCallback(
    (node) => node && dispatch(setRendererRect(node?.getBoundingClientRect())),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [size, dispatch]
  );

  if (!CurrentRenderer) return null;
  return (
    <Container ref={containerRef}>
      <CurrentRenderer />
    </Container>
  );
};

export default ProxyRenderer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
