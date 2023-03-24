import Head from 'next/head';
import { Phone, ShoppingCart } from 'lucide-react';
import 'styles/globals.scss';
import 'styles/App.scss';

import type { AppType } from 'next/dist/shared/lib/utils';
import Link from 'next/link';

let App: AppType = (props) => {
  let { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#0b0b16" />
      </Head>

      <header className="fixed top-0 z-10 flex w-full justify-between bg-salad-900/70 py-3 px-6">
        <img src="/logo.png" alt="GoodGreen" width={116} />
        <nav className="flex lg:hidden">
          <ul className="flex gap-6 text-white">
            <li className="flex items-center">
              <Phone size={22} />
            </li>
            <li className="flex items-center">
              <ShoppingCart size={22} />
            </li>
          </ul>
        </nav>
        <button className="lg:hidden">
          <svg width={40} height={12} fill="none">
            <path fill="#fff" d="M0 0h40v2H0zm0 5h40v2H0zm0 5h40v2H0z" />
          </svg>
        </button>
        <ul className="hidden gap-6 text-sm font-bold text-white lg:flex">
          <li className="flex">
            <Link href="/" className="flex items-center">
              Состав
            </Link>
          </li>
          <li className="flex">
            <Link href="/" className="flex items-center">
              Для кого
            </Link>
          </li>
          <li className="flex">
            <Link href="/" className="flex items-center">
              Цены и доставка
            </Link>
          </li>
          <li className="flex">
            <Link href="/" className="flex items-center">
              Как принимать
            </Link>
          </li>
          <li className="flex">
            <Link href="/" className="flex items-center">
              ГудГрин
            </Link>
          </li>
          <li className="flex">
            <Link href="/" className="flex items-center">
              Отзывы
            </Link>
          </li>
        </ul>
      </header>

      <nav className="fixed right-4 top-1/2 z-20 hidden -translate-y-[260px] flex-col items-center gap-2 lg:flex">
        <button className="button h-12 w-12 text-white">
          <Phone size={20} />
        </button>
        <button className="button h-12 w-12 text-white">
          <ShoppingCart size={20} />
        </button>
        <ul className="flex flex-col gap-4 rounded-full bg-salad-600 px-3 py-4">
          <li>
            <svg width={24} height={24} fill="none" viewBox="0 0 48 48">
              <path
                fill="#fff"
                d="M48 24a24 24 0 1 1-48 0 24 24 0 0 1 48 0Zm-23.1-6.3-14 6c-1.2.5-1.8 1-1.8 1.4-.1.7.8 1 2 1.4l.6.1c1.2.4 2.8 1 3.7 1 .8 0 1.6-.4 2.6-1a248 248 0 0 1 10.1-6.7h.5c.2.2.2.4.1.5 0 .3-3.6 3.7-5.5 5.4l-1 1-.6.6c-1.2 1-2 1.9 0 3.2l2.6 1.7 2.8 2 .8.5c1 .7 1.9 1.3 3 1.2.6 0 1.3-.6 1.6-2.4a284.2 284.2 0 0 0 2.7-18.2 1 1 0 0 0-.4-.7c-.2-.2-.7-.3-.9-.3-.9 0-2.3.5-9 3.3Z"
              />
            </svg>
          </li>
          <li>
            <svg width={24} height={24} fill="none" viewBox="0 0 48 48">
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M3.4 3.4C0 6.7 0 12.2 0 23v2c0 10.8 0 16.3 3.4 19.6C6.7 48 12.2 48 23 48h2c10.8 0 16.3 0 19.6-3.4C48 41.3 48 35.8 48 25v-2c0-10.8 0-16.3-3.4-19.6C41.3 0 35.8 0 25 0h-2C12.2 0 6.7 0 3.4 3.4ZM8 14.6c.3 12.5 6.5 20 17.4 20h.7v-7.2c4 .4 7 3.4 8.2 7.2H40a15.8 15.8 0 0 0-8.2-10c2.6-1.5 6.2-5.1 7-10h-5.1c-1.2 4-4.5 7.6-7.6 7.9v-7.9H21v13.8c-3.2-.8-7.2-4.6-7.4-13.8H8Z"
              />
            </svg>
          </li>
          <li>
            <svg width={24} height={24} fill="none" viewBox="0 0 48 48">
              <path
                fill="#fff"
                d="M47.5 14.4s-.4-3.3-1.9-4.8c-1.8-1.9-3.9-1.9-4.8-2-6.7-.5-16.8-.5-16.8-.5s-10 0-16.8.5c-1 .1-3 .1-4.8 2-1.5 1.5-2 4.8-2 4.8S0 18.3 0 22.2v3.6c0 3.9.5 7.8.5 7.8s.4 3.3 1.9 4.7c1.8 2 4.2 1.9 5.3 2.1 3.8.4 16.3.5 16.3.5s10 0 16.8-.5c1-.1 3-.1 4.8-2 1.5-1.5 2-4.8 2-4.8s.4-3.9.4-7.8v-3.6c0-4-.5-7.8-.5-7.8ZM19 30.2V16.7l13 6.8-13 6.7Z"
              />
            </svg>
          </li>
          <li>
            <svg width={24} height={24} fill="none" viewBox="0 0 48 48">
              <g fill="#fff" clipPath="url(#a)">
                <path d="M24 4.3c6.4 0 7.2 0 9.7.2 2.3 0 3.6.5 4.4.8 1.2.4 2 1 2.8 1.8.8.8 1.4 1.6 1.8 2.7.3.9.7 2.2.8 4.5.1 2.5.2 3.3.2 9.7 0 6.4 0 7.2-.2 9.7 0 2.3-.5 3.6-.8 4.4-.4 1.1-1 2-1.8 2.8-.8.8-1.6 1.3-2.8 1.8-.8.3-2 .7-4.4.8l-9.7.1-9.7-.1c-2.3-.1-3.6-.5-4.4-.8-1.2-.5-2-1-2.8-1.8A7.4 7.4 0 0 1 5.3 38c-.3-.8-.7-2-.8-4.4-.1-2.6-.2-3.3-.2-9.7 0-6.4 0-7.2.2-9.7 0-2.4.5-3.6.8-4.5.4-1 1-1.9 1.8-2.7.8-.9 1.6-1.4 2.8-1.8.8-.3 2-.7 4.4-.8 2.5-.2 3.3-.2 9.7-.2ZM24 0l-9.9.1c-2.5.2-4.3.6-5.8 1.2a11.8 11.8 0 0 0-7 7C.7 9.8.3 11.6 0 14v10l.1 9.9c.2 2.5.6 4.3 1.2 5.8a11.7 11.7 0 0 0 7 7c1.5.6 3.3 1 5.8 1.1a176 176 0 0 0 19.8 0c2.5 0 4.3-.5 5.8-1 1.6-.7 3-1.5 4.3-2.8 1.3-1.4 2.1-2.7 2.7-4.3.6-1.5 1-3.3 1.1-5.8.1-2.6.2-3.4.2-9.9s0-7.3-.2-9.9c0-2.5-.5-4.3-1-5.8-.7-1.6-1.5-3-2.8-4.3a11.7 11.7 0 0 0-4.3-2.7C38.2.7 36.4.3 34 0H24Z" />
                <path d="M24 11.7a12.3 12.3 0 1 0 0 24.6 12.3 12.3 0 0 0 0-24.6ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm15.7-20.8a2.9 2.9 0 1 1-5.8 0 2.9 2.9 0 0 1 5.8 0Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h48v48H0z" />
                </clipPath>
              </defs>
            </svg>
          </li>
        </ul>
      </nav>

      <Component {...pageProps} />

      <footer className="footer justify-between gap-8 px-10 py-14 text-white lg:flex lg:px-wrap">
        <div className="-mt-20 hidden max-w-sm shrink-0 grow items-center justify-center lg:flex">
          <img src="/glass.webp" alt="Glass" width={130} />
        </div>

        <a rel="tel" href="tel:+79061241677" className="mb-4 block text-lg lg:hidden">
          +7 906 124 1677
        </a>

        <div className="lg:max-w-sm lg:basis-1/3">
          {/* socials */}
          <div>
            <h2 className="text-lg text-em">Следите за нами в соцальных сетях</h2>
            <nav className="my-4">
              <ul className="flex gap-2.5">
                <li>
                  <svg width={24} height={24} fill="none" viewBox="0 0 48 48">
                    <path
                      fill="#fff"
                      d="M48 24a24 24 0 1 1-48 0 24 24 0 0 1 48 0Zm-23.1-6.3-14 6c-1.2.5-1.8 1-1.8 1.4-.1.7.8 1 2 1.4l.6.1c1.2.4 2.8 1 3.7 1 .8 0 1.6-.4 2.6-1a248 248 0 0 1 10.1-6.7h.5c.2.2.2.4.1.5 0 .3-3.6 3.7-5.5 5.4l-1 1-.6.6c-1.2 1-2 1.9 0 3.2l2.6 1.7 2.8 2 .8.5c1 .7 1.9 1.3 3 1.2.6 0 1.3-.6 1.6-2.4a284.2 284.2 0 0 0 2.7-18.2 1 1 0 0 0-.4-.7c-.2-.2-.7-.3-.9-.3-.9 0-2.3.5-9 3.3Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg width={24} height={24} fill="none" viewBox="0 0 48 48">
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M3.4 3.4C0 6.7 0 12.2 0 23v2c0 10.8 0 16.3 3.4 19.6C6.7 48 12.2 48 23 48h2c10.8 0 16.3 0 19.6-3.4C48 41.3 48 35.8 48 25v-2c0-10.8 0-16.3-3.4-19.6C41.3 0 35.8 0 25 0h-2C12.2 0 6.7 0 3.4 3.4ZM8 14.6c.3 12.5 6.5 20 17.4 20h.7v-7.2c4 .4 7 3.4 8.2 7.2H40a15.8 15.8 0 0 0-8.2-10c2.6-1.5 6.2-5.1 7-10h-5.1c-1.2 4-4.5 7.6-7.6 7.9v-7.9H21v13.8c-3.2-.8-7.2-4.6-7.4-13.8H8Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg width={24} height={24} fill="none" viewBox="0 0 48 48">
                    <path
                      fill="#fff"
                      d="M47.5 14.4s-.4-3.3-1.9-4.8c-1.8-1.9-3.9-1.9-4.8-2-6.7-.5-16.8-.5-16.8-.5s-10 0-16.8.5c-1 .1-3 .1-4.8 2-1.5 1.5-2 4.8-2 4.8S0 18.3 0 22.2v3.6c0 3.9.5 7.8.5 7.8s.4 3.3 1.9 4.7c1.8 2 4.2 1.9 5.3 2.1 3.8.4 16.3.5 16.3.5s10 0 16.8-.5c1-.1 3-.1 4.8-2 1.5-1.5 2-4.8 2-4.8s.4-3.9.4-7.8v-3.6c0-4-.5-7.8-.5-7.8ZM19 30.2V16.7l13 6.8-13 6.7Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg width={24} height={24} fill="none" viewBox="0 0 48 48">
                    <g fill="#fff" clipPath="url(#a)">
                      <path d="M24 4.3c6.4 0 7.2 0 9.7.2 2.3 0 3.6.5 4.4.8 1.2.4 2 1 2.8 1.8.8.8 1.4 1.6 1.8 2.7.3.9.7 2.2.8 4.5.1 2.5.2 3.3.2 9.7 0 6.4 0 7.2-.2 9.7 0 2.3-.5 3.6-.8 4.4-.4 1.1-1 2-1.8 2.8-.8.8-1.6 1.3-2.8 1.8-.8.3-2 .7-4.4.8l-9.7.1-9.7-.1c-2.3-.1-3.6-.5-4.4-.8-1.2-.5-2-1-2.8-1.8A7.4 7.4 0 0 1 5.3 38c-.3-.8-.7-2-.8-4.4-.1-2.6-.2-3.3-.2-9.7 0-6.4 0-7.2.2-9.7 0-2.4.5-3.6.8-4.5.4-1 1-1.9 1.8-2.7.8-.9 1.6-1.4 2.8-1.8.8-.3 2-.7 4.4-.8 2.5-.2 3.3-.2 9.7-.2ZM24 0l-9.9.1c-2.5.2-4.3.6-5.8 1.2a11.8 11.8 0 0 0-7 7C.7 9.8.3 11.6 0 14v10l.1 9.9c.2 2.5.6 4.3 1.2 5.8a11.7 11.7 0 0 0 7 7c1.5.6 3.3 1 5.8 1.1a176 176 0 0 0 19.8 0c2.5 0 4.3-.5 5.8-1 1.6-.7 3-1.5 4.3-2.8 1.3-1.4 2.1-2.7 2.7-4.3.6-1.5 1-3.3 1.1-5.8.1-2.6.2-3.4.2-9.9s0-7.3-.2-9.9c0-2.5-.5-4.3-1-5.8-.7-1.6-1.5-3-2.8-4.3a11.7 11.7 0 0 0-4.3-2.7C38.2.7 36.4.3 34 0H24Z" />
                      <path d="M24 11.7a12.3 12.3 0 1 0 0 24.6 12.3 12.3 0 0 0 0-24.6ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm15.7-20.8a2.9 2.9 0 1 1-5.8 0 2.9 2.9 0 0 1 5.8 0Z" />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h48v48H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
              </ul>
            </nav>
          </div>
          {/* copy */}
          <div>
            <small className="mb-2.5 block text-sm">
              ООО «Гудгрин» Россия,423847, Республика Татарстан, Тукаевский район, село Ильбухтино, Оконный
              переулок, здание 5 Изготовлено в соответствии с ТУ 10.89.19-001-93046880-2022
            </small>
            <div className="mb-16 flex items-center gap-2.5">
              <svg width={32} height={32} fill="none">
                <g clipPath="url(#a)">
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M10.5 32h3.7V17.8h3.6V32h3.7V0H11.1v32h-.6ZM0 32h7.4v-3.7H3.7V17.8h3.7v-3.6H3.7V3.7h3.7V0H0v32Zm25.2 0h7.4v-3.7H29V3.1h3.7V-.6h-7.4V32ZM14.8 14.2h3.7V3.7h-3.7v10.5Z"
                    clipRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h32v32H0z" />
                  </clipPath>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width={41} height={32} fill="none">
                <g clipPath="url(#a)">
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M36.9 28.1v-6.3c-1.4.2-5 1.9-10 .5-3-.9-5.4-2.7-5.4-6.4.1-6 6-7.4 10.7-6.8 1 0 4.3 1 4.7 1v-6a31.4 31.4 0 0 0-23.2-3C6.6 2.8 0 7.6-.2 15.8c0 13.6 14.8 17.5 26.2 15.8 3.2-.5 8.3-2 10.7-3.5ZM9.5 25.3V18c0-1.8-.3-6 .6-7 1.2-1.8 3.9-1.7 4.5.5.8 2.5-1.5 3.8-3.8 3.3V18c3.8 1.2 7.3-2.3 7.4-5.7C18.2 6 10 3.9 7 9c-1 1.8-.7 3.8-.7 6v7c0 2.6 2 3.6 3.2 3.3Zm22.7-9.6h2.3v3.7h4.6v-3.7h2v-3l-8.8-.1v3.1h-.1Z"
                    clipRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h41v32H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="">
          <a rel="tel" href="tel:+79061241677" className="mb-4 hidden text-lg lg:block">
            +7 906 124 1677
          </a>
          {/* partnership */}
          <div>
            <h2 className="mb-2.5 text-em">Сотрудничество:</h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="#" className="underline hover:no-underline">
                  Бизнесс с GoodGreen
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline">
                  Медицинским сотрудникам
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline">
                  Фитнес-тренерам
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline">
                  Блогерам
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
