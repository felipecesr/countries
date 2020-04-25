import { useState, useEffect } from 'react';

export function useApiCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await window.fetch(
        'https://restcountries.eu/rest/v2/all?fields=alpha2Code;flag;name;population;region;capital'
      );
      const countries = await response.json();

      setCountries(countries);
    };

    fetchCountries();
  }, []);

  return countries;
}
