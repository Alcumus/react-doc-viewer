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
  /* position: sticky;
  top: 0; */
  z-index: 1;
  padding: 20px 10px;
  background-color: #5296d8;
  font-size: 18px;
  height: 50px;

  @media (max-width: 768px) {
    height: 30px;
    padding: 5px;
    font-size: 10px;
  }
`;
