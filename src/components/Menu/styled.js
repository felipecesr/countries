import styled from 'styled-components';
import media from 'styled-media-query';
import { spacing } from '../../styles/tokens';

import Search from './Search';
import Dropdown from './Dropdown';

export const MenuWrapper = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${spacing.xl};
  `}
`;

export const MenuSearch = styled(Search)`
  margin-bottom: ${spacing.xl};

  ${media.greaterThan('medium')`
    margin-bottom: 0;
  `}
`;

export const MenuDropdown = styled(Dropdown)`
  margin-bottom: ${spacing.lg};

  ${media.greaterThan('medium')`
    margin-bottom: 0;
  `}
`;
