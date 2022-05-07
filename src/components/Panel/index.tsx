import React from "react";
import Link from "next/link";
import Heading from "components/Heading";
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
        <S.Flag src={flag} loading="lazy" alt={`${name}'s flag`} />
        <S.PanelContent>
          <Heading as="h3">{name}</Heading>
          <S.List>
            <ListItem term="Population" definition={population} />
            <ListItem term="Region" definition={region} />
            <ListItem term="Capital" definition={capital} />
          </S.List>
        </S.PanelContent>
      </a>
    </Link>
  </S.PanelWrapper>
);

export default Panel;
