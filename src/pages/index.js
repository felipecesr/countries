import { getAllCountries } from '../lib/api';

import Home from '../templates/Home';

const HomePage = ({ countries }) => <Home countries={countries} />;

export async function getStaticProps() {
  const countries = getAllCountries();

  return countries;
}

export default HomePage;
