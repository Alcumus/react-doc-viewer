import { AppContext } from "doc-viewer/state/Context";
import React, { FC, useContext, useEffect, useState } from "react";
import styled from "styled-components";

const PNGRenderer: FC<{}> = () => {
  const {
    state: { currentPath },
  } = useContext(AppContext);

  return (
    <Container>
      <Img src={currentPath} />
    </Container>
  );
};

export default PNGRenderer;

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  /* background-color: #eee; */
  background-image: linear-gradient(45deg, #808080 25%, transparent 25%),
    linear-gradient(-45deg, #808080 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #808080 75%),
    linear-gradient(-45deg, transparent 75%, #808080 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
`;

const Img = styled.img`
  width: 50%;
`;
