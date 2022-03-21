import styled from 'styled-components';
import media from 'styled-media-query';
import { spacing } from '../../styles/tokens';

export const Wrapper = styled.main`
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* gap: 140px */
    gap: 8.75rem;
    align-items: center;
  `}
`

export const Image = styled.img`
    margin-top: ${spacing[64]};
`

export const Title = styled.h2`
    color: var(--color-text);
    font-size: 1.375;
    font-weight: 800;
    margin-top: ${spacing[40]};
`

export const List = styled.ul`
    color: var(--color-text);
    font-size: var(--text-size-items);
    margin-bottom: ${spacing[40]};
`