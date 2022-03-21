import React from 'react';
import { Country } from '../../types';
import * as S from './styled';

import Panel from './Panel';

type Props = {
  countries: Country[];
};

const List = ({ countries }: Props) => {
  if (!countries.length) {
    return <div>Loading...</div>;
  }

  return (
    <S.ListWrapper>
      {countries.map(
        ({ alpha3Code, flag, name, population, region, capital }) => (
          <Panel
            key={alpha3Code}
            alpha3Code={alpha3Code}
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

List.defaultProps = {
  countries: [],
};

export default List;
