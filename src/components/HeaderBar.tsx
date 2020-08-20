import React, { FC } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { configState } from "../state/atoms";
import { IStyledProps } from "../types";
import DocumentNav from "./DocumentNav";
import FileName from "./FileName";

const HeaderBar: FC<{}> = () => {
  const [config] = useRecoilState(configState);

  if (config?.header?.disableHeader) return null;

  return (
    <Container>
      <FileName />
      <DocumentNav />
    </Container>
  );
};

export default HeaderBar;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  padding: 0 10px;
  background-color: ${(props: IStyledProps) => props.theme.primary};
  font-size: 16px;
  min-height: 50px;

  @media (max-width: 768px) {
    min-height: 30px;
    padding: 5px;
    font-size: 10px;
  }
`;
