import React, { ReactElement } from 'react';
import { styled, theme } from '../styles/stitches.config';

interface ButtonProps {
  href: string;
  children: string;
}

export const Button = ({ href, children }: ButtonProps): ReactElement => {
  return <Container href={href}>{children}</Container>;
};

const Container = styled('a', {
  cursor: 'pointer',
  outline: 'none',
  textDecoration: 'none',
  background: theme.colors.white,
  border: 'none',
  fontFamily: theme.fonts.primary,
  fontSize: theme.fontSizes.small,
  fontWeight: 700,
  color: theme.colors.primaryText,
  padding: `${theme.space.small} ${theme.space.large}`,
  borderRadius: theme.borderRadius.small,
  transition: theme.transitions.default,
  boxShadow: theme.boxShadows.small,

  '&:hover': {
    boxShadow: theme.boxShadows.large,
  },
});
