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
    <Text>
      {quantity} {unit} {ingredient.title}{' '}
      {getInstructionsText(ground, toasted)}
    </Text>
  );
};

const Text = styled('div', {
  fontSize: theme.fontSizes.regular,
  color: theme.colors.primaryText,
});
