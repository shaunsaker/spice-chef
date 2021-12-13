import React, { ReactElement } from 'react';
import dishesData from '../data/dishes.json';
import { styled, theme } from '../styles/stitches.config';
import { RecipeDish } from '../recipes/models';
import { Dish } from '../dishes/models';

interface DishIconProps extends RecipeDish {}

export const DishIcon = ({ id }: DishIconProps): ReactElement => {
  const dish = dishesData[id] as Dish;

  return <Container />;
};

const CONTAINER_SIZE = 64;

const Container = styled('div', {
  size: CONTAINER_SIZE,
  borderRadius: CONTAINER_SIZE / 2,
  backgroundColor: theme.colors.border,
});
