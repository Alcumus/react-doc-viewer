import React, { FC, useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import MainAtoms from "../state/atoms";
import useDocumentLoader from "../utils/useDocumentLoader";
import useWindowSize from "../utils/useWindowSize";

const ProxyRenderer: FC<{}> = () => {
  const { CurrentRenderer } = useDocumentLoader();

  const setRendererRect = useSetRecoilState(MainAtoms.rendererRectState);
  const currentDocument = useRecoilValue(MainAtoms.currentDocumentState);
  const documentLoading = useRecoilValue(MainAtoms.documentLoadingState);

  const size = useWindowSize();

  const containerRef = useCallback(
    (node) => {
      node && setRendererRect(node?.getBoundingClientRect());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [size]
  );

  const Contents = () => {
    if (documentLoading) {
      return <div id="loading-renderer">{/*Loading*/}</div>;
    } else {
      if (CurrentRenderer) {
        return <CurrentRenderer />;
      } else {
        return (
          <div id="no-renderer">
            No Renderer for file type {currentDocument?.fileType}
          </div>
        );
      }
    }
  };

  return (
    <Container id="proxy-renderer" ref={containerRef}>
      <Contents />
    </Container>
  );
};

export default ProxyRenderer;

const Container = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`;
