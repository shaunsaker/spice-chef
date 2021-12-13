import React, { ReactElement } from 'react';
import { RecipeIngredient } from '../recipes/models';
import ingredientsData from '../data/ingredients.json';
import { Ingredient } from '../ingredients/models';
import { styled, theme } from '../styles/stitches.config';

interface IngredientCardProps extends RecipeIngredient {}

export const IngredientCard = ({
  id,
  quantity,
  toasted,
}: IngredientCardProps): ReactElement => {
  const ingredient = ingredientsData[id] as Ingredient;

  return (
    <Text>{`- ${quantity} ${ingredient.unit} ${ingredient.title}${
      toasted ? ' (toasted)' : ''
    }`}</Text>
  );
};

const Text = styled('div', {
  fontSize: theme.fontSizes.regular,
  color: theme.colors.primaryText,
});
