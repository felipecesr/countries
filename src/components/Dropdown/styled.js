import styled from 'styled-components';
import { AngleDown } from 'styled-icons/fa-solid';

export const DropdownWrapper = styled.div`
  position: relative;
  width: 200px;
`;

export const DropdownButton = styled.button`
  position: relative;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--color-text);
  background-color: var(--color-elements);
  border: none;
  border-radius: 5px;
  padding: 1.2em 2em;
  width: 100%;
  text-align: left;
`;

export const DropdownButtonIcon = styled(AngleDown)`
  position: absolute;
  top: calc(50% - 6px);
  right: 16px;
  width: 12px;
  height: 12px;
`;

export const DropdownMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: var(--color-elements);
  border-radius: 5px;
  list-style: none;
  padding: 0.7143em 0;
  position: absolute;
  margin: 0;
  width: 100%;
`;

export const DropdownMenuItem = styled.li`
  color: var(--color-text);
  display: block;
  padding: 0.4286em 1.714em;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: black;
  }
`;
