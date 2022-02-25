import React, { ReactElement, ReactNode } from 'react';
import { styled, theme } from '../styles/stitches.config';

// FIXME: How to extend StyledComponent
interface ContentContainerProps {
  className?: string; // used to restyle a styled component
  children?: ReactNode;
}

// simply gives the children a max-width and centers it
export const ContentContainer = ({
  className,
  children,
}: ContentContainerProps): ReactElement => {
  return (
    <Wrapper>
      <Container className={className}>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Container = styled('div', {
  maxWidth: theme.breakpoints.desktop,
  width: '100%',
  padding: ` ${theme.space.extraLarge} ${theme.space.large}`,
});
