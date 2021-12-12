import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    transitions: {
      fast: '0.167s',
    },
    colors: {
      primary: '#C94C19',
      accent: '#C9A218',
      white: '#FFFFFF',
      transWhite: 'rgba(255, 255, 255, 0.8)',
      border: '#C2C9D6',
      primaryText: '#2E3233',
      secondaryText: '#5C6466',
    },
    fonts: {
      primary: 'Source Sans Pro',
      logo: 'Playfair Display',
    },
    fontSizes: {
      title: '24px',
      heading: '20px',
      regular: '16px',
      small: '12px',
    },
    space: {
      small: '8px',
      large: '16px',
      extraLarge: '32px',
    },
  },
  utils: {
    size: value => ({
      width: value,
      height: value,
    }),
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: "'Source Sans Pro', sans-serif",
    boxSizing: 'border-box',
  },
  '@font-face': [
    {
      fontFamily: 'Playfair Display',
      src: "url('/fonts/PlayfairDisplay-Bold.ttf')",
      fontStyle: 'normal',
      fontWeight: '700',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: "url('/fonts/SourceSansPro-Regular.ttf')",
      fontStyle: 'normal',
      fontWeight: '400',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: "url('/fonts/SourceSansPro-SemiBold.ttf')",
      fontStyle: 'normal',
      fontWeight: '600',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: "url('/fonts/SourceSansPro-Bold.ttf')",
      fontStyle: 'normal',
      fontWeight: '700',
      fontDisplay: 'swap',
    },
  ],
});
