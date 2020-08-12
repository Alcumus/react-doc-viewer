import { nextDocument, previousDocument } from "doc-viewer/state/actions";
import { AppContext } from "doc-viewer/state/Context";
import React, { FC, useContext } from "react";
import styled from "styled-components";

const DocumentNav: FC<{}> = (): JSX.Element => {
  const {
    state: { currentFileNo, documents, currentDocument },
    dispatch,
  } = useContext(AppContext);

  if (!documents.length) return null;

  let fileName = currentDocument.uri;

  const splitURL = fileName.split("/");
  if (splitURL.length) {
    fileName = splitURL[splitURL.length - 1];
  }

  return (
    <Container>
      <span>
        Document {currentFileNo + 1} of {documents.length}
      </span>

      <Button
        onClick={() => dispatch(previousDocument())}
        disabled={currentFileNo === 0}
      >
        {"<"}
      </Button>

      <button
        onClick={() => dispatch(nextDocument())}
        disabled={currentFileNo >= documents.length - 1}
      >
        {">"}
      </button>
    </Container>
  );
};

export default DocumentNav;

const Container = styled.div`
  flex-direction: row;
  margin: 0 10px;
  color: #444;
`;

const Button = styled.button`
  margin: 0 10px 0 20px;
`;
