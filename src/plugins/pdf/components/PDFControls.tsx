import {
  faArrowsAltH,
  faArrowsAltV,
  faExpand,
  faFileDownload,
  faSearchMinus,
  faSearchPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useContext } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Button from "../../../components/common/Button";
import { currentDocumentState } from "../../../state/atoms";
import { IStyledProps } from "../../../types";
import { PDFContext } from "../state";
import { setPDFPaginated, setZoomLevel } from "../state/actions";
import { initialPDFState } from "../state/reducer";
import PDFPagination from "./PDFPagination";

const PDFControls: FC<{}> = () => {
  const {
    state: { paginated, zoomLevel, numPages },
    dispatch,
  } = useContext(PDFContext);

  const currentDocument = useRecoilValue(currentDocumentState);

  return (
    <Container>
      {paginated && numPages > 1 && <PDFPagination />}

      {currentDocument?.base64Data && (
        <Button
          href={currentDocument?.base64Data}
          download={currentDocument?.uri}
        >
          <FontAwesomeIcon icon={faFileDownload} />
        </Button>
      )}

      <Button onMouseDown={() => dispatch(setZoomLevel(zoomLevel - 0.1))}>
        <FontAwesomeIcon icon={faSearchMinus} />
      </Button>

      <Button onMouseDown={() => dispatch(setZoomLevel(zoomLevel + 0.1))}>
        <FontAwesomeIcon icon={faSearchPlus} />
      </Button>

      <Button
        onMouseDown={() => dispatch(setZoomLevel(initialPDFState.zoomLevel))}
        disabled={zoomLevel === initialPDFState.zoomLevel}
      >
        <FontAwesomeIcon icon={faExpand} />
      </Button>

      {numPages > 1 && (
        <Button onMouseDown={() => dispatch(setPDFPaginated(!paginated))}>
          <FontAwesomeIcon icon={paginated ? faArrowsAltV : faArrowsAltH} />
        </Button>
      )}
    </Container>
  );
};

export default PDFControls;

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: flex-end;
  padding: 8px;
  background-color: ${(props: IStyledProps) => props.theme.tertiary};
  box-shadow: 0px 2px 3px #00000033;

  @media (max-width: 768px) {
    padding: 6px;
  }
`;
