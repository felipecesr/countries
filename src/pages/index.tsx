import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllCountries } from '../lib/api';
import { ICountry } from '../types';
import * as S from '../templates/Home/styled';

import Layout from '../components/Layout';
import List from '../components/List';

type Props = {
  countries: ICountry[];
};

const HomePage = ({ countries }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<ICountry[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

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
      country.region.toLowerCase().includes(filter || '')
    );
    setSearchResults(results);
  };

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <S.MenuWrapper>
          <S.MenuSearch value={searchTerm} onChange={handleChange} />
          <S.MenuDropdown onSelect={handleSelect} />
        </S.MenuWrapper>
        <List countries={searchResults} />
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => getAllCountries();

export default HomePage;
