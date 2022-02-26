import React, { ReactElement } from 'react';
import { RecipeIngredient } from '../recipes/models';
import ingredientsData from '../data/ingredients.json';
import { Ingredient } from '../ingredients/models';
import { styled, theme } from '../styles/stitches.config';

const getInstructionsText = (ground: boolean, toasted: boolean): string => {
  if (ground && toasted) {
    return '(ground and toasted)';
  }

  if (ground) {
    return '(ground)';
  }

  if (toasted) {
    return '(toasted)';
  }

  return '';
};

interface IngredientCardProps extends RecipeIngredient {}

export const IngredientCard = ({
  id,
  quantity,
  unit,
  toasted,
  ground,
}: IngredientCardProps): ReactElement => {
  const ingredient = ingredientsData[id] as Ingredient;

  if (!ingredient) {
    return null;
  }

  return (
    <Container>
      <TitleText>{ingredient.title}</TitleText>

      <QuantityText>
        {quantity} {unit} {getInstructionsText(ground, toasted)}
      </QuantityText>
    </Container>
  );
};

const Container = styled('div', {
  borderRadius: theme.borderRadius.small,
  boxShadow: theme.boxShadows.small,
  backgroundColor: theme.colors.background,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.space.large,
});

const TitleText = styled('div', {
  fontSize: theme.fontSizes.heading,
  fontWeight: 700,
  color: theme.colors.primaryText,
});

const QuantityText = styled('div', {
  fontSize: theme.fontSizes.small,
  color: theme.colors.secondaryText,
});
