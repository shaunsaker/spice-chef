import React, { ReactElement } from 'react';
import dishesData from '../data/dishes.json';
import { styled, theme } from '../styles/stitches.config';
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
    <StyledCard title={dish.title} variant="paper">
      <EmojiContainer>{dish.emoji}</EmojiContainer>
    </StyledCard>
  );
};

const CARD_HEIGHT = 160;

const StyledCard = styled(Card, {
  maxHeight: CARD_HEIGHT, // this applies the height style 🤷‍♂️

  '& section': {
    padding: theme.space.small,
  },

  '& h1': {
    fontFamily: theme.fonts.primary,
    fontSize: theme.fontSizes.regular,
    textAlign: 'center',
  },
});

const EmojiContainer = styled('div', {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '36px',
});
