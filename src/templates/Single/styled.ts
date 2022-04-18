import styled from "styled-components";
import media from "styled-media-query";
import { spacing } from "styles/tokens";

export const Wrapper = styled.main`
  ${media.greaterThan("medium")`
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* gap: 140px */
    gap: 8.75rem;
    align-items: center;
  `}
`;

export const Image = styled.img`
  margin-top: ${spacing[64]};
`;
