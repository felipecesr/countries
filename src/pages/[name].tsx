import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';

type Country = {
  name: string;
  alpha3Code: string;
};

const CountryPage = ({ name }: Country) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <main>
        <h1>{name}</h1>
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    'https://restcountries.eu/rest/v2/all?fields=alpha3Code'
  );
  const countries: Country[] = await response.json();

  return {
    paths: countries.map((country) => `/${country.alpha3Code.toLowerCase()}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { name } = params;
  const response = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${name}`
  );
  const props: Country[] = await response.json();
  return { props };
};

export default CountryPage;
