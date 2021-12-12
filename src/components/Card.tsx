import { styled } from '@stitches/react';
import React, { ReactElement, ReactNode } from 'react';
import { theme } from '../styles/stitches.config';

interface CardProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  cornerComponent?: ReactNode;
}

export const Card = ({
  title,
  subtitle,
  backgroundImage,
  cornerComponent,
}: CardProps): ReactElement => {
  return (
    <Container>
      {backgroundImage && (
        <BackgroundImage
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

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
  width: 'calc(50% - 8px)',
  height: 200,
  marginBottom: theme.space.large,
  overflow: 'hidden',
});

const TextContainer = styled('div', {
  zIndex: 1,
  backgroundColor: theme.colors.transWhite,
  padding: `${theme.space.small} ${theme.space.large}`,
  borderRadius: 16,
});

const TitleText = styled('div', {
  fontSize: theme.fontSizes.regular,
  fontWeight: 700,
  color: theme.colors.primaryText,
});

const SubtitleText = styled('div', {
  fontSize: theme.fontSizes.regular,
  fontWeight: 700,
  color: theme.colors.secondaryText,
});

const BackgroundImage = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundSize: 'cover',
});

const CornerContainer = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  padding: theme.space.large,
});
