import styled from "styled-components";

export const PanelWrapper = styled.li`
  background-color: var(--color-elements);
  border-radius: 5px;
  font-size: 1.143rem;
  overflow: hidden;
`;

export const Flag = styled.img`
  display: block;
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const PanelContent = styled.div`
  padding: 25px 24px 44px;
  background-color: var(--color-elements);
  color: var(--color-text);
`;

export const List = styled.dl`
  padding-top: 16px;
`;
