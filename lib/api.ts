export const getAllCountries = async () => {
  const response = await fetch(
    'https://restcountries.com/v2/all?fields=alpha3Code,flag,name,population,region,capital'
  );
  const countries = await response.json();
  return countries;
};
