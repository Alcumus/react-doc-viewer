import { AppContext } from "doc-viewer/state/Context";
import React, { FC, useContext, useEffect, useState } from "react";
import styled from "styled-components";

const PNGRenderer: FC<{}> = () => {
  const {
    state: { currentPath },
  } = useContext(AppContext);

  return (
    <Container>
      <img src={currentPath} />
    </Container>
  );
};

export default PNGRenderer;

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #eee;
  padding-bottom: 30px;
`;
