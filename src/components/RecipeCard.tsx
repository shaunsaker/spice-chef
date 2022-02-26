import React, { ReactElement } from 'react';
import { Recipe, RecipeIngredient } from '../recipes/models';
import { styled } from '../styles/stitches.config';
import { Card } from './Card';
import { CountryFlag } from './CountryFlag';
import Image from 'next/image';

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
    <StyledCard
      className={className}
      title={title}
      subtitle={ingredients && `${ingredients.length} ingredients`}
      cornerComponent={<CountryFlag countryCode={countryCode} />}
    >
      <Image
        src={imageUri}
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
      />
    </StyledCard>
  );
};

const StyledCard = styled(Card, {
  position: 'relative',
});
