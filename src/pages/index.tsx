import { Card } from '../components/Card';
import { Head } from '../components/Head';
import { HeaderBar } from '../components/HeaderBar';
import { styled, theme } from '../styles/stitches.config';
import ReactCountryFlag from 'react-country-flag';
import { CountryFlag } from '../components/CountryFlag';
import { GetStaticProps } from 'next';
import { Recipe } from '../recipes/models';
import { SearchInput } from '../components/SearchInput';
import recipesData from '../data/recipes.json';
import { objectToArray } from '../utils/objectToArray';

interface Props {
  recipes: Recipe[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const recipes = objectToArray(recipesData);

  const props: Props = {
    recipes,
  };

  return {
    props,
  };
};

export default function Home({ recipes }: Props) {
  return (
    <div>
      <Head />

      <main>
        <HeaderBar />

        <PageContainer>
          <SearchInputContainer>
            <SearchInput />
          </SearchInputContainer>

          <CardsContainer>
            {recipes.map((recipe, index) => {
              // we need to render a Spacer after every odd item for our column gap to work
              const isOddItem = index % 2 === 0;

              return (
                <CardContainer key={recipe.title}>
                  <Card
                    title={recipe.title}
                    backgroundImage={recipe.imageUri}
                    cornerComponent={
                      <CountryFlag countryCode={recipe.countryCode} />
                    }
                  />

                  {isOddItem && <Spacer />}
                </CardContainer>
              );
            })}
          </CardsContainer>
        </PageContainer>
      </main>
    </div>
  );
}

const PageContainer = styled('div', {
  margin: `0 ${theme.space.large}`,
});

const SearchInputContainer = styled('div', {
  margin: `${theme.space.large} 0 ${theme.space.extraLarge}`,
});

const Spacer = styled('div', {
  width: theme.space.large,
});

const CardsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
});

const CardContainer = styled('div', {
  width: 'calc(50% - 8px)',
  marginBottom: theme.space.large,
});
