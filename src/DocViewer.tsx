import React, { FC } from "react";
import styled from "styled-components";
import HeaderBar from "./components/HeaderBar";
import ProxyRenderer from "./renderers/ProxyRenderer";
import { AppProvider } from "./state/Context";
import { DocViewerConfig, IDocument } from "./types";

export interface DocViewerProps {
  documents: IDocument[];
  config?: DocViewerConfig;
}
const DocViewer: FC<DocViewerProps> = (props) => {
  return (
    <Container>
      <AppProvider {...props}>
        <HeaderBar />
        <ProxyRenderer />
      </AppProvider>
    </Container>
  );
};

export default DocViewer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
