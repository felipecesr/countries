import Head from 'next/head';

import Layout from '../components/Layout';
import Menu from '../components/Menu';
import List from '../components/List';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu />
        <List />
      </main>
    </Layout>
  );
}
