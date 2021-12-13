import React, { ReactElement } from 'react';
import { RecipeIngredient } from '../recipes/models';
import { Card } from './Card';
import ingredientsData from '../data/ingredients.json';
import { Ingredient } from '../ingredients/models';
import { SmallIconContainer } from './SmallIconContainer';
import FireIcon from './icons/fire.svg';
import { theme } from '../styles/stitches.config';

const FIRE_ICON_SIZE = 20;

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
      cornerComponent={
        toasted && (
          <SmallIconContainer>
            <FireIcon
              width={FIRE_ICON_SIZE}
              height={FIRE_ICON_SIZE}
              fill={theme.colors.accent.toString()}
            />
          </SmallIconContainer>
        )
      }
    />
  );
};
