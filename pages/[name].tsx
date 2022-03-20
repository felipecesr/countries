import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ArrowLeft } from "styled-icons/fa-solid";
import { Country } from "../types";
import Button from "../components/Button";
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
        <ArrowLeft height={10} />
        Back
      </Button>
      <main>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <S.Image src={country.flag} alt={country.name} />
        <S.Title>{country.name}</S.Title>
        <S.List>
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
        </S.List>
        <S.List>
          <li>
            <strong>Top Level Domain:</strong>{" "}
            {country.topLevelDomain.join(", ")}
          </li>
          {!!country?.currencies && <li>
            <strong>Currencies:</strong>{" "}
            {country.currencies.map((c) => c.name).join(", ")}
          </li>}
          <li>
            <strong>Languages:</strong>{" "}
            {country.languages.map((l) => l.name).join(", ")}
          </li>
        </S.List>
        {!!country?.borders && <footer>
          <nav>
            <h3>Border Countries:</h3>
            <ul>
              {country.borders.map((b) => (
                <li key={b}>
                  <Link href={`/${b.toLowerCase()}`} passHref>
                    <a>{b}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>}
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const countries = await fetch(
    "https://restcountries.com/v2/all?fields=alpha3Code"
  ).then(res => res.json());

  return {
    paths: countries.map(c => ({ params: { name: c.alpha3Code.toLowerCase() } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params;
  const country = await fetch(
    `https://restcountries.com/v2/alpha/${name}`
  ).then((res) => res.json());
  console.log({country})
  return { props: { country } };
};

export default Single;
