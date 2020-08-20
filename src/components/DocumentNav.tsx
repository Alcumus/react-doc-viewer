import React, { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  currentDocumentState,
  currentFileNoState,
  documentsState,
} from "../state/atoms";
import { setNextDocument, setPreviousDocument } from "../state/selectors";
import { IStyledProps } from "../types";

const DocumentNav: FC<{}> = () => {
  const [, nextDocument] = useRecoilState(setNextDocument);
  const [, previousDocument] = useRecoilState(setPreviousDocument);
  const currentFileNo = useRecoilValue(currentFileNoState);
  const documents = useRecoilValue(documentsState);
  const currentDocument = useRecoilValue(currentDocumentState);

  if (documents.length <= 1 || !currentDocument) return null;

  let fileName = currentDocument.uri;

  const splitURL = fileName.split("/");
  if (splitURL.length) {
    fileName = splitURL[splitURL.length - 1];
  }

  return (
    <Container>
      <p>
        Doc {currentFileNo + 1} of {documents.length}
      </p>

      <ButtonPrev
        onClick={() => previousDocument()}
        disabled={currentFileNo === 0}
      >
        {"<"}
      </ButtonPrev>

      <ButtonNext
        onClick={() => nextDocument()}
        disabled={currentFileNo >= documents.length - 1}
      >
        {">"}
      </ButtonNext>
    </Container>
  );
};

export default DocumentNav;

const Container = styled.div`
  min-width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 0 10px;
  color: ${(props: IStyledProps) => props.theme.text_primary};
`;

const Button = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 40px;
  background-color: ${(props: IStyledProps) => props.theme.secondary};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  color: ${(props: IStyledProps) => props.theme.text_secondary};
  text-align: center;
  box-shadow: 2px 2px 3px #00000033;
  border: 0;
  outline: none;
`;
const ButtonPrev = styled(Button)`
  margin: 0 5px 0 10px;
`;
const ButtonNext = styled(Button)`
  margin: 0 5px;
`;
