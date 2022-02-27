import { styled, theme } from '../styles/stitches.config';
import { GetStaticProps } from 'next';
import { Recipe } from '../recipes/models';
import { SearchInput } from '../components/SearchInput';
import recipesData from '../data/recipes.json';
import { objectToArray } from '../utils/objectToArray';
import { useCallback, useState } from 'react';
import { Page } from '../components/Page';
import Link from 'next/link';
import { HeaderBar } from '../components/HeaderBar';
import { RecipeCard } from '../components/RecipeCard';
import { Grid } from '../components/Grid';
import { Hero } from '../components/Hero';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import { BlankState } from '../components/BlankState';

interface Props {
  recipes: Recipe[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const recipes = objectToArray(recipesData) as Recipe[];

  const props: Props = {
    recipes,
  };

  return {
    props,
  };
};

export default function Home({ recipes }: Props) {
  const [filter, setFilter] = useState('');

  const filteredRecipes =
    filter.length > 1
      ? recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(filter.toLowerCase()),
        )
      : recipes;

  const onChangeFilter = useCallback((text: string) => {
    setFilter(text);
  }, []);

  return (
    <Page>
      <HeaderBar />

      <Hero />

      <SearchInputContainer>
        <SearchInput value={filter} onChangeText={onChangeFilter} />
      </SearchInputContainer>

      {/* FIXME: extract to component */}
      {filteredRecipes.length ? (
        <StyledContentContainer>
          <Grid
            columns={1}
            data={filteredRecipes}
            renderItem={recipe => (
              <Link href={`/recipe/${recipe.id}`} passHref>
                <div>
                  <RecipeCard {...recipe} />
                </div>
              </Link>
            )}
          />
        </StyledContentContainer>
      ) : (
        <BlankStateContainer>
          <BlankState
            title="No Comprende"
            description="We either couldn't find what you're looking for or that recipe has alluded us."
          />
        </BlankStateContainer>
      )}

      <Footer />
    </Page>
  );
}

const StyledContentContainer = styled(ContentContainer, {
  padding: ` ${theme.space.extraLarge} ${theme.space.large}`,
});

const SearchInputContainer = styled('div', {
  padding: ` ${theme.space.extraLarge} ${theme.space.large}`,
});

const BlankStateContainer = styled('div', {
  marginBottom: theme.space.large,
});
