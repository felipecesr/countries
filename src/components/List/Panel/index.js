import React from 'react';
import * as S from './styled';

const Panel = ({ flag, name, population, region, capital }) => (
  <S.PanelWrapper>
    <S.PanelHead>
      <img src={flag} loading="lazy" alt={name} />
    </S.PanelHead>
    <S.PanelContent>
      <p>{name}</p>
      <ul>
        <li>
          <strong>Population:</strong> {population}
        </li>
        <li>
          <strong>Region:</strong> {region}
        </li>
        <li>
          <strong>Capital:</strong> {capital}
        </li>
      </ul>
    </S.PanelContent>
  </S.PanelWrapper>
);

export default Panel;
