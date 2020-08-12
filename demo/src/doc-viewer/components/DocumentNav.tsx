import { NEXT_DOCUMENT, PREVIOUS_DOCUMENT } from "doc-viewer/state/actions";
import { AppContext } from "doc-viewer/state/Context";
import React, { FC, useContext } from "react";
import styled from "styled-components";

const DocumentNav: FC<{}> = (): JSX.Element => {
  const {
    state: { currentFileNo, filePaths, currentPath },
    dispatch,
  } = useContext(AppContext);

  if (!filePaths.length) return null;

  let fileName = currentPath;

  const splitURL = fileName.split("/");
  if (splitURL.length) {
    fileName = splitURL[splitURL.length - 1];
  }

  return (
    <Container>
      <span>
        Document {currentFileNo + 1} of {filePaths.length}
      </span>

      <Button
        onClick={() => dispatch({ type: PREVIOUS_DOCUMENT })}
        disabled={currentFileNo === 0}
      >
        {"<"}
      </Button>

      <button
        onClick={() => dispatch({ type: NEXT_DOCUMENT })}
        disabled={currentFileNo >= filePaths.length - 1}
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
