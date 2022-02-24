import React, { ReactElement, ReactNode } from 'react';
import { styled, theme } from '../styles/stitches.config';

interface CardProps {
  title: string;
  subtitle?: string;
  cornerComponent?: ReactNode;
  children?: ReactNode;
}

export const Card = ({
  title,
  subtitle,
  cornerComponent,
  children,
}: CardProps): ReactElement => {
  return (
    <Container>
      {children}

      <TextContainer>
        <TitleText>{title}</TitleText>

        {subtitle && <SubtitleText>{subtitle}</SubtitleText>}
      </TextContainer>

      {cornerComponent && <CornerContainer>{cornerComponent}</CornerContainer>}
    </Container>
  );
};

const Container = styled('div', {
  position: 'relative',
  padding: theme.space.large,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  backgroundColor: theme.colors.border,
  borderRadius: 20,
  height: 200,
  overflow: 'hidden',
  cursor: 'pointer',
  boxSizing: 'border-box',
  border: `2px solid ${theme.colors.border}`,
  transition: theme.transitions.default,

  '&:hover': {
    borderColor: theme.colors.accent,
  },
});

const TextContainer = styled('div', {
  zIndex: 1,
  backgroundColor: theme.colors.transWhite,
  padding: `${theme.space.small} ${theme.space.large}`,
  borderRadius: 16,
  textAlign: 'center',
});

const TitleText = styled('div', {
  fontSize: theme.fontSizes.regular,
  fontWeight: 700,
  color: theme.colors.primaryText,
});

const SubtitleText = styled('div', {
  fontSize: theme.fontSizes.regular,
  color: theme.colors.secondaryText,
});

const CornerContainer = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  padding: theme.space.large,
});
