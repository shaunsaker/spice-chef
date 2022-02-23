import { styled } from '@stitches/react';
import React, { ReactElement, ReactNode } from 'react';
import { theme } from '../styles/stitches.config';
import { Head } from './Head';

interface PageProps {
  children?: ReactNode;
}

export const Page = ({ children }: PageProps): ReactElement => {
  return (
    <div>
      <Head />

      <Container>{children}</Container>
    </div>
  );
};

const Container = styled('main', {
  background: `linear-gradient(45deg, ${theme.colors.white}, rgba(0, 0, 0, 0.05))`,
});
