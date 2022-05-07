import styled from "styled-components";
import media from "styled-media-query";
import { spacing } from "styles/tokens";

import Search from "components/Search";
import Dropdown from "components/Dropdown";

export const MenuWrapper = styled.div`
  ${media.greaterThan("medium")`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${spacing[40]};
  `}
`;

export const MenuSearch = styled(Search)`
  margin-bottom: ${spacing[40]};

  ${media.greaterThan("medium")`
    margin-bottom: 0;
  `}
`;

export const MenuDropdown = styled(Dropdown)`
  margin-bottom: ${spacing[32]};

  ${media.greaterThan("medium")`
    margin-bottom: 0;
  `}
`;

export const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  gap: 74px;
`;
