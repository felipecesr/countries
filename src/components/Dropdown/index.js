import React, { useState, useRef, useEffect } from 'react';
import * as S from './styled';

const Dropdown = ({ className, activatorText, items }) => {
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleKey = (event) => {
    if (event.keyCode === 27 && isOpen) {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (
      dropdownListRef.current.contains(event.target) ||
      activatorRef.current.contains(event.target)
    ) {
      return;
    }

    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      dropdownListRef.current.querySelector('a').focus();
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <S.DropdownWrapper className={className} onKeyUp={handleKey}>
      <S.DropdownButton
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-controls="dropdown"
        aria-expanded={isOpen}
        onClick={handleClick}
        ref={activatorRef}
      >
        <span>{activatorText}</span>
        <S.DropdownButtonIcon />
      </S.DropdownButton>
      <S.DropdownMenu
        id="dropdown"
        role="menu"
        ref={dropdownListRef}
        isOpen={isOpen}
      >
        {items.map((item, index) => (
          <S.DropdownMenuItem key={index}>
            <a href="#" className="dropdown-menu__item" role="menuitem">
              {item}
            </a>
          </S.DropdownMenuItem>
        ))}
      </S.DropdownMenu>
    </S.DropdownWrapper>
  );
};

Dropdown.defaultProps = {
  activatorText: 'Filter by Region',
  items: [],
};

export default Dropdown;
