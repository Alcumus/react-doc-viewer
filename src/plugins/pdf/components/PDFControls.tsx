import {
  faArrowsAltH,
  faArrowsAltV,
  faExpand,
  faSearchMinus,
  faSearchPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useContext } from "react";
import styled from "styled-components";
import { IStyledProps } from "../../../types";
import { setPDFPaginated, setZoomLevel } from "../state/actions";
import { PDFContext } from "../state";
import { initialPDFState } from "../state/reducer";
import PDFPagination from "./PDFPagination";

const PDFControls: FC<{}> = () => {
  const {
    state: { paginated, zoomLevel, numPages },
    dispatch,
  } = useContext(PDFContext);

  return (
    <Container>
      {paginated && numPages > 1 && <PDFPagination />}

      <IconButton onMouseDown={() => dispatch(setZoomLevel(zoomLevel - 0.1))}>
        <FontAwesomeIcon icon={faSearchMinus} />
      </IconButton>

      <IconButton onMouseDown={() => dispatch(setZoomLevel(zoomLevel + 0.1))}>
        <FontAwesomeIcon icon={faSearchPlus} />
      </IconButton>

      <IconButton
        onMouseDown={() => dispatch(setZoomLevel(initialPDFState.zoomLevel))}
        disabled={zoomLevel === initialPDFState.zoomLevel}
      >
        <FontAwesomeIcon icon={faExpand} />
      </IconButton>

      {numPages > 1 && (
        <IconButton onMouseDown={() => dispatch(setPDFPaginated(!paginated))}>
          <FontAwesomeIcon icon={paginated ? faArrowsAltV : faArrowsAltH} />
        </IconButton>
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

const IconButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  font-size: 18px;
  margin-left: 5px;
  background-color: ${(props: IStyledProps) => props.theme.primary};
  color: ${(props: IStyledProps) => props.theme.text_primary};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  text-align: center;
  box-shadow: 2px 2px 3px #00000033;
  border: 0;
  outline: none;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`;
