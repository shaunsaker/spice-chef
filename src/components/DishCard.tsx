import React, { ReactElement } from 'react';
import dishesData from '../data/dishes.json';
import { styled } from '../styles/stitches.config';
import { RecipeDish } from '../recipes/models';
import { Dish } from '../dishes/models';
import { Card } from './Card';

interface DishChipProps extends RecipeDish {}

export const DishCard = ({ id }: DishChipProps): ReactElement => {
  const dish = dishesData[id] as Dish;

  if (!dish) {
    return null;
  }

  return (
    <StyledCard title={dish.title} variant="paper" size="small">
      <EmojiContainer>{dish.emoji}</EmojiContainer>
    </StyledCard>
  );
};

const StyledCard = styled(Card, {
  height: 160,
});

const EmojiContainer = styled('div', {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '36px',
});
