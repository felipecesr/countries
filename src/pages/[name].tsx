// @ts-nocheck
import React from 'react';
import fetch from 'node-fetch';

import Layout from '../components/Layout';

type Props = {
  name: string;
};

const CountryPage = ({ name }: Props) => (
  <Layout>
    <main>
      <h1>{name}</h1>
    </main>
  </Layout>
);

export async function getStaticPaths() {
  const response = await fetch(
    'https://restcountries.eu/rest/v2/all?fields=alpha3Code'
  );
  const countries = await response.json();

  return {
    paths: countries.map((country) => `/${country.alpha3Code.toLowerCase()}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { name } = params;
  const response = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${name}`
  );
  const props = await response.json();
  return { props };
}

export default CountryPage;
