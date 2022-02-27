import { GetStaticPaths, GetStaticProps } from 'next';
import React, { ReactElement } from 'react';
import { Page } from '../../components/Page';
import { Recipe as RecipeModel } from '../../recipes/models';
import recipesData from '../../data/recipes.json';
import { ParsedUrlQuery } from 'querystring';
import { objectToArray } from '../../utils/objectToArray';
import { HeaderBar } from '../../components/HeaderBar';
import { styled, theme } from '../../styles/stitches.config';
import { DishCard } from '../../components/DishCard';
import { IngredientCard } from '../../components/IngredientCard';
import { ContentContainer } from '../../components/ContentContainer';
import { RecipeCard } from '../../components/RecipeCard';
import { Footer } from '../../components/Footer';
import ShareIcon from '../../components/icons/share.svg';
import { useShare } from '../../components/useShare';
import Head from 'next/head';
import { Grid } from '../../components/Grid';

interface Params extends ParsedUrlQuery {
  recipeId: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const recipes = objectToArray(recipesData);
  const paths: { params: Params }[] = recipes.map(recipe => ({
    params: { recipeId: recipe.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface Props {
  recipe: RecipeModel;
}

export const getStaticProps: GetStaticProps<Props, Params> = async context => {
  const recipeId = context.params.recipeId;
  const recipe = recipesData[recipeId];

  const props: Props = {
    recipe,
  };

  return {
    props,
  };
};

export default function Recipe({ recipe }: Props): ReactElement {
  const { share } = useShare();

  const onShareClick = React.useCallback(() => {
    share({
      title: `${recipe.title} Recipe`,
      text: `Here's a recipe for ${recipe.title} from Spice Chef 👨‍🍳`,
      url: window.location.href,
    });
  }, [share, recipe.title]);

  const seoTitle = `Spice Chef - ${recipe.title}`;
  const seoDescription = recipe.description;

  return (
    <Page>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta
          property="og:url"
          content={typeof window !== 'undefined' && window.location.href}
        />
        <meta property="twitter:title" content={seoTitle} />
        <meta property="twitter:description" content={seoDescription} />
      </Head>

      <Container>
        <HeaderBar showBack>
          <ShareIconContainer onClick={onShareClick}>
            <StyledShareIcon />
          </ShareIconContainer>
        </HeaderBar>

        <StyledContentContainer>
          <StyledRecipeCard
            {...recipe}
            ingredients={undefined}
            cardVariant="paper"
          />

          <DetailsContainer>
            <DescriptionText>{recipe.description}</DescriptionText>

            <HeadingText>Works well with</HeadingText>

            <DishesContainer>
              <Grid
                columns={2}
                data={recipe.dishes}
                renderItem={dish => <DishCard {...dish} />}
              />
            </DishesContainer>

            <HeadingText>Ingredients ({recipe.ingredients.length})</HeadingText>

            <IngredientsContainer>
              {recipe.ingredients.map(recipeIngredient => (
                <IngredientContainer key={recipeIngredient.id}>
                  <IngredientCard {...recipeIngredient} />
                </IngredientContainer>
              ))}
            </IngredientsContainer>
          </DetailsContainer>
        </StyledContentContainer>
      </Container>

      <Footer />
    </Page>
  );
}

const Container = styled('div', {
  position: 'relative',
});

const ShareIconContainer = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',

  '&:hover > svg': {
    color: theme.colors.accent,
  },
});

const StyledShareIcon = styled(ShareIcon, {
  width: 24,
  height: 24,
  color: theme.colors.primaryText,
  transition: theme.transitions.default,
});

const StyledRecipeCard = styled(RecipeCard, {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',

  '@desktop': {
    borderRadius: theme.borderRadius.large,
    boxShadow: theme.boxShadows.large,

    '&:hover': {
      borderRadius: theme.borderRadius.large,
      boxShadow: theme.boxShadows.large,
    },
  },
});

const StyledContentContainer = styled(ContentContainer, {
  padding: 0,

  '@desktop': {
    padding: ` ${theme.space.extraLarge} ${theme.space.large}`,
  },
});

const DetailsContainer = styled('div', {
  background: `linear-gradient(45deg, ${theme.colors.white}, ${theme.colors.background})`,
  padding: ` ${theme.space.extraLarge} ${theme.space.large}`,

  '@desktop': {
    padding: ` ${theme.space.extraLarge} 0`,
  },
});

const DescriptionText = styled('div', {
  fontSize: theme.fontSizes.regular,
  color: theme.colors.primaryText,
  marginBottom: theme.space.extraLarge,
});

const HeadingText = styled('div', {
  fontSize: theme.fontSizes.heading,
  fontWeight: 'bold',
  color: theme.colors.primaryText,
  marginBottom: theme.space.large,
});

const DishesContainer = styled('div', {
  display: 'flex',
  marginBottom: theme.space.extraLarge,
});

const IngredientsContainer = styled('div', {});

const IngredientContainer = styled('div', {
  marginBottom: theme.space.large,
});
