import { Header } from 'components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as TSwiper } from 'swiper';
import { Breadcrumbs } from 'components/Breadcrumbs';
import Link from 'next/link';
import * as Tabs from '@radix-ui/react-tabs';
import { FavButton } from 'components/FavButton';
import { repeatItems } from 'lib/repeatItems';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from 'swiper';
import classNames from 'classnames';
import { Button } from 'components/Button';
import { KeyValueTable } from 'components/KeyValueTable';
import { ItemCard } from 'components/ItemCard';
import { SwiperNextButton } from 'components/SwiperNextButton';
import { SwiperPrevButton } from 'components/SwiperPrevButton';
import { useBreakpoints } from 'lib/hooks/useBreakpoints';
import { GroomingBanner } from 'components/GroomingBanner';
import { QuantityInput } from 'components/QuantityInput';
import 'swiper/css';

const ItemPage = () => {
  const [beginning, setBeginning] = useState(true);
  const [end, setEnd] = useState(false);
  const [imageSrc, setImageSrc] = useState('/florida.png');
  const bp = useBreakpoints();

  function handleIndexChange(swiper: TSwiper) {
    setBeginning(swiper.isBeginning);
    setEnd(swiper.isEnd);
  }

  return (
    <>
      <Header />

      <div className="bg-lightGray-100 py-px">
        <div className="cont my-5">
          <Breadcrumbs className="text-slate-200">
            <Link href="/" className="breadcrumbs__link">
              Главная
            </Link>
            <Link href="/" className="breadcrumbs__link">
              Каталог
            </Link>
            <Link href="/" className="breadcrumbs__link">
              Для кошек
            </Link>
            <Link href="/" className="breadcrumbs__link breadcrumbs__link--active">
              Игрушки
            </Link>
          </Breadcrumbs>
        </div>

        <div className="lg:cont lg:flex lg:gap-12">
          {/* gallery */}
          <div className="cont my-5 md:flex md:h-[627px] md:items-start md:justify-between md:gap-5 lg:my-0 lg:flex-1 lg:px-0">
            {/* image container */}
            <div className="relative h-full overflow-hidden rounded-xl bg-white md:order-2 md:flex-1">
              <FavButton className="absolute right-4 top-4" active />
              <svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid slice" className="mx-auto max-h-[627px]">
                <image href={imageSrc} className="h-full w-full" />
              </svg>
            </div>
            <div className="hidden h-full md:flex md:w-20 md:flex-col">
              <Swiper
                spaceBetween={10}
                slidesPerView={6}
                onActiveIndexChange={handleIndexChange}
                direction="vertical"
              >
                {repeatItems(['/florida.png', '/probalance.webp', '/monge.png'], 3).map((image, i) => (
                  <SwiperSlide key={i} onClick={() => setImageSrc(image)}>
                    <div className="relative overflow-hidden rounded-xl bg-white" key={i}>
                      <svg viewBox="0 0 20 20" width={80} height={80}>
                        <image href={image} className="h-full w-full" />
                      </svg>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* thumbs mobile */}
            <div className="my-2.5 flex gap-2 md:order-1 md:my-0 md:hidden">
              <div className={classNames('md:hidden', beginning && 'hidden')}>
                <button className="carousel__button prev-el data-[beginning=true]:hidden">
                  <ChevronLeft />
                </button>
              </div>
              <Swiper
                modules={[Navigation]}
                navigation={{ nextEl: '.next-el', prevEl: '.prev-el' }}
                slidesPerView={bp.md ? 5 : beginning || end ? 5 : 4}
                spaceBetween={8}
                className="flex-1"
                onActiveIndexChange={handleIndexChange}
                direction={bp.md ? 'vertical' : 'horizontal'}
              >
                {repeatItems(['/florida.png', '/probalance.webp', '/monge.png'], 3).map((image, i) => (
                  <SwiperSlide key={i} onClick={() => setImageSrc(image)}>
                    <div className="relative overflow-hidden rounded-xl bg-white md:h-20 md:w-20" key={i}>
                      <svg viewBox="0 0 20 20">
                        <image href={image} className="h-full w-full" />
                      </svg>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={classNames('md:hidden', end && 'hidden')}>
                <button className="carousel__button next-el data-[end=true]:hidden">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* main description */}
          <div className="cont my-5 lg:my-0 lg:flex-1 lg:px-0">
            <h2 className="text-base font-semibold text-slate-500">FLORIDA</h2>
            <h2 className="my-2.5 text-2xl font-bold">
              Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой
            </h2>
            <div className="my-4 flex gap-1.5 md:hidden">
              <span className="option option--active">400г</span>
              <span className="option">800г</span>
              <span className="option">1200г</span>
              <span className="option">3500г</span>
            </div>
            <div className="my-8 flex justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <h2 className="item__price text-2xl">3 446 ₽</h2>
                  <h2 className="item__prev_price text-base font-normal">3 446</h2>
                </div>
                <div className="item__discount">-25%</div>
              </div>
              <QuantityInput value={1} className="md:hidden" />
            </div>
            <div className="md:flex md:items-center md:justify-between">
              <div className="my-4 hidden gap-1.5 md:flex">
                <span className="option option--active">400г</span>
                <span className="option">800г</span>
                <span className="option">1200г</span>
                <span className="option">3500г</span>
              </div>
              <div className="md:flex md:gap-4">
                <QuantityInput value={1} className="hidden md:flex md:gap-4" />
                <Button variant="fill" className="w-full py-6 text-base md:w-auto md:py-3 md:px-8">
                  В корзину <ShoppingCart className="h-5 w-5" />
                </Button>
              </div>
            </div>
            {/* table */}
            <div className="my-10">
              <h2 className="text-lg">Характеристики</h2>
              <KeyValueTable
                data={{
                  Бренд: 'FLORIDA',
                  'Класс корма': 'Топ',
                  Возраст: '1-5 лет',
                  'Страна производства': 'Китай',
                  Особенности: 'Для стерилизаванных',
                  Показания: 'Диетический',
                  Порода: 'круглогодичный',
                }}
                className="my-4 md:hidden"
              />
              <div className="hidden md:flex md:gap-4">
                <KeyValueTable
                  data={{
                    Бренд: 'FLORIDA',
                    'Класс корма': 'Топ',
                    Возраст: '1-5 лет',
                    'Страна производства': 'Китай',
                  }}
                  className="my-4 flex-1"
                />
                <KeyValueTable
                  data={{
                    Особенности: 'Для стерилизаванных',
                    Показания: 'Диетический',
                    Порода: 'круглогодичный',
                  }}
                  className="my-4 flex-1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="cont my-16">
          <TabsDemo />
        </div>

        {/* popular items */}
        <section className="cont my-12 mt-0">
          <Swiper
            slidesPerView={bp.md ? (bp.lg ? 4 : 3) : 2}
            spaceBetween={10}
            wrapperClass="my-4 mt-0 isolate py-px"
          >
            <div className="isolate mt-8 mb-6 flex justify-between" slot="container-start">
              <h2 className="section_title md:section_title--decorated-right">Популярные товары</h2>
              <div className="hidden md:flex md:gap-2.5">
                <SwiperPrevButton className="carousel__button">
                  <ChevronLeft />
                </SwiperPrevButton>
                <SwiperNextButton className="carousel__button">
                  <ChevronRight />
                </SwiperNextButton>
              </div>
            </div>
            {repeatItems(
              [
                {
                  title: 'FLORIDA',
                  description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                  img: '/florida.png',
                  price: 3440,
                  previousPrice: 8320,
                  discount: 0.25,
                },
                {
                  title: 'Monge',
                  description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                  img: '/monge.png',
                  price: 3440,
                  previousPrice: 8320,
                },
                {
                  title: 'ProBalance',
                  description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                  img: '/probalance.webp',
                  price: 3440,
                  previousPrice: 8320,
                  discount: 0.5,
                },
              ],
              3,
            ).map((item, i) => (
              <SwiperSlide>
                <ItemCard {...item} key={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <div className="lg:cont py-16 md:px-5">
          <GroomingBanner />
        </div>
      </div>
    </>
  );
};

const TabsDemo = () => (
  <Tabs.Root className="tabs" defaultValue="description">
    <Tabs.List className="tabs__list" aria-label="Manage your account">
      <Tabs.Trigger className="tabs__trigger" value="description">
        Описание
      </Tabs.Trigger>
      <Tabs.Trigger className="tabs__trigger" value="brand">
        О бренде
      </Tabs.Trigger>
      <Tabs.Trigger className="tabs__trigger" value="shipping">
        Доставка
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      className="tabs__content md:flex md:flex-col lg:flex-row lg:justify-between"
      value="description"
    >
      <div className="lg:basis-7/12">
        <h2 className="text-base text-slate-500">Артикул 53974</h2>
        <p className="content__text my-2">
          <strong>Florida Salmon & Blueberry</strong> - сухой корм супер-премиум-класса с лососем и черникой
          для стерилизованных кошек в возрасте от 1 до 8 лет. Сбалансированное полнорационное питание
          заботится о коже и шерсти и способствует здоровому пищеварению. В рационе кормов Florida
          используется только белок животного происхождения.
        </p>
        <h2 className="content__title my-4 mt-8">Преимущества корма:</h2>
        <ul className="list my-5">
          {repeatItems(
            [
              { title: 'натуральные антиоксиданты', description: 'ягоды, фрукты' },
              { title: 'поддержка опорно-двигательной системы', description: 'глюкозамин, хондроитин' },
            ],
            2,
          ).map((item, i) => (
            <li className="list__item flex flex-col" key={i}>
              <span className="content__text">{item.title}</span>
              <em className="content__em">{item.description}</em>
            </li>
          ))}
        </ul>
        <h2 className="content__title mt-8 mb-4">Состав</h2>
        <p className="content__text">
          Дегидрированное мясо океанической рыбы 26%, дегидрированное мясо курицы 10%, рис, маис, куриный жир
          , гидролизованный лосось 5%, масло лососевых пород, минеральные вещества, пивные дрожжи, сушёная
          мякоть свёклы, сушеная ромашка, яйца сушеные, семя льна, витамины, сушёная черника, инулин (источник
          фруктоолигосахаридов), экстракт Юкки Шидигера, таурин.
        </p>
      </div>

      {/* tables */}
      <div className="md:flex md:gap-4 lg:shrink-0 lg:basis-4/12 lg:flex-col">
        <div className="mt-8 md:flex-1 lg:mt-0 lg:grow-0">
          <h2 className="content__title mb-4">Характеристики</h2>
          <KeyValueTable
            collapsible
            data={{
              Бренд: 'FLORIDA',
              'Класс корма': 'Топ',
              Возраст: '1-5 лет',
              'Страна производства': 'Китай',
              Особенности: 'Для стерилизаванных',
              Показания: 'Диетический',
              Порода: 'круглогодичный',
            }}
            className="my-4"
          />
        </div>
        <div className="mt-8 md:flex-1 lg:mt-0 lg:grow-0">
          <h2 className="content__title mb-4">Питательная ценность</h2>
          <KeyValueTable
            collapsible
            maxItems={4}
            data={{
              Бренд: 'FLORIDA',
              'Класс корма': 'Топ',
              Возраст: '1-5 лет',
              'Страна производства': 'Китай',
              Особенности: 'Для стерилизаванных',
              Показания: 'Диетический',
              Порода: 'круглогодичный',
            }}
            className="my-4"
          />
        </div>
      </div>
    </Tabs.Content>
    <Tabs.Content className="tabs__content" value="brand"></Tabs.Content>
    <Tabs.Content className="tabs__content" value="shipping"></Tabs.Content>
  </Tabs.Root>
);

export default ItemPage;
