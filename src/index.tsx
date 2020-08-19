import React, { CSSProperties, FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import HeaderBar from "./components/HeaderBar";
import "./plugins";
import ProxyRenderer from "./components/ProxyRenderer";
import { AppProvider } from "./state/Context";
import { defaultTheme } from "./theme";
import { IConfig, IDocument, ITheme } from "./types";

export interface DocViewerProps {
  documents: IDocument[];
  className?: string;
  style?: CSSProperties;
  config?: IConfig;
  theme?: ITheme;
}

const DocViewer: FC<DocViewerProps> = (props) => {
  if (
    !props.documents ||
    props.documents === undefined ||
    !props.documents.length
  ) {
    throw new Error(
      "Please provide an array of documents to DocViewer.\ne.g. <DocViewer documents={[ 'https://mypdf.pdf' ]} />"
    );
  }

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
