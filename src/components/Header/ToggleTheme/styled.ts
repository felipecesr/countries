import styled from "styled-components";

export const ButtonThemeWrapper = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: var(--toggle-theme-color);
  cursor: pointer;
  display: inline-flex;
  font-size: 0.9rem;
  font-weight: 600;
  gap: 8px;
  padding: 0;
`;

export const ButtonThemeIcon = styled.svg`
  --icon-size: 12px;
  height: var(--icon-size);
  width: var(--icon-size);
`;
