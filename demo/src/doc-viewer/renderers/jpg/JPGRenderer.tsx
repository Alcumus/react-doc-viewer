import { AppContext } from "doc-viewer/state/Context";
import React, { FC, useContext } from "react";
import styled from "styled-components";

const JPGRenderer: FC<{}> = () => {
  const {
    state: { currentDocument },
  } = useContext(AppContext);

  return (
    <Container>
      <Img src={currentDocument.base64Data} />
    </Container>
  );
};

export default JPGRenderer;

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Img = styled.img`
  width: 50%;
`;
