import { Fragment, useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import '../styles/globals.scss';
import theme from '../utils/theme/theme.util';

const THEME = theme();

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <ThemeProvider theme={THEME}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}
