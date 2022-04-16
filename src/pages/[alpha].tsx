import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ArrowLeft } from "styled-icons/fa-solid";
import { Country } from "../types";
import { getAllCountries, getCountryByAlphaCode } from "../lib/api";
import Button from "../components/Button";
import Heading from "components/Heading";
import * as S from "../templates/Single/styled";

export type SingleProps = {
  country: Country;
};

const Single = ({ country }: SingleProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Button onClick={() => router.back()}>
        <ArrowLeft height={14} />
        Back
      </Button>
      <S.Wrapper>
        <S.Image src={country.flag} alt={country.name} />
        <div>
          <Heading>{country.name}</Heading>
          <ul>
            <li>
              <strong>Native Name:</strong> {country.nativeName}
            </li>
            <li>
              <strong>Population:</strong> {country.population}
            </li>
            <li>
              <strong>Region:</strong> {country.region}
            </li>
            <li>
              <strong>Sub Region:</strong> {country.subregion}
            </li>
            <li>
              <strong>Capital:</strong> {country.capital}
            </li>
          </ul>
          <ul>
            <li>
              <strong>Top Level Domain:</strong>{" "}
              {country.topLevelDomain.join(", ")}
            </li>
            {!!country?.currencies && (
              <li>
                <strong>Currencies:</strong>{" "}
                {country.currencies.map((c) => c.name).join(", ")}
              </li>
            )}
            <li>
              <strong>Languages:</strong>{" "}
              {country.languages.map((l) => l.name).join(", ")}
            </li>
          </ul>
        </div>
      </S.Wrapper>
    </>
  );
};

export default Single;

type Params = {
  params: {
    alpha: string;
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const country = await getCountryByAlphaCode(params.alpha);
  return { props: { country } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const countries: Country[] = await getAllCountries(["alpha3Code"]);
  return {
    paths: countries.map((c) => ({
      params: { alpha: c.alpha3Code.toLowerCase() },
    })),
    fallback: false,
  };
};
