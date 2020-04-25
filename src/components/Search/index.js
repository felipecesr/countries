import React from 'react';
import * as S from './styled';

const Search = ({ className, value, onChange }) => (
  <S.SearchWrapper className={className}>
    <S.SearchIcon />
    <S.SearchInput
      type="search"
      name="search"
      placeholder="Search for a country..."
      value={value}
      onChange={onChange}
    />
  </S.SearchWrapper>
);

export default Search;
