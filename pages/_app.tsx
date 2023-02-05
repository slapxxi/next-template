import { Button } from 'components/Button';
import { MenuIcon } from 'components/icons/MenuIcon';
import { PhoneIcon } from 'components/icons/PhoneIcon';
import { WhatsappIcon } from 'components/icons/WhatsappIcon';
import { List, ListItem } from 'components/List';
import { Logo } from 'components/Logo';
import { Title } from 'components/Title';
import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import 'styles/globals.scss';
import { CloseIcon } from '../components/icons/CloseIcon';
import { TelegramIcon } from '../components/icons/TelegramIcon';

let App: AppType = (props) => {
  let { Component, pageProps } = props;
  let [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuOpen]);

  return (
    <>
      <svg className="h-0 w-0">
        <filter
          id="drop-shadow"
          x="-20%"
          y="-20%"
          width="1.4"
          height="1.8"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology in="SourceAlpha" radius="10" result="effect1_dropShadow_587_4727" />
          <feOffset dy="26" />
          <feGaussianBlur stdDeviation="22" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.222247 0 0 0 0 0.31766 0 0 0 0 0.858333 0 0 0 0.27 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_587_4727" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_587_4727" result="shape" />
        </filter>
      </svg>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#0b0b16" />
      </Head>
      <header className="flex gap-3 px-5 py-3 text-blue">
        <Button onClick={() => setMenuOpen((o) => !o)}>
          <MenuIcon />
        </Button>
        <Link href="/" className="mr-auto flex">
          <Logo width={124} />
        </Link>
        <Button>Демо</Button>
        <Button>
          <PhoneIcon />
        </Button>
      </header>
      <Component {...pageProps} />
      <footer className="flex flex-col bg-navy px-7 pb-12 pt-9 text-sm font-medium text-white">
        <Link href="/" className="mb-2">
          <Logo width={126} variant="mono" />
        </Link>
        <p className="text-sm">Лучшая программа для автоматизации автоломбарда</p>
        <Button className="mt-6 mb-12 rounded-md font-bold">Попробовать бесплатно</Button>

        <div className="mb-14 flex justify-between">
          <div>
            <Title className="mb-4">О продукте</Title>
            <List>
              <ListItem>
                <Link href="#">Возможности</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Преимущества</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Поддержка</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Обновления</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Интеграции</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Документация</Link>
              </ListItem>
            </List>
          </div>
          <div>
            <Title className="mb-10">Тарифы и цены</Title>
            <Title className="mb-4">О нас</Title>
            <List>
              <ListItem>
                <Link href="#">Константы</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Экспертиза</Link>
              </ListItem>
            </List>
          </div>
        </div>

        <a href="tel:+74956779551" className="mb-1 text-2xl font-bold">
          +7 (495) 677-95-51
        </a>
        <button className="mb-5 text-left font-normal">Заказать обратный звонок</button>

        <div className="mb-12 flex gap-2.5">
          <a href="" className="inline-flex  h-[50px] w-[50px] items-center justify-center bg-navy-light">
            <TelegramIcon />
          </a>
          <a href="" className="inline-flex  h-[50px] w-[50px] items-center justify-center bg-navy-light">
            <WhatsappIcon />
          </a>
        </div>

        <small className="mb-2 text-xs font-bold">&copy; 2023, XLombard</small>
        <p className="text-xs">Конфиденциальность и обработка персональных данных</p>
      </footer>
      {menuOpen && (
        <div className="fixed inset-0 overflow-y-scroll bg-blue text-sm font-medium text-white">
          <header className="flex gap-3 px-5 py-3 pb-8">
            <Button onClick={() => setMenuOpen((o) => !o)}>
              <CloseIcon />
            </Button>
            <Link href="/" className="mr-auto flex">
              <Logo width={124} variant="mono" />
            </Link>
            <Button>Демо</Button>
            <Button>
              <PhoneIcon />
            </Button>
          </header>
          <div className="mx-7">
            <div className="ml-[46px]">
              <Title className="mb-5 font-medium">О программе</Title>
              <List className="mb-8">
                <ListItem>
                  <Link href="#">Возможности</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Преимущества</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Поддержка</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Обновления</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Интеграции</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Документация</Link>
                </ListItem>
              </List>
              <Title className="mb-7 font-medium">Тарифы</Title>
              <Title className="mb-8 font-medium">Контакты</Title>

              <a href="tel:+74956779551" className="mb-1 text-2xl font-bold">
                +7 (495) 677-95-51
              </a>
              <button className="mb-5 text-left font-normal">Заказать обратный звонок</button>
              <div className="mb-12 flex gap-2.5">
                <a
                  href=""
                  className="inline-flex  h-[50px] w-[50px] items-center justify-center bg-blue-light"
                >
                  <TelegramIcon />
                </a>
                <a
                  href=""
                  className="inline-flex  h-[50px] w-[50px] items-center justify-center bg-blue-light"
                >
                  <WhatsappIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
