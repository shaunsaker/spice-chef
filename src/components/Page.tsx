import React, { ReactElement, ReactNode } from 'react';
import { Head } from './Head';

interface PageProps {
  children?: ReactNode;
}

export const Page = ({ children }: PageProps): ReactElement => {
  return (
    <div>
      <Head />

      <main>{children}</main>
    </div>
  );
};
