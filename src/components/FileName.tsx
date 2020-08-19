import React, { FC, useContext } from "react";
import styled from "styled-components";
import { MainContext } from "../state/context";
import { IStyledProps } from "../types";

const FileName: FC<{}> = () => {
  const {
    state: { currentDocument, config },
  } = useContext(MainContext);

  if (!currentDocument || config?.header?.disableFileName) return null;

  let fileName = currentDocument.uri;
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
  color: ${(props: IStyledProps) => props.theme.text_primary};
  font-weight: bold;
  margin: 0 10px;
`;
