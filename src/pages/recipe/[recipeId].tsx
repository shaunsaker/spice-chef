import { GetStaticPaths, GetStaticProps } from 'next';
import React, { ReactElement } from 'react';
import { Page } from '../../components/Page';
import { Recipe as RecipeModel } from '../../recipes/models';
import recipesData from '../../data/recipes.json';
import { ParsedUrlQuery } from 'querystring';
import { objectToArray } from '../../utils/objectToArray';
import { HeaderBar } from '../../components/HeaderBar';
import { styled, theme } from '../../styles/stitches.config';
import { CountryFlag } from '../../components/CountryFlag';
import { DishChip } from '../../components/DishChip';
import { IngredientCard } from '../../components/IngredientCard';

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
  return (
    <Page>
      <Container>
        <HeaderBar showBack />

        <ContentContainer>
          <Image src={recipe.imageUri} alt={recipe.title} />

          <DetailsContainer>
            <ContentHeaderContainer>
              <TitleText>{recipe.title}</TitleText>

              <FlagContainer>
                <CountryFlag countryCode={recipe.countryCode} />
              </FlagContainer>
            </ContentHeaderContainer>

            <DescriptionText>{recipe.description}</DescriptionText>

            <HeadingText>Works well with</HeadingText>

            <DishesContainer>
              {recipe.dishes.map(recipeDish => (
                <DishContainer key={recipeDish.id}>
                  <DishChip id={recipeDish.id} />
                </DishContainer>
              ))}
            </DishesContainer>

            <HeadingText>Ingredients</HeadingText>

            <IngredientsContainer>
              {recipe.ingredients.map(recipeIngredient => (
                <IngredientContainer key={recipeIngredient.id}>
                  <IngredientCard {...recipeIngredient} />
                </IngredientContainer>
              ))}
            </IngredientsContainer>
          </DetailsContainer>
        </ContentContainer>
      </Container>
    </Page>
  );
}

const Container = styled('div', {
  position: 'relative',
});

const ContentContainer = styled('div', {
  maxWidth: 720,
  margin: '0 auto',
});

const Image = styled('img', {
  width: '100%',
  minHeight: 250,
  borderRadius: 20,
});

const CONTENT_CONTAINER_BORDER_RADIUS = 50;

const DetailsContainer = styled('div', {
  marginTop: -CONTENT_CONTAINER_BORDER_RADIUS,
  position: 'relative', // needed for negative margin over image (stacking context is ignored)
  borderRadius: `${CONTENT_CONTAINER_BORDER_RADIUS}px ${CONTENT_CONTAINER_BORDER_RADIUS}px 0 0`,
  backgroundColor: theme.colors.white,
  padding: theme.space.large,
});

const ContentHeaderContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.space.large,
});

const TitleText = styled('div', {
  fontSize: theme.fontSizes.title,
  fontWeight: 'bold',
  color: theme.colors.primaryText,
});

const FlagContainer = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
});

const DescriptionText = styled('div', {
  fontSize: theme.fontSizes.regular,
  color: theme.colors.primaryText,
  marginBottom: theme.space.large,
});

const HeadingText = styled('div', {
  fontSize: theme.fontSizes.heading,
  fontWeight: 'bold',
  color: theme.colors.primaryText,
  marginBottom: theme.space.large,
});

const DishesContainer = styled('div', {
  display: 'flex',
  marginBottom: theme.space.large,
});

const DishContainer = styled('div', {
  marginRight: theme.space.small,
});

const IngredientsContainer = styled('div', {});

const IngredientContainer = styled('div', {
  marginBottom: theme.space.small,
});
