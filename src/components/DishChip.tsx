import React, { ReactElement } from 'react';
import dishesData from '../data/dishes.json';
import { styled, theme } from '../styles/stitches.config';
import { RecipeDish } from '../recipes/models';
import { Dish } from '../dishes/models';

interface DishChipProps extends RecipeDish {}

export const DishChip = ({ id }: DishChipProps): ReactElement => {
  const dish = dishesData[id] as Dish;

  return (
    <Container>
      <Text>{dish.title}</Text>
    </Container>
  );
};

const Container = styled('div', {
  backgroundColor: theme.colors.accent,
  padding: `${theme.space.small} ${theme.space.large}`,
  borderRadius: 20,
});

const Text = styled('div', {
  fontSize: theme.fontSizes.regular,
  color: theme.colors.white,
});
