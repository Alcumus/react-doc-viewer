import events from "alcumus-local-events";
import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../state/main/Context";
import { DocRenderer, FileType } from "../../types";

const docTypes: FileType[] = ["image/jpg", "image/jpeg"];
const JPGRenderer: DocRenderer = () => {
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

JPGRenderer.priority = 1;

events.on("request-document-renderer", (_, payload, something) => {
  if (docTypes.indexOf(payload.fileType) >= 0) {
    something.push(JPGRenderer);
  }
});

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
