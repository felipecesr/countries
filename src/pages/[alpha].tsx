import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { ArrowLeft } from "styled-icons/fa-solid";
import { Country } from "types";
import { getAllCountries, getCountryByAlphaCode } from "lib/api";
import Button from "components/Button";
import Heading from "components/Heading";
import ListItem from "components/ListItem";
import media from "styled-media-query";

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
      <ButtonWrapper>
        <Link href="/" passHref>
          <Button as="a">
            <ArrowLeft height={14} />
            Back
          </Button>
        </Link>
      </ButtonWrapper>
      <Wrapper>
        <Column>
          <Image src={country.flag} alt={country.name} />
        </Column>
        <Column>
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
        </Column>
      </Wrapper>
    </>
  );
};

export const ButtonWrapper = styled.div`
  padding: 40px 0 64px;

  ${media.greaterThan("medium")`
    padding: 80px 0;
  `}
`;

export const Wrapper = styled.main`
  display: flex;
  gap: 44px 140px;
  flex-wrap: wrap;
  align-items: center;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 400px;
  min-width: 560px;
  object-fit: cover;
`;

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
