import React, { ReactElement } from 'react';
import { styled, theme } from '../../styles/stitches.config';

interface BrandMarkProps {}

export const BrandMark = ({}: BrandMarkProps): ReactElement => {
  return (
    <Container>
      <Text>S</Text>
    </Container>
  );
};

const SIZE = 30;

const Container = styled('div', {
  size: `${SIZE}px`,
  borderRadius: `${SIZE / 2}px`,
  backgroundColor: theme.colors.primary,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Text = styled('div', {
  fontFamily: theme.fonts.logo,
  fontSize: theme.fontSizes.heading,
  lineHeight: theme.fontSizes.heading,
  color: theme.colors.white,
  marginBottom: 2, // alignment
});
