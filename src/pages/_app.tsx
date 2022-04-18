import React from "react";
import { AppProps } from "next/app";
import Header from "components/Header";
import Container from "components/Container";
import "styles/themes.css";
import "styles/reset.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Container>
      <Component {...pageProps} />
    </Container>
  </>
);

export default App;
