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

      <StyledContentContainer>
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
      </StyledContentContainer>
    </Page>
  );
}

const StyledContentContainer = styled(ContentContainer, {
  padding: ` ${theme.space.extraLarge} ${theme.space.large}`,
});

const SearchInputContainer = styled('div', {
  padding: ` ${theme.space.extraLarge} ${theme.space.large}`,
});
