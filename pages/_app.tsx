import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';

let client = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
