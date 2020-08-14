import {
  faArrowsAltH,
  faArrowsAltV,
  faSearchMinus,
  faSearchPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useContext } from "react";
import styled from "styled-components";
import { setPDFPaginated } from "../../state/actions";
import { AppContext } from "../../state/Context";

const PDFControls: FC<{}> = () => {
  const {
    state: { config },
    dispatch,
  } = useContext(AppContext);

  return (
    <Container>
      <IconButton
        onMouseDown={() => dispatch(setPDFPaginated(!config.pdf?.paginated))}
      >
        <FontAwesomeIcon icon={faSearchMinus} />
      </IconButton>

      <IconButton
        onMouseDown={() => dispatch(setPDFPaginated(!config.pdf?.paginated))}
      >
        <FontAwesomeIcon icon={faSearchPlus} />
      </IconButton>

      <IconButton
        onMouseDown={() => dispatch(setPDFPaginated(!config.pdf?.paginated))}
      >
        <FontAwesomeIcon
          icon={config.pdf?.paginated ? faArrowsAltV : faArrowsAltH}
        />
      </IconButton>
    </Container>
  );
};

export default PDFControls;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const IconButton = styled.button`
  /* position: fixed;
  bottom: 20px;
  right: 20px; */
  width: 40px;
  height: 40px;
  border-radius: 40px;
  font-size: 18px;
  margin-top: 10px;
  background-color: #555;
  color: #fff;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  border: 0;
  outline: none;
`;
