import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from 'components/GlobalStyles';
import Header from 'components/Header';
import Container from 'components/Container'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Header />
    <Container>
      <Component {...pageProps} />
    </Container>
  </>
);

export default App;
