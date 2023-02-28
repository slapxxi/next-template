import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import { Logo } from 'components/Logo';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import 'styles/globals.scss';
import 'styles/App.scss';
import 'components/Header.scss';
import 'components/Button.scss';
import { Header } from 'components/Header';
import { Inter } from 'next/font/google';

const App: AppType = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#0b0b16" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <Component {...pageProps} />

      <footer className="bg-navy-900 py-6 px-4">
        <Logo className="w-28" />
        <ul className="my-7 grid grid-cols-2 gap-4">
          {['Главная', 'Брокерам', 'Наши склады', 'Контакты'].map((link) => (
            <li key={link}>
              <Link href="/" className="navText">
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="my-7 flex flex-col gap-4">
          <li className="flex items-center gap-3 text-sm text-navy-400">
            <Phone size={12} />
            <span>+7 (495) 737 8585</span>
          </li>
          <li>
            <a
              href="mailto:ffkaragandainfo@info.ru"
              className="flex items-center gap-3 text-sm text-navy-400"
            >
              <Mail size={12} />
              <span>ffkaragandainfo@info.ru</span>
            </a>
          </li>
        </ul>

        <a href="#" className="link my-3 block text-xs text-navy-400">
          Политика конфеденциальности
        </a>

        <small className="block text-xs text-navy-400">Copyright © 2021 All rights reserved</small>
      </footer>
    </>
  );
};

export default App;
