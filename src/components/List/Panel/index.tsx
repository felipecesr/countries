import React from 'react';
import Link from 'next/link';
import * as S from './styled';

import { LazeImage } from '../../LazeImage';

type Props = {
  alpha3Code: string;
  flag: string;
  name: string;
  population: string;
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
    <Link href="[name]" as={`${alpha3Code.toLowerCase()}`}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>
        <S.PanelHead>
          <LazeImage src={flag} alt={name} />
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
