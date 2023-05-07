import type { LayoutProps } from 'lib/types';
import 'styles/globals.scss';
import 'app/app.scss';

const darkModeScript = /* javascript */ `
  let darkModeEnabled = localStorage.getItem('dark')
  let mqDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  if (darkModeEnabled || mqDarkMode.matches) {
    document.documentElement.classList.add('dark');
  }
`;

let AppLayout = (props: LayoutProps & {}) => {
  let { children } = props;

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#0b0b16" />
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
      </head>
      <body className="dark:bg-zinc-900 dark:text-white">{children}</body>
    </html>
  );
};

export default AppLayout;
