// import { ThemeProvider } from '@emotion/react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { SessionProvider } from 'next-auth/react';
// import { defaultTheme } from 'lib/styles/theme';
import { AppType } from 'next/app';
import Head from 'next/head';

import 'styles/globals.scss';
import 'styles/App.scss';
import Script from 'next/script';

// let client = new QueryClient();

let App: AppType = (props) => {
  let { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#0b0b16" />
      </Head>

      {/* <QueryClientProvider client={client}> */}
      {/* <SessionProvider session={pageProps.session}> */}
      {/* <ThemeProvider theme={defaultTheme}> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
      {/* </SessionProvider> */}
      {/* </QueryClientProvider> */}
      <Script src="scripts/darkMode.js" strategy="beforeInteractive" />
    </>
  );
};

export default App;
