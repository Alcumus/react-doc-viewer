import React, { FC } from "react";
import styled from "styled-components";
import ProxyRenderer from "./components/ProxyRenderer";
import HeaderBar from "./components/HeaderBar";
import { AppProvider } from "./state/Context";
import { DocViewerConfig } from "./types";

export interface DocViewerProps {
  filePaths: string[];
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
