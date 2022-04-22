import styled from "styled-components";

export const Term = styled.dt`
  display: inline-block;
  font-weight: bold;
  margin: 0;

  &::after {
    content: ":";
  }
`;

export const Definition = styled.dl`
  display: inline-block;
  margin: 0;
  margin-left: 0.5em;
`;
