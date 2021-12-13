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

      <Container>
        <SearchInputContainer>
          <SearchInput value={filter} onChangeText={onChangeFilter} />
        </SearchInputContainer>

        <Grid
          data={filteredRecipes}
          renderItem={recipe => (
            <Link href={`/recipe/${recipe.id}`} passHref>
              <div>
                <RecipeCard {...recipe} />
              </div>
            </Link>
          )}
        />
      </Container>
    </Page>
  );
}

const Container = styled('div', {
  margin: `0 ${theme.space.large}`,
});

const SearchInputContainer = styled('div', {
  margin: `${theme.space.large} 0 ${theme.space.extraLarge}`,
});
