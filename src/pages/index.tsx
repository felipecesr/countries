import React, { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import styled from "styled-components";
import media from "styled-media-query";
import { spacing } from "styles/tokens";
import { Country } from "types";
import { getAllCountries } from "lib/api";
import Panel from "components/Panel";
import Search from "components/Search";
import Dropdown from "components/Dropdown";

type IndexProps = {
  countries: Country[];
};

const Index = ({ countries }: IndexProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Country[]>([]);

  useEffect(() => {
    const results = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [countries, searchTerm]);

  const handleSelect = (e: React.MouseEvent) => {
    const a = e.target as HTMLAnchorElement;
    const filter = a.textContent?.toLowerCase();
    const results = countries.filter((country) =>
      country.region.toLowerCase().includes(filter || "")
    );
    setSearchResults(results);
  };

  return (
    <main>
      <MenuWrapper>
        <Search value={searchTerm} setSearchTerm={setSearchTerm} />
        <Dropdown onSelect={handleSelect} />
      </MenuWrapper>
      <ListWrapper>
        {searchResults.map(
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
      </ListWrapper>
    </main>
  );
};

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[40]};
  padding: ${spacing[24]} 0 ${spacing[32]};

  ${media.greaterThan("medium")`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: ${spacing[40]} 0;
  `}
`;

export const ListWrapper = styled.ul`
  --min-column-width: min(264px, 100%);
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--min-column-width), 1fr)
  );
  gap: 74px clamp(56px, 10vw - 4.5rem, 74px);
`;

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const countries = await getAllCountries([
    "alpha3Code",
    "flag",
    "name",
    "population",
    "region",
    "capital",
  ]);
  return {
    props: { countries },
  };
};
