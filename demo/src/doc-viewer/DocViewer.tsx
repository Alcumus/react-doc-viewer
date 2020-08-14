import React, { FC } from "react";
import styled from "styled-components";
import HeaderBar from "./components/HeaderBar";
import ProxyRenderer from "./renderers/ProxyRenderer";
import { AppProvider } from "./state/main/Context";
import { IDocument } from "./types";

export interface DocViewerProps {
  documents: IDocument[];
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
