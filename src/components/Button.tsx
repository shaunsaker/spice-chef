import { styled } from '@stitches/react';
import React, { ReactElement } from 'react';
import { theme } from '../styles/stitches.config';

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
  boxShadow:
    '0px 4px 6px 0px rgb(50 50 93 / 11%), 0px 1px 3px 0px rgb(0 0 0 / 8%)',
  transition: theme.transitions.default,

  '&:hover': {
    boxShadow:
      '0px 4px 10px 0px rgb(50 50 93 / 23%), 0px 1px 3px 0px rgb(0 0 0 / 8%);',
  },
});
