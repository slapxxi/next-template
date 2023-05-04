import type { LayoutProps } from 'lib/types';
import 'styles/globals.scss';
import 'app/app.scss';

let AppLayout = (props: LayoutProps) => {
  let { children } = props;

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#0b0b16" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default AppLayout;
