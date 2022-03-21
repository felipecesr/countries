import React from 'react';
import Link from 'next/link';
import * as S from './styled';

type Props = {
  alpha3Code: string;
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

const Panel = ({
  alpha3Code,
  flag,
  name,
  population,
  region,
  capital,
}: Props) => (
  <S.PanelWrapper>
    <Link href={`/${alpha3Code.toLowerCase()}`}>
      <a>
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
    </Link>
  </S.PanelWrapper>
);

export default Panel;
