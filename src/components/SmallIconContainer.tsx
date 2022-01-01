import React, { ReactElement, ReactNode } from 'react';
import { styled, theme } from '../styles/stitches.config';

const CONTAINER_SIZE = 32;

interface SmallIconContainerProps {
  children?: ReactNode;
}

export const SmallIconContainer = ({
  children,
}: SmallIconContainerProps): ReactElement => {
  return <Container>{children}</Container>;
};

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
});
