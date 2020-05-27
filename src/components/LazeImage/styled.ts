// @ts-nocheck
import styled from 'styled-components';

export const LazeImageWrapper = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }

  &.loaded:not(.has-error) {
    animation: loaded 300ms ease-in-out;
  }

  &.has-error {
    content: ${({ placeHolder }) => `url(${placeHolder})`};
  }
`;
