import React, { ReactElement, ReactNode } from 'react';
import { styled, theme } from '../styles/stitches.config';

interface CardProps {
  className?: string;
  title: string;
  subtitle?: string;
  cornerComponent?: ReactNode;
  children?: ReactNode;
}

export const Card = ({
  className,
  title,
  subtitle,
  cornerComponent,
  children,
}: CardProps): ReactElement => {
  return (
    <Container className={className}>
      {children}

      <TextContainer>
        <TitleText>{title}</TitleText>

        {subtitle && <SubtitleText>{subtitle}</SubtitleText>}
      </TextContainer>

      {cornerComponent && <CornerContainer>{cornerComponent}</CornerContainer>}
    </Container>
  );
};

export const CARD_HEIGHT = 360;

const Container = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  backgroundColor: theme.colors.border,
  borderRadius: theme.borderRadius.large,
  height: CARD_HEIGHT,
  overflow: 'hidden',
  cursor: 'pointer',
  boxSizing: 'border-box',
  transition: theme.transitions.default,
  boxShadow: theme.boxShadows.large,
  border: `${theme.borderWidths.small} solid ${theme.colors.white}`,

  '&:hover': {
    boxShadow: theme.boxShadows.veryLarge,
    borderColor: theme.colors.accent,
  },
});

const TextContainer = styled('div', {
  zIndex: 1,
  padding: theme.space.large,
  width: '100%',
  background: `linear-gradient(45deg, ${theme.colors.transWhite}, rgba(0, 0, 0, 0.05))`,
});

const TitleText = styled('div', {
  fontFamily: theme.fonts.logo,
  fontSize: theme.fontSizes.title,
  lineHeight: theme.lineHeights.title,
  fontWeight: 700,
  color: theme.colors.primaryText,
});

const SubtitleText = styled('div', {
  fontSize: theme.fontSizes.small,
  lineHeight: theme.lineHeights.regular,
  color: theme.colors.secondaryText,
});

const CornerContainer = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  padding: theme.space.large,
});
