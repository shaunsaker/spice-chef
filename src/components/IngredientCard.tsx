import React, { ReactElement } from 'react';
import { RecipeIngredient } from '../recipes/models';
import { Card } from './Card';
import ingredientsData from '../data/ingredients.json';
import { Ingredient } from '../ingredients/models';

interface IngredientCardProps extends RecipeIngredient {}

export const IngredientCard = ({
  id,
  quantity,
  toasted,
}: IngredientCardProps): ReactElement => {
  const ingredient = ingredientsData[id] as Ingredient;

  return (
    <Card
      title={ingredient.title}
      subtitle={`${quantity} ${ingredient.unit}`}
    />
  );
};
