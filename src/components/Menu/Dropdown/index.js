import React from 'react';
import * as S from './styled';

const Dropdown = ({ className }) => {
  return (
    <S.DropdownWrapper className={className}>
      <S.DropdownButton
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span>Filter by Region</span>
        <S.DropdownButtonIcon />
      </S.DropdownButton>
      <S.DropdownMenu role="menu">
        <S.DropdownMenuItem>
          <a href="#" className="dropdown-menu__item" role="menuitem">
            Africa
          </a>
        </S.DropdownMenuItem>
        <S.DropdownMenuItem>
          <a href="#" className="dropdown-menu__item" role="menuitem">
            America
          </a>
        </S.DropdownMenuItem>
      </S.DropdownMenu>
    </S.DropdownWrapper>
  );
};

export default Dropdown;
