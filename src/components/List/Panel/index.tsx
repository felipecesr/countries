import React from 'react';
import * as S from './styled';

type Props = {
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
};

const Panel = ({ flag, name, population, region, capital }: Props) => (
  <S.PanelWrapper>
    <a href="/">
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
    </a>
  </S.PanelWrapper>
);

export default Panel;
