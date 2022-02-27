import React, { ReactElement } from 'react';
import { styled, theme } from '../styles/stitches.config';
import { ContentContainer } from './ContentContainer';
import QuestionIcon from './icons/question-circle.svg';

interface BlankStateProps {
  title: string;
  description: string;
}

export const BlankState = ({
  title,
  description,
}: BlankStateProps): ReactElement => {
  return (
    <Container>
      <StyledContentContainer>
        <StyledQuestionIcon />

        <TitleText>{title}</TitleText>

        <DescriptionText>{description}</DescriptionText>
      </StyledContentContainer>
    </Container>
  );
};

const Container = styled('div', {
  backgroundColor: theme.colors.background,
  height: 360,
});

const StyledContentContainer = styled(ContentContainer, {
  textAlign: 'center',
});

const StyledQuestionIcon = styled(QuestionIcon, {
  width: 48,
  height: 48,
  color: theme.colors.accent,
});

const TitleText = styled('div', {
  fontFamily: theme.fonts.logo,
  fontSize: theme.fontSizes.title,
  lineHeight: theme.lineHeights.title,
  fontWeight: 700,
  color: theme.colors.primaryText,
  marginBottom: theme.space.large,
});

const DescriptionText = styled('div', {
  fontSize: theme.fontSizes.regular,
  lineHeight: theme.lineHeights.regular,
  color: theme.colors.secondaryText,
});
