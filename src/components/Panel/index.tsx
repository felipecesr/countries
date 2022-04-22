import React from "react";
import Link from "next/link";
import ListItem from "components/ListItem";
import * as S from "./styled";

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={flag} loading="lazy" alt={name} />
        </S.PanelHead>
        <S.PanelContent>
          <h3>{name}</h3>
          <dl>
            <ListItem term="Population" definition={population} />
            <ListItem term="Region" definition={region} />
            <ListItem term="Capital" definition={capital} />
          </dl>
        </S.PanelContent>
      </a>
    </Link>
  </S.PanelWrapper>
);

export default Panel;
