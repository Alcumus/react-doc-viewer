import React, { useContext } from "react";
import styled from "styled-components";
import { MainContext } from "../../state/Context";
import { DocRenderer } from "../../types";
import linkRenderResponder from "../../utils/linkRenderResponder";

const JPGRenderer: DocRenderer = () => {
  const {
    state: { currentDocument },
  } = useContext(MainContext);

  if (!currentDocument) return null;

  return (
    <Container>
      <Img src={currentDocument.base64Data} />
    </Container>
  );
};

export default JPGRenderer;

JPGRenderer.fileTypes = ["image/jpg", "image/jpeg"];
JPGRenderer.priority = 1;
linkRenderResponder(JPGRenderer);

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #fff;
`;

const Img = styled.img`
  width: 50%;
`;
