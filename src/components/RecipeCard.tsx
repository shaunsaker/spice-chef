import React, { ReactElement } from 'react';
import { Recipe, RecipeIngredient } from '../recipes/models';
import { styled } from '../styles/stitches.config';
import { Card } from './Card';
import { CountryFlag } from './CountryFlag';

interface RecipeCardProps extends Omit<Recipe, 'ingredients'> {
  className?: string;
  ingredients?: RecipeIngredient[];
}

export const RecipeCard = ({
  className,
  title,
  ingredients,
  imageUri,
  countryCode,
}: RecipeCardProps): ReactElement => {
  return (
    <Card
      className={className}
      title={title}
      subtitle={ingredients && `${ingredients.length} ingredients`}
      cornerComponent={<CountryFlag countryCode={countryCode} />}
    >
      <BackgroundImage style={{ backgroundImage: `url(${imageUri})` }} />
    </Card>
  );
};

const BackgroundImage = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundSize: 'cover',
});
