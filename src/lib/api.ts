export const getAllCountries = async () => {
  const response = await fetch(
    'https://restcountries.eu/rest/v2/all?fields=alpha2Code;flag;name;population;region;capital'
  );
  const countries = await response.json();

  return {
    props: {
      countries,
    },
  };
};
