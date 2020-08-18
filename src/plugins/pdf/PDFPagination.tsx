import {
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useContext } from "react";
import styled from "styled-components";
import { setCurrentPage } from "../../state/pdf/actions";
import { PDFContext } from "../../state/pdf/Context";
import { IStyledProps } from "../../types";

const PDFPagination: FC<{}> = () => {
  const {
    state: { currentPage, numPages },
    dispatch,
  } = useContext(PDFContext);

  return (
    <>
      <PageNavButtonLeft
        onClick={() => dispatch(setCurrentPage(currentPage - 1))}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon icon={faStepBackward} />
      </PageNavButtonLeft>
      <PageNavButtonRight
        onClick={() => dispatch(setCurrentPage(currentPage + 1))}
        disabled={currentPage >= numPages}
      >
        <FontAwesomeIcon icon={faStepForward} />
      </PageNavButtonRight>
    </>
  );
};

export default PDFPagination;

const PageNavButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  font-size: 14px;
  background-color: ${(props: IStyledProps) => props.theme.primary};
  color: ${(props: IStyledProps) => props.theme.text_primary};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  text-align: center;
  box-shadow: 2px 2px 3px #00000033;
  border: 0;
  outline: none;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 11px;
  }
`;
const PageNavButtonLeft = styled(PageNavButton)`
  margin-left: 5px;
`;
const PageNavButtonRight = styled(PageNavButton)`
  margin: 0 20px 0 5px;
`;
