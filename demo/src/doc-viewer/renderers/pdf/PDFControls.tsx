import {
  faArrowsAltH,
  faArrowsAltV,
  faSearchMinus,
  faSearchPlus,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useContext } from "react";
import styled from "styled-components";
import { setPDFPaginated, setZoomLevel } from "../../state/pdf/actions";
import { PDFContext } from "../../state/pdf/Context";
import { initialPDFState } from "../../state/pdf/reducer";

const PDFControls: FC<{}> = () => {
  const {
    state: { paginated, zoomLevel, minZoom, maxZoom },
    dispatch,
  } = useContext(PDFContext);

  return (
    <Container>
      <IconButton
        onMouseDown={() => dispatch(setZoomLevel(zoomLevel - 0.1))}
        disabled={zoomLevel <= minZoom}
      >
        <FontAwesomeIcon icon={faSearchMinus} />
      </IconButton>

      <IconButton
        onMouseDown={() => dispatch(setZoomLevel(zoomLevel + 0.1))}
        disabled={zoomLevel >= maxZoom}
      >
        <FontAwesomeIcon icon={faSearchPlus} />
      </IconButton>

      <IconButton
        onMouseDown={() => dispatch(setZoomLevel(initialPDFState.zoomLevel))}
        disabled={zoomLevel === initialPDFState.zoomLevel}
      >
        <FontAwesomeIcon icon={faExpand} />
      </IconButton>

      <IconButton onMouseDown={() => dispatch(setPDFPaginated(!paginated))}>
        <FontAwesomeIcon icon={paginated ? faArrowsAltV : faArrowsAltH} />
      </IconButton>
    </Container>
  );
};

export default PDFControls;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  bottom: 20px;
  right: 20px;

  @media (max-width: 768px) {
    bottom: 12px;
    right: 12px;
  }
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  font-size: 18px;
  margin-top: 10px;
  background-color: #5296d8;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  color: #fff;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  border: 0;
  outline: none;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
    margin-top: 7px;
  }
`;
