import events from "alcumus-local-events";
import React, { useContext } from "react";
import styled from "styled-components";
import { MainContext } from "../../state/main/Context";
import { DocRenderer, FileType } from "../../types";

const docTypes: FileType[] = ["image/png"];

const PNGRenderer: DocRenderer = () => {
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

export default PNGRenderer;

PNGRenderer.priority = 1;

events.on("request-document-renderer", (ev, payload, something) => {
  if (docTypes.indexOf(payload.fileType) >= 0) {
    something.push(PNGRenderer);
  }
});

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: linear-gradient(45deg, #80808022 25%, transparent 25%),
    linear-gradient(-45deg, #80808022 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #80808022 75%),
    linear-gradient(-45deg, transparent 75%, #80808022 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
`;

const Img = styled.img`
  width: 50%;
`;
