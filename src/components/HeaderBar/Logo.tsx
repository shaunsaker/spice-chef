import { styled } from '@stitches/react';
import React, { ReactElement } from 'react';
import { theme } from '../../styles/stitches.config';

interface LogoProps {}

export const Logo = ({}: LogoProps): ReactElement => {
  return <Container>Spice Chef</Container>;
};

const Container = styled('div', {
  fontFamily: theme.fonts.logo,
  fontSize: theme.fontSizes.heading,
});
