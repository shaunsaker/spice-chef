import React, { ReactElement } from 'react';
import NextHead from 'next/head';

interface HeadProps {}

export const Head = ({}: HeadProps): ReactElement => {
  return (
    <NextHead>
      <title>Spice Chef</title>
      <meta name="description" content="Spice Recipes ♥" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
