import React, { FC } from "react";
import { Page } from "react-pdf";
import styled from "styled-components";

export const SinglePage: FC<{ pageNum: number }> = (props) => {
  const { pageNum } = props;
  return (
    <PageWrapper>
      <PageTag>Page {pageNum}</PageTag>
      <Page pageNumber={pageNum} />
    </PageWrapper>
  );
};

export const AllPages: FC<{ numPages: number }> = (props) => {
  const { numPages } = props;
  const PagesArray = [];
  for (let i = 0; i < numPages; i++) {
    PagesArray.push(<SinglePage key={i + 1} pageNum={i + 1} />);
  }

  return <>{PagesArray}</>;
};

const PageWrapper = styled.div`
  margin-top: 30px;
`;
const PageTag = styled.div`
  padding: 0 0 10px 10px;
  color: #888;
`;
