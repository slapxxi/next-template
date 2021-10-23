import { css, Global, ThemeProvider } from '@emotion/react';
import { Provider as AuthProvider } from 'next-auth/client';
import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { defaultTheme } from '../lib/styles/theme';
import '../styles/globals.css';

let client = new QueryClient();

let App: AppType = (props) => {
  let { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
        <meta name="theme-color" content={defaultTheme.bg} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Rubik:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AuthProvider session={pageProps.session}>
          <ThemeProvider theme={defaultTheme}>
            <Global
              styles={(theme) => {
                return css`
                  body {
                    background-color: ${theme.bg};
                    color: ${theme.fg};
                  }
                `;
              }}
            />
            <Component {...pageProps} />
          </ThemeProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
