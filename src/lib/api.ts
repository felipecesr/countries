const endpoint = "https://restcountries.com/v2";

const isEmptyArray = (arr: any[]) => arr.length === 0;

export const getAllCountries = async (fields: string[] = []) => {
  const params = isEmptyArray(fields) ? "" : `?fields=${fields.join(",")}`;
  const response = await fetch(`${endpoint}/all${params}`);
  const countries = await response.json();
  return countries;
};

export const getCountryByAlphaCode = async (
  alphaCode: string,
  fields: string[] = []
) => {
  const params = isEmptyArray(fields) ? "" : `?fields=${fields.join(",")}`;
  const response = await fetch(`${endpoint}/alpha/${alphaCode}${params}`);
  const country = await response.json();
  return country;
};
