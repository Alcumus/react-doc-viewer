import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { ButtonSecondary } from "./common/Button";

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
    <Container id="doc-nav">
      <p id="doc-nav-info">
        Doc {currentFileNo + 1} of {documents.length}
      </p>

      <ButtonPrev
        id="doc-nav-prev"
        onClick={() => previousDocument()}
        disabled={currentFileNo === 0}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </ButtonPrev>

      <ButtonNext
        id="doc-nav-next"
        onClick={() => nextDocument()}
        disabled={currentFileNo >= documents.length - 1}
      >
        <FontAwesomeIcon icon={faArrowRight} />
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

const ButtonPrev = styled(ButtonSecondary)`
  width: 30px;
  height: 30px;
  margin: 0 5px 0 10px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
const ButtonNext = styled(ButtonPrev)`
  margin: 0 5px;
`;
