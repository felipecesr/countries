import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 0.875rem;
  margin-bottom: 5px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Term = styled.dt`
  display: inline-block;
  font-weight: 600;
  margin: 0;

  &::after {
    content: ":";
  }
`;

export const Definition = styled.dl`
  display: inline-block;
  margin: 0;
  margin-left: 0.25em;
`;
