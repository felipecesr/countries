import styled from 'styled-components';

export const PageHeaderWrapper = styled.header`
  align-items: center;
  background-color: var(--color-elements);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  color: var(--color-text);
  display: flex;
  justify-content: space-between;
  padding: 2.071em 1.143em;
`;

export const PageHeaderTitle = styled.h1`
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.6;
  margin: 0;
`;
