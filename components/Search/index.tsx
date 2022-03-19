import React from 'react';
import * as S from './styled';

type Props = {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ className, value, onChange }: Props) => (
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
