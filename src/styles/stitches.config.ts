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
    colors: {
      primary: '#C94C19',
      accent: '#C9A218',
    },
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: "'Source Sans Pro', sans-serif",
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
