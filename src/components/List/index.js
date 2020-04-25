import React from 'react';
import * as S from './styled';

import Panel from './Panel';

const List = ({ countries }) => {
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

List.defaultProps = {
  countries: [],
};

export default List;
