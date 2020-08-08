import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/global';
import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <GlobalStyles />
    <Component {...pageProps} />
  </Layout>
);

export default App;
