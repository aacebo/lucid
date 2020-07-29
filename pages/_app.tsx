import { AppProps } from 'next/app';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import '../styles/globals.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1abc9c',
      light: '#62efcd',
      dark: '#008b6e',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
      light: '#ff7961',
      dark: '#ba000d',
      contrastText: '#fff',
    },
    warning: {
      main: '#fb8c00',
      light: '#ffbd45',
      dark: '#c25e00',
      contrastText: '#000',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
