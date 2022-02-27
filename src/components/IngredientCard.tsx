import React, { ReactElement } from 'react';
import { RecipeIngredient } from '../recipes/models';
import ingredientsData from '../data/ingredients.json';
import { Ingredient } from '../ingredients/models';
import { styled, theme } from '../styles/stitches.config';
import { Card } from './Card';
import FireIcon from './icons/fire.svg';
import CogIcon from './icons/cog.svg';
import { SmallIconContainer } from './SmallIconContainer';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

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
    <StyledCard
      title={ingredient.title}
      variant="paper"
      size="small"
      cornerComponent={
        <IconsContainer>
          {toasted && (
            <StyledTippy content="Toast me">
              <IconContainer>
                <SmallIconContainer>
                  <StyledFireIcon />
                </SmallIconContainer>
              </IconContainer>
            </StyledTippy>
          )}

          {ground && (
            <StyledTippy content="Grind me">
              <IconContainer>
                <SmallIconContainer>
                  <StyledCogIcon />
                </SmallIconContainer>
              </IconContainer>
            </StyledTippy>
          )}
        </IconsContainer>
      }
    >
      <Container>
        <QuantityText>{quantity}</QuantityText>

        <UnitText>{unit}</UnitText>
      </Container>
    </StyledCard>
  );
};

const StyledCard = styled(Card, {});

const Container = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const IconsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const IconContainer = styled('div', { marginBottom: theme.space.verySmall });

const ICON_SIZE = 16;

const StyledFireIcon = styled(FireIcon, {
  width: ICON_SIZE,
  height: ICON_SIZE,
  color: theme.colors.primary,
});

const StyledCogIcon = styled(CogIcon, {
  width: ICON_SIZE,
  height: ICON_SIZE,
  color: theme.colors.accent,
});

const QuantityText = styled('div', {
  fontSize: theme.fontSizes.title,
  lineHeight: theme.lineHeights.title,
  fontWeight: 700,
  color: theme.colors.primaryText,
});

const UnitText = styled('div', {
  fontSize: theme.fontSizes.small,
  lineHeight: theme.lineHeights.small,
  color: theme.colors.secondaryText,
});

const StyledTippy = styled(Tippy, {
  '&&': {
    backgroundColor: theme.colors.primaryText,
    color: theme.colors.white,
    borderRadius: theme.borderRadius.small,
    boxShadow: theme.boxShadows.large,
  },

  '> .tippy-arrow': {
    color: theme.colors.primaryText,
  },
});
