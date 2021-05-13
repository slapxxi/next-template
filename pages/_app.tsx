import type { AppType } from 'next/dist/next-server/lib/utils';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';

let client = new QueryClient();

let App: AppType = (props) => {
  let { Component, pageProps } = props;

  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
