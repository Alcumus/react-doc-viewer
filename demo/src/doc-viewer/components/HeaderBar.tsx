import React, { FC } from "react";
import styled from "styled-components";
import DocumentNav from "./DocumentNav";
import FileName from "./FileName";

const HeaderBar: FC<{}> = () => {
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
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 20px 10px;
  background-color: #ccc;
  border-bottom: 2px solid #999;
`;
