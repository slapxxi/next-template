import { Button } from 'components/Button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimalCard } from '../components/AnimalCard';
import { GroomingBanner } from '../components/GroomingBanner';
import { Header } from '../components/Header';
import { PinIcon } from '../components/icons/PinIcon';
import { ItemCard } from '../components/ItemCard';
import { SectionTitle } from '../components/SectionTitle';
import { SwiperNextButton } from '../components/SwiperNextButton';
import { SwiperPrevButton } from '../components/SwiperPrevButton';
import { Tag } from '../components/Tag';
import { useBreakpoints } from '../lib/hooks/useBreakpoints';
import 'swiper/css';

const IndexPage = () => {
  const bp = useBreakpoints();

  return (
    <>
      <Header variant="fill" />

      <main>
        <section className="bg-lightBlue-500 text-white">
          <div className="hero">
            <div className="lg:w-1/2">
              <h2 className="hero__title mb-2.5 md:mb-5">Всё для счастья ваших любимцев</h2>
              <p className="hero__text mb-5 text-white md:mb-7">Новые скидки каждый день!</p>
              <Link href="/catalogue">
                <Button variant="fill-bright" className="my-5">
                  <span>В каталог</span>
                  <ArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="bg-lightGray-100 py-px">
          <section className="cont my-8">
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

          <section className="my-16 md:my-28">
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

        <div className="bg-white py-px">
          <section className="my-12 md:my-20 lg:my-20">
            <img src="brands-animated.svg" className="h-14 w-full md:h-20 lg:h-28" />
          </section>

          <section className="md:my-26 cont my-12 lg:flex lg:justify-between lg:gap-4">
            <div className="lg:basis-5/12">
              <h2 className="section_title">Теперь ещё удобнее!</h2>
              <p className="section_text my-4 md:my-5">
                Заказывайте в магазине «Матроскин» не выходя из дома! Все товары лицензированы и проходят
                проверку оригинальности. Заказывайте в магазине «Матроскин» не выходя из дома!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 lg:basis-7/12 lg:gap-6">
              {[
                {
                  text: 'Широкий выбор',
                  icon: 'wide-range.svg',
                },
                {
                  text: 'Доступные цены',
                  icon: 'affordable-prices.svg',
                },
                {
                  text: 'Уникальность товаров',
                  icon: 'goods-uniqueness.svg',
                },
                {
                  text: 'Быстрая доставка',
                  icon: 'quick-delivery.svg',
                },
              ].map((item, i) => (
                <div
                  className="flex aspect-square flex-col items-center justify-center gap-5 rounded-2xl
                  bg-slate-100 p-2.5 md:aspect-auto md:flex-row md:justify-start md:px-6 md:py-5"
                  key={i}
                >
                  <img src={item.icon} className="h-10 w-10" />
                  <p className="text-center text-base font-medium md:text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* special offers */}
          <section className="my-12 md:my-28">
            <div className="cont px-2.5 md:px-5">
              <div className="bg-curly md:bg-curly-md rounded-2xl bg-lightBlue-500 bg-no-repeat p-2.5 md:px-10 md:pt-6 md:pb-8">
                <Swiper slidesPerView={bp.md ? (bp.lg ? 2 : 1) : 2} spaceBetween={10}>
                  <header
                    className="my-5 flex items-center justify-between md:justify-start"
                    slot="container-start"
                  >
                    <SwiperPrevButton className="flex items-center justify-center rounded-full border p-1.5 text-white md:ml-auto md:p-3">
                      <ChevronLeft size={18} />
                    </SwiperPrevButton>
                    <h2 className="section_title text-white md:-order-1">Акции</h2>
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
            </div>
          </section>

          {/* addresses section */}
          <section className="cont my-16 md:my-28 lg:flex lg:items-center lg:gap-10">
            <div className="lg:order-2 lg:basis-5/12">
              <h2 className="section_title md:text-center lg:text-left">Заходите в гости!</h2>
              <p className="section_text my-4 mx-auto max-w-prose md:my-8 md:text-center lg:mx-0 lg:text-left">
                Любите ходить по магазинам или хотите оформить самовывоз? Отлично! Мы работаем с 9 утра до 9
                вечера, наши магазины распологаютс по адресам:
              </p>
              <ul className="flex flex-col gap-2.5 md:flex-row md:justify-between lg:flex-col lg:gap-4">
                {['Северная улица, 74А', 'Омская улица, 12', 'Профсоюзная улица, 7'].map((addr, i) => (
                  <li className="flex items-center gap-2 text-base" key={i}>
                    <PinIcon className="text-mediumBlue-500" />
                    {addr}
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-4 md:my-10 lg:order-1 lg:my-0 lg:basis-7/12">
              <img src="/map.png" className="w-full" />
            </div>
          </section>
        </div>

        <div className="bg-slate-100 py-px">
          {/* news section */}
          <section className="my-10 mb-16 md:my-24">
            <div className="cont">
              <h2 className="section_title mb-4 md:mb-8">Новости и полезные статьи</h2>
            </div>
            <div className="px-cont flex snap-x snap-mandatory gap-2.5 overflow-x-scroll">
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
                {
                  title: 'Знакомство с брендом Wanpy',
                  text: 'Нежное пюре с лососем и тунцом или с треской и тунцом для кошек - ни с чем несравнимое удовольствие для мурлык Лакомство, которое можно каждый день',
                  img: 'news-2.png',
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
        </div>

        {/* grooming banner */}
        <div className="lg:cont bg-white py-16 md:px-5">
          <GroomingBanner />
        </div>
      </main>
    </>
  );
};

export default IndexPage;
