import { globalStyles } from '../styles/stitches.config';

globalStyles();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
