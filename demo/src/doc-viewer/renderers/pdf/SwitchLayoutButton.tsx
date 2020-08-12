import { setPDFPaginated } from "doc-viewer/state/actions";
import { AppContext } from "doc-viewer/state/Context";
import React, { FC, useContext } from "react";
import styled from "styled-components";

const SwitchLayoutButton: FC<{}> = () => {
  const {
    state: { config },
    dispatch,
  } = useContext(AppContext);

  return (
    <Container
      onMouseDown={() => dispatch(setPDFPaginated(!config.pdf?.paginated))}
    >
      {String.fromCharCode(9830)}
    </Container>
  );
};

export default SwitchLayoutButton;

const Container = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #555;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  border: 0;
  outline: none;
  font-size: 30px;
  /* box-shadow: none; */
`;
