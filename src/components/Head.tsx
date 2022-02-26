import React, { ReactElement } from 'react';
import NextHead from 'next/head';

const TITLE = 'Spice Chef';

const DESCRIPTION =
  'A curated collection of spice recipes from all over the world 🌍';

interface HeadProps {}

export const Head = ({}: HeadProps): ReactElement => {
  return (
    <NextHead>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta
        property="og:url"
        content={typeof window !== 'undefined' && window.location.origin}
      />
      <meta property="og:type" content="website" />
      <meta property="twitter:title" content={TITLE} />
      <meta property="twitter:description" content={DESCRIPTION} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
