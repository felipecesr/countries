import React from 'react';
import { useApiCountries } from '../../hooks/api';
import * as S from './styled';

import Panel from './Panel';

const List = () => {
  const countries = useApiCountries();

  if (!countries.length) {
    return 'Loading...';
  }

  return (
    <S.ListWrapper>
      {countries.map(
        ({ alpha2Code, flag, name, population, region, capital }) => (
          <Panel
            key={alpha2Code}
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        )
      )}
    </S.ListWrapper>
  );
};

export default List;
