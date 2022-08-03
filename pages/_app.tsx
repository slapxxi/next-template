import { ThemeProvider } from '@emotion/react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as AuthProvider } from 'next-auth/client';
import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import { defaultTheme } from '../lib/styles/theme';
import '../styles/globals.css';

let client = new QueryClient();
let muiTheme = createTheme();

let App: AppType = (props) => {
  let { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#4285f4" />
      </Head>

      <QueryClientProvider client={client}>
        <AuthProvider session={pageProps.session}>
          <ThemeProvider theme={defaultTheme}>
            <MuiThemeProvider theme={muiTheme}>
              <Component {...pageProps} />
            </MuiThemeProvider>
          </ThemeProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
