import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ArrowLeft } from "styled-icons/fa-solid";
import { Country } from "../types";
import { getAllCountries, getCountryByAlphaCode } from "../lib/api";
import Button from "../components/Button";
import Heading from "components/Heading";
import ListItem from "components/ListItem";
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
        <S.Column>
          <S.Image src={country.flag} alt={country.name} />
        </S.Column>
        <S.Column>
          <Heading>{country.name}</Heading>
          <dl>
            <ListItem term="Native Name" definition={country.nativeName} />
            <ListItem term="Population" definition={country.population} />
            <ListItem term="Region" definition={country.region} />
            <ListItem term="Sub Region" definition={country.subregion} />
            <ListItem term="Capital" definition={country.capital} />
          </dl>
          <dl>
            <ListItem
              term="Top Level Domain"
              definition={country.topLevelDomain.join(", ")}
            />
            {!!country?.currencies && (
              <ListItem
                term="Currencies"
                definition={country.currencies.map((c) => c.name).join(", ")}
              />
            )}
            <ListItem
              term="Languages"
              definition={country.languages.map((l) => l.name).join(", ")}
            />
          </dl>
        </S.Column>
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
