import React from "react";
import * as S from "./styled";

export type SearchProps = {
  className?: string;
  value: string;
  setSearchTerm(value: string): void;
};

const Search = ({ className, value, setSearchTerm }: SearchProps) => (
  <S.SearchWrapper className={className}>
    <S.SearchIcon />
    <S.SearchInput
      type="search"
      name="search"
      placeholder="Search for a country..."
      value={value}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </S.SearchWrapper>
);

export default Search;
