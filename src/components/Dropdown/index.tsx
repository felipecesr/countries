import React, { useState, useRef, useEffect } from "react";
import * as S from "./styled";

type Props = {
  className?: string;
  activatorText?: string;
  items: string[];
  onSelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Dropdown = ({ className, activatorText, items, onSelect }: Props) => {
  const activatorRef = useRef<HTMLButtonElement>(null);
  const dropdownListRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.keyCode === 27 && isOpen) {
      setIsOpen(false);
      activatorRef.current?.focus();
    }
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if (
      dropdownListRef.current?.contains(e.target as HTMLUListElement) ||
      activatorRef.current?.contains(e.target as HTMLButtonElement)
    ) {
      return;
    }

    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      const el = dropdownListRef.current?.querySelector("a");
      el && el.focus();
      document.addEventListener("mousedown", handleClickOutside as any);
    } else {
      document.removeEventListener("mousedown", handleClickOutside as any);
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
            <button
              className="dropdown-menu__item"
              role="menuitem"
              onClick={onSelect}
            >
              {item}
            </button>
          </S.DropdownMenuItem>
        ))}
      </S.DropdownMenu>
    </S.DropdownWrapper>
  );
};

Dropdown.defaultProps = {
  activatorText: "Filter by Region",
  items: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
};

export default Dropdown;
