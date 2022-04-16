import React, { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import { getAllCountries } from "../lib/api";
import List from "../components/List";
import { Country } from "../types";
import * as S from "../templates/Home/styled";

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
      <S.MenuWrapper>
        <S.MenuSearch value={searchTerm} setSearchTerm={setSearchTerm} />
        <S.MenuDropdown onSelect={handleSelect} />
      </S.MenuWrapper>
      <List countries={searchResults} />
    </main>
  );
};

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
