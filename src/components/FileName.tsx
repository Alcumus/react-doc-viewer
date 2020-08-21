import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import MainAtoms from "../state/atoms";
import { IStyledProps } from "../types";

const FileName: FC<{}> = () => {
  const config = useRecoilValue(MainAtoms.configState);
  const currentDocument = useRecoilValue(MainAtoms.currentDocumentState);

  if (!currentDocument || config?.header?.disableFileName) return null;

  let fileName = currentDocument.uri;
  const splitURL = fileName.split("/");
  if (splitURL.length) {
    fileName = splitURL[splitURL.length - 1];
  }

  return <Container id="file-name">{fileName}</Container>;
};

export default FileName;

const Container = styled.div`
  flex: 1;
  text-align: left;
  color: ${(props: IStyledProps) => props.theme.text_primary};
  font-weight: bold;
  margin: 0 10px;
  overflow: hidden;
`;
