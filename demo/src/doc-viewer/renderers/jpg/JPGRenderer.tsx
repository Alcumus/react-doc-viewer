import React, { FC, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../state/main/Context";

const JPGRenderer: FC<{}> = () => {
  const {
    state: { currentDocument },
  } = useContext(AppContext);

  if (!currentDocument) return null;

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
