import React, { ReactElement } from 'react';
import { styled, theme } from '../styles/stitches.config';
import { ContentContainer } from './ContentContainer';

interface FooterProps {}

export const Footer = ({}: FooterProps): ReactElement => {
  return (
    <Container>
      <StyledContentContainer>
        <TextContainer>
          <Text>© {new Date().getFullYear()} Spice Chef</Text>
        </TextContainer>

        <TextContainer>
          <Text>
            Illustration by{' '}
            <a href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6">
              Icons 8
            </a>{' '}
            from <a href="https://icons8.com/illustrations">Ouch!</a> and
            Unicons by <a href="https://iconscout.com/">Iconscout</a>
          </Text>
        </TextContainer>

        <Text>
          <a href="mailto: sakershaun@gmail.com">Get in Touch!</a>
        </Text>
      </StyledContentContainer>
    </Container>
  );
};

const Container = styled('div', {
  backgroundColor: theme.colors.background,
});

const StyledContentContainer = styled(ContentContainer, {
  textAlign: 'center',

  '@tablet': {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const TextContainer = styled('div', {
  marginBottom: theme.space.large,

  '@tablet': {
    display: 'flex',
    marginBottom: 0,
  },
});

const Text = styled('div', {
  fontFamily: theme.fonts.primary,
  fontSize: theme.fontSizes.regular,
  lineHeight: theme.lineHeights.regular,
  color: theme.colors.primaryText,

  '& a': {
    color: theme.colors.primary,
    fontWeight: 700,
  },
});
