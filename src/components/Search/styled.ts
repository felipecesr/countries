import styled from "styled-components";
import { Search } from "styled-icons/fa-solid";

export const SearchWrapper = styled.div`
  position: relative;
  color: var(--color-text);
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  top: calc(50% - 8px);
  left: 2.5em;
  height: 16px;
  width: 16px;
`;

export const SearchInput = styled.input`
  background-color: var(--color-elements);
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  color: currentColor;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.4;
  padding: 1.2em 2.286em 1.2em 6em;
  width: 100%;

  &::placeholder {
    color: var(--color-text);
  }
`;
