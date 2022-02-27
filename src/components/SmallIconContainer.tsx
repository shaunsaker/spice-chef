import React, { ReactElement, ReactNode } from 'react';
import { styled, theme } from '../styles/stitches.config';

interface SmallIconContainerProps {
  size?: 'default' | 'small';
  children?: ReactNode;
}

export const SmallIconContainer = ({
  size = 'default',
  children,
}: SmallIconContainerProps): ReactElement => {
  return <Container size={size}>{children}</Container>;
};

const CONTAINER_SIZE = 32;

const SMALL_CONTAINER_SIZE = 24;

const Container = styled('div', {
  width: CONTAINER_SIZE,
  height: CONTAINER_SIZE,
  borderRadius: CONTAINER_SIZE / 2,
  backgroundColor: theme.colors.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  border: `2px solid ${theme.colors.transWhite}`,

  variants: {
    size: {
      default: {},
      small: {
        width: SMALL_CONTAINER_SIZE,
        height: SMALL_CONTAINER_SIZE,
        borderRadius: SMALL_CONTAINER_SIZE / 2,
      },
    },
  },
});
