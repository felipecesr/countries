import React from 'react';
import { ICountry } from '../../types';
import * as S from './styled';

import Panel from './Panel';

type Props = {
  countries: ICountry[];
};

const List = ({ countries }: Props) => {
  if (!countries.length) {
    return <div>Loading...</div>;
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

List.defaultProps = {
  countries: [],
};

export default List;
