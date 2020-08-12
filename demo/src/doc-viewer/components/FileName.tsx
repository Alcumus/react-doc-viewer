import { AppContext } from "doc-viewer/state/Context";
import React, { FC, useContext } from "react";
import styled from "styled-components";

const FileName: FC<{}> = (): JSX.Element => {
  const {
    state: { filePaths, currentPath },
  } = useContext(AppContext);

  if (!filePaths.length) return null;

  let fileName = currentPath;

  const splitURL = fileName.split("/");
  if (splitURL.length) {
    fileName = splitURL[splitURL.length - 1];
  }

  return <Container>{fileName}</Container>;
};

export default FileName;

const Container = styled.div`
  flex: 1;
  text-align: left;
  color: #444;
  font-weight: bold;
  margin: 0 10px;
`;
