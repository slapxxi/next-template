import { ThemeProvider } from '@emotion/react';
import { Provider as AuthProvider } from 'next-auth/client';
import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { defaultTheme } from '../lib/styles/theme';
import '../styles/globals.css';

let client = new QueryClient();

let App: AppType = (props) => {
  let { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#4285f4" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <QueryClientProvider client={client}>
        <AuthProvider session={pageProps.session}>
          <ThemeProvider theme={defaultTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
