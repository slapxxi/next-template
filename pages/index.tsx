import { Button } from 'components/Button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimalCard } from '../components/AnimalCard';
import { Header } from '../components/Header';
import { PinIcon } from '../components/icons/PinIcon';
import { ItemCard } from '../components/ItemCard';
import { SectionTitle } from '../components/SectionTitle';
import { SwiperNextButton } from '../components/SwiperNextButton';
import { SwiperPrevButton } from '../components/SwiperPrevButton';
import { Tag } from '../components/Tag';
import { useBreakpoints } from '../lib/hooks/useBreakpoints';

const IndexPage = () => {
  let bp = useBreakpoints();

  return (
    <>
      <Header variant="fill" />

      <main>
        <section className="bg-lightBlue-500 text-white">
          <div className="hero">
            <div className="lg:w-1/2">
              <h2 className="hero__title mb-2.5 md:mb-5">Всё для счастья ваших любимцев</h2>
              <p className="hero__text mb-5 text-white md:mb-7">Новые скидки каждый день!</p>
              <Button variant="fill-bright" className="my-5">
                В каталог
                <ArrowRight />
              </Button>
            </div>
          </div>
        </section>

        <div className="bg-lightGray-100 py-px">
          <section className="cont section">
            <div className="grid snap-x snap-mandatory grid-cols-2 gap-2.5 md:flex md:gap-5 md:overflow-x-scroll">
              {[
                { title: 'Для собак', img: 'dog' },
                { title: 'Для кошек', bgColor: 'blue', img: 'cat' },
                { title: 'Для птиц', bgColor: 'rose', img: 'bird' },
                { title: 'Для грызунов', bgColor: 'orange', img: 'hamster' },
                { title: 'Для рыбок', bgColor: 'purple', img: 'fish' },
                { title: 'Груминг', bgColor: 'pink', img: 'grooming' },
              ].map((item) => (
                <Link href="#" className="aspect-square md:aspect-[.84] md:shrink-0 md:basis-1/4 lg:shrink">
                  <AnimalCard
                    title={item.title}
                    img={item.img as any}
                    color={item.bgColor as any}
                    className="h-full w-full"
                  />
                </Link>
              ))}
            </div>
          </section>

          <section className="section_lg lg:section_xl">
            <div className="cont">
              <SectionTitle>Популярные товары</SectionTitle>
            </div>

            <div className="cont">
              <Swiper slidesPerView={bp.md ? (bp.lg ? 3 : 3) : 2} spaceBetween={10}>
                <header slot="container-start" className="my-5 flex md:my-6">
                  <div className="flex gap-2.5">
                    {[{ name: 'Корм', selected: true }, { name: 'Игрушки' }, { name: 'Лежанки' }].map(
                      (item, i) => (
                        <Tag key={i} selected={item.selected} name={item.name} />
                      ),
                    )}
                  </div>
                  <div className="ml-auto flex">
                    <SwiperPrevButton
                      className="hidden items-center justify-center rounded-full
                      border border-gray-300 p-1.5 text-gray-600 md:ml-auto md:flex md:p-3"
                    >
                      <ChevronLeft size={18} />
                    </SwiperPrevButton>
                    <SwiperNextButton
                      className="hidden items-center justify-center rounded-full
                      border border-gray-300 p-1.5 text-gray-600 md:ml-2 md:flex md:p-3"
                    >
                      <ChevronRight size={18} />
                    </SwiperNextButton>
                  </div>
                </header>
                {[
                  {
                    title: 'FLORIDA',
                    description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                    price: 3446,
                    discount: 0.5,
                    options: ['400г', '800г', '1200г', '3500г'],
                    img: 'florida.png',
                  },
                  {
                    title: 'ProBalance',
                    description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                    price: 3446,
                    discount: 0.25,
                    img: 'probalance.webp',
                  },
                  {
                    title: 'FLORIDA',
                    description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                    price: 3446,
                    discount: 0.15,
                    img: 'florida.png',
                  },
                  {
                    title: 'FLORIDA',
                    description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                    price: 3446,
                    discount: 0.15,
                    img: 'florida.png',
                  },
                ].map((item, i) => (
                  <SwiperSlide key={i} className="!h-auto">
                    <ItemCard {...item} className="h-full" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </div>

        <div className="bg-white pb-12">
          <section className="my-12 md:my-28">
            <img src="brands-animated.svg" />
          </section>

          <section className="my-12 px-5 md:my-28">
            <h2 className="">Теперь ещё удобнее!</h2>
            <p className="my-4 text-base text-slate-500 md:my-5">
              Заказывайте в магазине «Матроскин» не выходя из дома! Все товары лицензированы и проходят
              проверку оригинальности. Заказывайте в магазине «Матроскин» не выходя из дома!
            </p>

            <div className="grid grid-cols-2 gap-2.5">
              {[
                {
                  text: 'Широкий выбор',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width={41} height={40} fill="none">
                      <g clipPath="url(#a)">
                        <path
                          fill="#A8ABBE"
                          d="M34.77 9.06c4 4.41 2.9 9.07 3.76 14.72.15.68 1.11.73 1.34.06.24-.71.38-1.44.48-2.17.32-2.24.13-4.42-.6-6.58a16.74 16.74 0 0 0-2.48-5.03 33.72 33.72 0 0 0-2.01-2.43c.15-.58.26-1.18.29-1.79.16-4.8-2.28-6.1-6.68-5.73-3.47-.14-6.91.19-10.35.57-4.35.18-12.9-2.16-12.25 4.97C7.34 10 3.1 11.84 1.3 15.23c-.51 1-1.4 3.18-.24 3.87.04 1.15.05 2.3.05 3.47-.76 14.89.21 17.48 15.9 17.38 5-.05 10.1.22 15.01-.92 3.4.1 8.4-4.29 8.17-7.86a.87.87 0 1 0-1.74-.08c-.1 3.3-3.8 6.97-7.18 6.28-.7-.38-.79-1.4-.84-2.18.56-5.94-.7-12.15.37-18.46.92-2.56 2.87-5 3.96-7.67Zm-5.91 10.82c.01 5.17.46 10.2.13 15.37a5.2 5.2 0 0 0 .7 2.5c-4.12.03-8.3-.23-12.4-.2-3.03.13-6.1.3-9.1-.13-7-.39-5.62-8.29-5.68-13.32 0-1.68-.02-3.37-.09-5.05.28-.22.46-.55.47-.92.35-3.63 4.48-5.47 5.43-8.96.04-.12.08-.25.1-.37 6.54.3 13.18-.26 19.69.1 1.65.08 1.71-2.42.04-2.4-6.52.1-13.11 1.56-19.6.58-.03-.41-.08-.82-.12-1.21-1.17-4.76 5.52-3.25 8.37-3.24 4.02-.08 8.04-.97 12.08-.76 1.61.01 4.04-.47 4.66 1.46 1.84 6.1-5.18 10.33-4.68 16.55Z"
                        />
                        <path
                          fill="#1951E7"
                          d="M18.58 17.76c-1.59-.06-2.5 2.22-1.34 3.29 2.44 1.89 4.36-3.11 1.34-3.29Zm3.85 4.27c-3.15-1.8-3.88 4.35-.5 3.7 1.4-.5 1.73-2.84.5-3.7Zm-11.98-.15c-1.4-.43-2.52.78-2.2 2.16.43 2.38 3.32 1.98 3.31-.37.05-.78-.32-1.53-1.1-1.8Zm4.65-2.96c-.56-2.03-3.87-1.2-3.56.82.21 3.08 4.37 1.93 3.55-.82Zm.5 4.99c-2.92.74-5.82 5.3-2.33 7.2 1.69.76 3.6.16 5.22-.48.77-.35.96-1.24.84-1.99-.35-1.78-1.76-4.45-3.72-4.73Z"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M.5 0h40v40H.5z" />
                        </clipPath>
                      </defs>
                    </svg>
                  ),
                },
                {
                  text: 'Доступные цены',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width={41} height={40} fill="none">
                      <g clipPath="url(#a)">
                        <path
                          fill="#A8ABBE"
                          d="M9.86 4.55c1.14-.01 1.87-.95 2.55-1.79.62-.78 1.26-1.6 2.2-2.11.95-.5 2.07-.5 3.03-.15.24.08.48.18.7.28l.73.38c.92.44 1.9.13 2.85-.2.88-.3 1.73-.66 2.74-.74 1.5-.13 2.79.64 3.65 1.86.13.16.3.45.42.62l.03.05a2 2 0 0 0 .47.75 1 1 0 0 0 .23.17c.06.03.09.02.05.02h.13c2.12.2 4.68.88 5.87 2.9.3.5.52 1.08.67 1.62.25.88.33 1.79.69 2.51.13.26.31.48.54.67l-.2-.13c2.2 1.1 4 3.65 3 6.18-.11.31-.34.83-.46 1.15-.28.72-.58 1.46-.52 2.17.03.32.13.6.33.87a4.62 4.62 0 0 1-.47 5.45c-.42.47-.95.85-1.52 1.1a.68.68 0 0 1-.66-1.19 3.05 3.05 0 0 0 1.36-2.04 2.82 2.82 0 0 0-.48-2.17l.05.07c-.4-.5-.7-1.14-.8-1.78-.22-1.55.37-2.9.89-4.28.01-.06.06-.18.08-.23.2-.6.06-1.18-.28-1.72a4.46 4.46 0 0 0-1.72-1.53c-.23-.2-.47-.4-.66-.64-.22-.27-.42-.59-.56-.9a6.89 6.89 0 0 1-.49-1.61c-.23-1.24-.3-2.49-1.3-3.34-.96-.83-2.32-1.13-3.57-1.33-.66-.03-1.44-.58-1.9-1.35a3.6 3.6 0 0 1-.33-.67l.04.09c-.53-.97-1.29-1.82-2.48-1.73-1.26.1-2.34.71-3.66.96-.7.13-1.5.14-2.19-.1-.18-.05-.35-.14-.52-.21l-.15-.1-.16-.08-.04-.02-.03-.02c-.9-.5-1.93-.86-2.87-.28-.3.18-.6.43-.87.72-.84.91-1.65 2.23-2.9 2.84-.47.24-1 .36-1.54.37a.68.68 0 0 1-.7-.65.69.69 0 0 1 .73-.71Z"
                        />
                        <path
                          fill="#A8ABBE"
                          d="M34 35.15c-.81.51-1.8.76-2.75.7-1.29.04-2.07.64-3.04 1.75a7.18 7.18 0 0 1-1.8 1.6c-.22.13-.5.24-.74.32-.12.03-.26.08-.38.1-.04.02-.34.06-.4.07a7.2 7.2 0 0 1-3.09-.48c-.47-.16-1-.39-1.46-.59-.27-.12-.69-.13-.9.07-.77.58-1.7 1-2.68 1.08-2.43.24-4.54-1.55-5.65-3.54l-.02-.04-.01-.02c.02.05.02.03-.01 0-.19-.11-.4-.18-.65-.27l.17.04c-.48-.05-.98-.1-1.5-.18-1.86-.25-3.54-.99-4.16-2.92-.23-.98-.26-1.98-.53-2.9-.23-.78-.63-1.32-1.4-1.61l-.02-.02-.28-.16c-.18-.1-.37-.26-.53-.38l-.36-.33-.32-.37a4.72 4.72 0 0 1-.51-4.95c.2-.4.48-.8.58-1.25.07-.25.1-.52.09-.78l.05.29c-.41-1.2-.9-2.45-1.03-3.77a5 5 0 0 1 0-.96c.1-1.24.84-2.3 1.7-3.12.65-.63 1.33-1.15 2.01-1.65l-.35.41c.27-.59.43-1.29.6-1.95.28-1.14.57-2.48 1.31-3.54a4.28 4.28 0 0 1 4-1.77 1.2 1.2 0 1 1-.18 2.4c-.52-.04-1.02-.01-1.44.24-.43.27-.7.72-.92 1.22-.56 1.33-.76 2.97-1.43 4.33l-.12.26c-1.07.77-2.86 1.9-3.14 3.18l-.02.1-.02.16c-.04.53.05 1.01.18 1.57.18.77.46 1.6.73 2.42.03.98-.23 1.96-.76 2.78a2.82 2.82 0 0 0-.07 3.03l.16.25.13.16.07.07.21.21.16.13.08.06.26.16c1 .43 1.87 1.35 2.23 2.71.15.55.23 1.07.3 1.57.06.5.11.97.2 1.4l-.02-.09c.37 1.26 1.6 1.63 2.8 1.83l1.54.2c.37.13.78.27 1.13.53.15.11.33.28.46.5l.01.04.04.06c.84 1.49 2.31 2.9 4.12 2.77.7-.05 1.35-.34 1.93-.76l-.05.04c.34-.3.78-.46 1.22-.49.42-.03.82.05 1.2.21l.4.17c.25.12.5.22.76.32 1.07.4 2.38.69 3.3.3.31-.13.6-.34.86-.57.51-.48.9-1 1.43-1.57a5.05 5.05 0 0 1 3.65-1.72c.61.01 1.22-.17 1.71-.52a.88.88 0 1 1 .96 1.46Z"
                        />
                        <path
                          fill="#1951E7"
                          d="M17.34 14.53a3.3 3.3 0 0 1-1.54 3.12c-1.88 1.15-4.62.15-5.18-2.03-.58-2.12.63-4.16 2.88-4.36 2-.15 3.81 1.2 3.84 3.27Zm-1.35.04c.14-2.23-3.11-2.38-3.58-.73-.1.45.05 1 .35 1.36.52.56 1.37.57 2.09.48.16-.02.32-.05.48-.11.42-.16.64-.55.66-1Zm7.71 11.07c.04-.45.1-.9.26-1.37a3.17 3.17 0 0 1 3.85-2.04c1.55.35 2.8 1.64 2.8 3.28a3.43 3.43 0 0 1-4.54 3.35 3.24 3.24 0 0 1-2.36-3.22Zm1.36.08c-.22 1.95 2.7 2.51 3.5.85l-.02.05c.13-.37.18-.7.09-1.04-.16-.62-.83-.9-1.4-1.01-.47-.06-.9-.06-1.34.05-.48.16-.75.6-.83 1.1Zm-10.04 1.81c1.91-2.37 3.4-5.06 4.88-7.72a65.83 65.83 0 0 0 3.82-8.23 1.2 1.2 0 1 1 2.2.97 118 118 0 0 1-4.57 8.1c-1.59 2.65-3.4 5.14-4.87 7.85a.88.88 0 1 1-1.46-.97Z"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M.5 0h40v40H.5z" />
                        </clipPath>
                      </defs>
                    </svg>
                  ),
                },
                {
                  text: 'Уникальность товаров',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width={41} height={40} fill="none">
                      <g clipPath="url(#a)">
                        <path
                          fill="#A8ABBE"
                          d="M1.1 14.36C4.45 1.4 20.72-3.94 31.66 3.16a17.59 17.59 0 0 1 7.2 9.86c.43 1.1.94 2.89 1.12 4.28a17.9 17.9 0 0 1-2.85 12.95c-.7.93-2.07-.02-1.44-1a13.46 13.46 0 0 0 2.04-3.6 16.97 16.97 0 0 0-.27-12.14 16.99 16.99 0 0 0-2.56-5.14C29.13.47 16.8-.1 9.37 5.73a16.32 16.32 0 0 0-5.93 9.23 1.2 1.2 0 1 1-2.34-.6Z"
                        />
                        <path
                          fill="#A8ABBE"
                          d="M30.87 36.14c-4.44 4-10.68 4.83-16.22 2.77C7.04 36.06 1.12 28.5.81 20.3c-.07-1.97.22-3.95.8-5.82a.68.68 0 1 1 1.32.37 15.28 15.28 0 0 0-.7 5.37c.27 5.46 3.37 10.7 7.82 13.83a20.08 20.08 0 0 0 4.78 2.46c2.06.72 4.25 1.15 6.44 1.12 3.12-.03 6.05-1 8.78-2.57.71-.42 1.43.51.82 1.1Z"
                        />
                        <path
                          fill="#F77A09"
                          d="M29.15 16.52c-.96.1-1.9.16-2.87.11-1.14-.05-2.34-.32-3.06-1.3-.3-.4-.5-.89-.67-1.34-.3-.91-.54-1.8-.86-2.68-.15-.43-.31-.86-.49-1.28l.26.28a2.06 2.06 0 0 0-.8-.27c-.8-.05-1.1 1.36-1.28 2-.4 1.38-.67 3.6-2.35 4.1l.12-.06c-.24.13-.5.22-.75.28-1.13.27-2.3.02-3.42 0-.4-.01-.8.02-1.12.12l.11-.05c-.3.17-.58.36-.78.56-.13.15-.2.24-.23.4-.01.08 0 .15.04.23.09.18.22.33.38.5 1.23 1.2 3.88 2.2 4.5 3.85.03.09.05.18.04.26l-.02.41-.05.4c-.1.74-.35 1.53-.57 2.21-.27.85-.54 1.7-.54 2.55l-.01-.17.08.33c.05.13.08.2.15.26H15c.13 0 .3-.07.46-.14 1-.46 1.96-1.32 2.84-2.04.3-.26.56-.48.94-.69l-.1.06c.2-.14.46-.28.74-.36 1.59-.53 3.04.65 4.15 1.6.45.38.92.77 1.4 1.03.2.1.38.16.5.18a.6.6 0 0 0 .35-.06l-.11.06c.13-.08.22-.16.27-.21a.35.35 0 0 0 .09-.16c.05-.27-.05-.62-.16-.93l.12.22a12.1 12.1 0 0 1-.64-1.18c-1.25-2.74-.36-4.71 2-6.36.67-.49 1.36-.92 2.05-1.37l-.13.12c.44-.45 0-1.42-.62-1.47Zm-.09-1.36c.9-.05 1.73.57 2.08 1.36.39.8.33 1.93-.37 2.56-.65.47-1.3.94-1.9 1.45-.73.63-1.53 1.39-1.6 2.37-.04.6.21 1.2.5 1.75.18.3.37.6.59.9.05.07.08.15.1.23.35.8.56 1.84.17 2.73-.22.57-.75 1.1-1.23 1.38-.97.55-2.18.42-3.1-.08-1.21-.62-2.1-1.7-3.22-2.36a1 1 0 0 0-.42-.14c-.09 0-.11.02-.2.08-.12.06-.23.14-.35.23-1.33 1-2.82 2.4-4.53 2.75-1.68.31-2.78-.83-2.96-2.44a6.2 6.2 0 0 1 .28-1.9c.36-1.33 1.04-2.54 1.13-3.88l.07.43a.687.687 0 0 0-.1-.18c-.49-.62-1.23-1.07-1.89-1.55-.87-.62-1.8-1.2-2.45-2.14a2.18 2.18 0 0 1-.2-2.12 3.76 3.76 0 0 1 1.72-1.6 4.26 4.26 0 0 1 1.85-.25c.49.03.94.08 1.36.12.73.06 1.52.16 2.11-.15.1-.05.2-.05.3-.12.28-.2.42-.53.58-.91.38-.94.59-2.12 1-3.14.17-.42.38-.83.72-1.2.84-.9 2.02-.78 3-.23.16.09.28.23.34.38.37.9.67 1.82.94 2.73.2.66.36 1.3.64 1.89.15.31.35.6.64.79 1 .65 3.2.37 4.4.26Z"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M.5 0h40v40H.5z" />
                        </clipPath>
                      </defs>
                    </svg>
                  ),
                },
                {
                  text: 'Быстрая доставка',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width={41} height={40} fill="none">
                      <g clipPath="url(#a)">
                        <path
                          fill="#A8ABBE"
                          d="M39.9 27.17c-.79-2.02-2.44-3.95-4.7-4.26-.55-2.43-.93-5.26-2.89-7.04-2.13-1.74-5.11-1.44-7.7-1.36.04-2.24.1-4.5.2-6.6-.05-1.56-2.42-1.51-2.4.05.05 2.34.26 5.69.4 8.05a246.89 246.89 0 0 1 .3 6.83 99.3 99.3 0 0 0-15.14.7c-.74.1-.74 1.26.02 1.34 5.02.89 10.09.22 15.11-.24a148.19 148.19 0 0 1 11.48-.15c.62.12 1.45.18 2.2 1a6.55 6.55 0 0 1 1.79 5.02c-.16 1.97-1.1 2.78-3.04 2.51-.77 0-2.28-.36-3.3-.13-1.13-4.97-7.4-3.66-7.54.88-.3.05-.6.1-.85.1-1.81.08-3.64 0-5.45-.08-1.43-.06-2.85-.25-4.26-.42h-.05a4.68 4.68 0 0 0-.88-1.75c-1.98-2.48-6.2-2.05-7.1 1.18-.08.2-.14.42-.18.64-4.26.3-4.05-4.46-3.62-7.73.38-4.1 1.88-8.28.8-12.4-.52-1.53-2.85-.68-2.23.83.65 1.7.48 3.61.37 5.43-.16 4.17-1.95 10.17.7 13.77a4.9 4.9 0 0 0 3.07 1.62c.24.03.56.09.88.12.14.84.51 1.63 1.13 2.22 1.6 1.65 4.6 2 6.21.21.44-.51.73-1.11.88-1.75h.1c2.75-.08 5.56-.26 8.3-.4.82-.04 1.65-.05 2.47.05a4.18 4.18 0 0 0 2.47 2.54c1.97.59 4.25-.75 4.81-2.67.11 0 .22 0 .34-.03.87-.2 1.84-.04 2.81-.02 4.86.46 5.96-4.32 4.48-8.06Zm-15.6-4.31a93 93 0 0 0 .16-2.86c.04-1.22.08-2.5.1-3.79 6.92-1 8 .64 9.06 6.92-3.1-.08-6.2-.2-9.32-.27ZM12.88 34.49c-.1 3.18-5.68 1.97-5.1-.9.44-3.46 5.37-2.24 5.1.9Zm18.18.06c-.07 1.5-2.03 2.56-3.3 1.82a2.7 2.7 0 0 1-1.12-1.98c-.07-1.48 1.63-2.7 3-2.26.94.32 1.44 1.48 1.42 2.42Z"
                        />
                        <path
                          fill="#F77A09"
                          d="M17.72 7.94c-.07-1.88-1.26-3.45-2.45-4.8-.45-.52-.94-1.05-1.36-1.58-.63-.75-1.67.28-.95.94.86 1.18 2.22 2.54 2.64 3.97-4.3-.1-8.63-.18-12.92-.35-1.67-.08-1.65 2.5.03 2.38l3.47-.3c2.83-.2 5.7-.47 8.53-.26.3.02.6.07.9.12-.1.3-.27.6-.51.9-.6.83-1.53 1.36-2.14 2.23-.24.4-.66.92-.44 1.42.16.33.56.47.9.3.98-.51 2.02-.97 2.88-1.71a4.23 4.23 0 0 0 1.42-3.26Z"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M.5 0h40v40H.5z" />
                        </clipPath>
                      </defs>
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div
                  className="flex aspect-square flex-col items-center justify-center gap-5 rounded-2xl
                  bg-slate-100 p-2.5 md:aspect-auto md:flex-row md:justify-start md:px-6 md:py-5"
                  key={i}
                >
                  {item.icon}
                  <p className="text-center text-base font-medium md:text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* special offers */}
          <section className="my-12 px-5 md:my-28">
            <div className="bg-curly md:bg-curly-md rounded-2xl bg-lightBlue-500 bg-no-repeat p-2.5 md:px-10 md:pt-6 md:pb-8">
              <Swiper slidesPerView={bp.md ? (bp.lg ? 2 : 1) : 2} spaceBetween={10}>
                <header
                  className="my-5 flex items-center justify-between md:justify-start"
                  slot="container-start"
                >
                  <SwiperPrevButton className="flex items-center justify-center rounded-full border p-1.5 text-white md:ml-auto md:p-3">
                    <ChevronLeft size={18} />
                  </SwiperPrevButton>
                  <h2 className="section__title text-white md:-order-1">Акции</h2>
                  <SwiperNextButton className="flex items-center justify-center rounded-full border p-1.5 text-white md:ml-2 md:p-3">
                    <ChevronRight size={18} />
                  </SwiperNextButton>
                </header>
                {[
                  {
                    title: 'FLORIDA',
                    price: 3885,
                    description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                    img: 'florida.png',
                    options: ['400г', '800г', '1200г', '3500г'],
                  },
                  {
                    title: 'ProBalance',
                    price: 310,
                    discount: 0.897,
                    previousPrice: 3000,
                    description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                    img: 'probalance.webp',
                  },
                  {
                    title: 'FLORIDA',
                    price: 4019,
                    description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                    img: 'florida.png',
                  },
                  {
                    title: 'FLORIDA',
                    price: 1_000_000,
                    description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                    img: 'florida.png',
                  },
                ].map((item, i) => (
                  <SwiperSlide key={i} className="!h-auto">
                    <ItemCard {...item} horizontal={bp.md} className="h-full" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          {/* addresses section */}
          <section className="my-12 px-5 md:my-28">
            <h2 className="section__title md:text-center">Заходите в гости!</h2>
            <p className="my-4 mx-auto max-w-prose text-base text-gray-500 md:my-8 md:text-center">
              Любите ходить по магазинам или хотите оформить самовывоз? Отлично! Мы работаем с 9 утра до 9
              вечера, наши магазины распологаютс по адресам:
            </p>
            <ul className="flex flex-col gap-2.5 md:flex-row md:justify-between">
              {['Северная улица, 74А', 'Омская улица, 12', 'Профсоюзная улица, 7'].map((addr, i) => (
                <li className="flex items-center gap-2 text-base" key={i}>
                  <PinIcon className="text-mediumBlue-500" />
                  {addr}
                </li>
              ))}
            </ul>
            <div className="my-4 md:my-10">
              <img src="/map.png" className="w-full" />
            </div>
          </section>
        </div>

        {/* news section */}
        <section className="bg-slate-100 py-10">
          <div className="px-5">
            <h2 className="section__title mb-4">Новости и полезные статьи</h2>
          </div>

          <div className="mb-7 flex snap-x snap-mandatory gap-2.5 overflow-x-scroll px-5">
            {[
              {
                title: 'Не забывайте ухаживать за лапками в морозы',
                text: 'Перед прогулкой: нанесите защитный воск. После прогулки: вымойте лапки и насухо протрите. Нанесите специальный крем на подушечки',
                img: 'news-1.png',
              },
              {
                title: 'Знакомство с брендом Wanpy',
                text: 'Нежное пюре с лососем и тунцом или с треской и тунцом для кошек - ни с чем несравнимое удовольствие для мурлык Лакомство, которое можно каждый день',
                img: 'news-2.png',
              },
              {
                title: 'Не забывайте ухаживать за лапками в морозы',
                text: 'Перед прогулкой: нанесите защитный воск. После прогулки: вымойте лапки и насухо протрите. Нанесите специальный крем на подушечки',
                img: 'news-1.png',
              },
            ].map((item, i) => (
              <div
                className="flex w-5/6 shrink-0 snap-center flex-col rounded-xl border border-slate-200 bg-white p-2.5 md:w-5/12"
                key={i}
              >
                <img src={item.img} className="mb-4 aspect-square rounded-md object-cover" />
                <h2 className="my-2 text-base font-bold md:text-lg">{item.title}</h2>
                <p className="my-2 mt-auto text-sm text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* grooming banner */}
        <div className="bg-white py-16 md:px-5">
          <div
            className="bg-dog-wiggle flex flex-col rounded-3xl bg-orange-300 
            bg-contain bg-no-repeat p-5 pb-[280px] [background-position:60px_330px,top] md:p-10 md:[background-position:400px_30px,-100px_-80px]"
          >
            <div className="md:w-1/2">
              <h2 className="section__title text-white">Записывемся на ноготочки!</h2>
              <p className="my-6 text-base text-white">
                Полный комплекс процедур для красоты и здоровья вашего питомца
              </p>
              <form action="#" className="flex flex-col gap-2.5">
                <input type="text" className="w-full rounded-full p-5" placeholder="+7 ___ ___ - __ - __" />
                <button className="rounded-full bg-green-500 p-5 text-white" type="submit">
                  Записаться на груминг
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
