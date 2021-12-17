import React, { ReactElement } from 'react';
import { styled, theme } from '../../styles/stitches.config';
import Link from 'next/link';

interface BrandMarkProps {}

export const BrandMark = ({}: BrandMarkProps): ReactElement => {
  return (
    <Link href="/" passHref>
      <Container>
        <Text>S</Text>
      </Container>
    </Link>
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
  cursor: 'pointer',
});

const Text = styled('div', {
  fontFamily: theme.fonts.logo,
  fontSize: theme.fontSizes.heading,
  lineHeight: theme.fontSizes.heading,
  color: theme.colors.white,
  marginBottom: 2, // alignment
});
