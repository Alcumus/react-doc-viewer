import React, { CSSProperties } from "react";
import styled, { ThemeProvider } from "styled-components";
import HeaderBar from "./components/HeaderBar";
import "./plugins";
import ProxyRenderer from "./ProxyRenderer";
import { AppProvider } from "./state/main/Context";
import { defaultTheme } from "./theme";
import { IConfig, IDocument, ITheme } from "./types";

export interface DocViewerProps {
  documents: IDocument[];
  className?: string;
  style?: CSSProperties;
  config?: IConfig;
  theme?: ITheme;
}

// const DocViewer: FC<DocViewerProps> = (props) => {
const DocViewer = (props: DocViewerProps) => {
  return (
    <AppProvider {...props}>
      <ThemeProvider
        theme={props.theme ? { ...defaultTheme, ...props.theme } : defaultTheme}
      >
        <Container {...props}>
          <HeaderBar />
          <ProxyRenderer />
        </Container>
      </ThemeProvider>
    </AppProvider>
  );
};

export default DocViewer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #eee;
  width: 700px;
  height: 700px;
`;
