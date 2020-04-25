import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import * as S from './styled';

import { useApiCountries } from '../../hooks/api';

import Layout from '../../components/Layout';
import List from '../../components/List';

const Home = () => {
  const countries = useApiCountries();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, countries]);

  const handleSelect = (event) => {
    const filter = event.target.textContent.toLowerCase();
    const results = countries.filter((country) =>
      country.region.toLowerCase().includes(filter)
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

export default Home;
