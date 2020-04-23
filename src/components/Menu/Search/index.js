import React from 'react';
import * as S from './styled';

const Search = ({ className }) => (
  <S.SearchWrapper className={className}>
    <S.SearchIcon />
    <S.SearchInput
      type="search"
      name="search"
      placeholder="Search for a country..."
    />
  </S.SearchWrapper>
);

export default Search;
