import * as Select from '@radix-ui/react-select';
import classNames from 'classnames';
import { Header } from 'components/Header';
import { Tag } from 'components/Tag';
import {
  CheckIcon,
  ChevronDown,
  ChevronDownIcon,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronUpIcon,
  Filter,
  LayoutDashboard,
  LayoutGrid,
  LayoutList,
  Search,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GroomingBanner } from '../components/GroomingBanner';
import { ItemCard } from '../components/ItemCard';
import { repeatItems } from '../lib/repeatItems';
import 'swiper/css';
import { Button } from '../components/Button';
import { Divider } from '../components/Divider';
import { SwiperNextButton } from '../components/SwiperNextButton';
import { SwiperPrevButton } from '../components/SwiperPrevButton';
import * as Accordion from '@radix-ui/react-accordion';
import { useBreakpoints } from '../lib/hooks/useBreakpoints';
import { Checkbox } from '../components/Checkbox';
import { Slider } from '../components/Slider';

const CataloguePage = () => {
  const bp = useBreakpoints();

  return (
    <>
      <Header />
      <div className="px-cont bg-lightGray-100 py-10 lg:grid lg:grid-cols-[256px_1fr] lg:gap-12">
        <aside className="hidden lg:flex">
          <Accordion.Root className="w-full" type="single" defaultValue="brand" collapsible>
            <Accordion.Item value="brand" className="group">
              <Accordion.Trigger className="sidebar__trigger">
                <span>Бренд</span>
                <ChevronUp size={16} className="sidebar__chevron sidebar__chevron--up" />
                <ChevronDown size={16} className="sidebar__chevron sidebar__chevron--down" />
              </Accordion.Trigger>
              <Accordion.Content className="sidebar__content">
                <div className="search_input">
                  <label htmlFor="search" className="search_input__label">
                    <Search />
                  </label>
                  <input
                    id="search"
                    type="text"
                    className="search_input__input"
                    placeholder="Поиск по брендам"
                  />
                </div>
                <ul className="my-5 flex flex-col">
                  {['Brit', 'Advance', 'ProPlan', 'Farmina', 'Royal Canin', 'Happy'].map((brand) => (
                    <li className="flex select-none items-center gap-2.5 leading-none">
                      <Checkbox id={brand.toLowerCase()} />
                      <label htmlFor={brand.toLowerCase()} className="py-2">
                        {brand}
                      </label>
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="price-range" className="group">
              <Accordion.Trigger className="sidebar__trigger">
                <span>Ценовой диапазон</span>
                <ChevronUp size={16} className="sidebar__chevron sidebar__chevron--up" />
                <ChevronDown size={16} className="sidebar__chevron sidebar__chevron--down" />
              </Accordion.Trigger>
              <Accordion.Content className="sidebar__content">
                <Slider defaultValue={[0, 100]} />
                <div className="my-4 flex items-center gap-2">
                  <input
                    type="number"
                    min={0}
                    className="w-4 flex-1 rounded-md border p-1.5 text-center"
                    placeholder={new Intl.NumberFormat('ru', {
                      currency: 'RUB',
                      style: 'currency',
                      maximumFractionDigits: 0,
                    }).format(100)}
                  />
                  <Divider height={2} width={10} className="shrink-0 text-slate-300" />
                  <input
                    type="number"
                    min={0}
                    className="w-4 flex-1 rounded-md border p-1.5 text-center"
                    placeholder={new Intl.NumberFormat('ru', {
                      currency: 'RUB',
                      style: 'currency',
                      maximumFractionDigits: 0,
                    }).format(100)}
                  />
                </div>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="flavor" className="group">
              <Accordion.Trigger className="sidebar__trigger">
                <span>Вкус</span>
                <ChevronUp size={16} className="sidebar__chevron sidebar__chevron--up" />
                <ChevronDown size={16} className="sidebar__chevron sidebar__chevron--down" />
              </Accordion.Trigger>
              <Accordion.Content className="sidebar__content">
                <ul className="my-5 flex flex-col gap-3">
                  {['Курица', 'Индейка', 'Рыба', 'Говядина', 'Свинина', 'Злаки'].map((brand) => (
                    <li className="flex items-center gap-2.5 leading-none">
                      <Checkbox id={brand.toLowerCase()} />
                      <label htmlFor={brand.toLowerCase()}>{brand}</label>
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="recommendations" className="group">
              <Accordion.Trigger className="sidebar__trigger">
                <span>Показания</span>
                <ChevronUp size={16} className="sidebar__chevron sidebar__chevron--up" />
                <ChevronDown size={16} className="sidebar__chevron sidebar__chevron--down" />
              </Accordion.Trigger>
            </Accordion.Item>
            <Accordion.Item value="age" className="group">
              <Accordion.Trigger className="sidebar__trigger">
                <span>Возраст</span>
                <ChevronUp size={16} className="sidebar__chevron sidebar__chevron--up" />
                <ChevronDown size={16} className="sidebar__chevron sidebar__chevron--down" />
              </Accordion.Trigger>
            </Accordion.Item>
            <Accordion.Item value="class" className="group">
              <Accordion.Trigger className="sidebar__trigger">
                <span>Класс корма</span>
                <ChevronUp size={16} className="sidebar__chevron sidebar__chevron--up" />
                <ChevronDown size={16} className="sidebar__chevron sidebar__chevron--down" />
              </Accordion.Trigger>
            </Accordion.Item>
          </Accordion.Root>
        </aside>

        <main className="bg-lightGray-100 py-px lg:px-0">
          <div className="cont my-5 md:my-0 lg:mx-0 lg:px-0">
            <Breadcrumbs className="text-slate-400">
              <Link href="/" className="breadcrumbs__link">
                Главная
              </Link>
              <Link href="#" className="breadcrumbs__link">
                Для кошек
              </Link>
              <Link href="#" className="breadcrumbs__link breadcrumbs__link--active">
                Корм
              </Link>
            </Breadcrumbs>
          </div>
          {/* delivery banner */}
          <div className="cont my-8 md:my-5 lg:mx-0 lg:px-0">
            <div
              className="bg-wiggle rounded-3xl bg-lightBlue-600 bg-no-repeat
              px-5 py-8 md:flex md:gap-10 md:bg-cover md:bg-[100px_-200px] md:pr-20"
            >
              <div>
                <h2 className="text-xl font-bold text-white md:mb-5 md:text-3xl">
                  Бесплатная доставка при заказе от 2000₽
                </h2>
                <p className="text-base text-white">При заказе до 2000₽, доставка 150₽.</p>
              </div>
              <img src="/free-delivery.svg" className="hidden md:block" />
            </div>
          </div>
          {/* tags */}
          <div className="cont my-8 flex flex-wrap gap-2 lg:mx-0 lg:px-0">
            {['Консервы', 'Пресервы', 'Лакомства', 'Сухой корм', 'Витамины и добавки'].map((tag) => (
              <Tag name={tag} key={tag} className="md:tag--size-lg" />
            ))}
          </div>
          {/* items */}
          <section className="cont lg:mx-0 lg:px-0">
            <div className="flex items-end justify-between">
              <h2 className="section_title">Игрушки</h2>
              <span className="section_text">203 товара</span>
            </div>
            {/* filter */}
            <nav className="mb-6 mt-4 flex items-center justify-between rounded-xl bg-white p-2.5">
              <div className="flex items-center gap-1.5">
                <button className="button button--var-icon_bright" disabled>
                  <Filter fill="currentColor" />
                </button>
                <span className="text-sm text-gray-500">Фильтр</span>
              </div>
              {/* number per page */}
              <div className="hidden md:flex md:gap-2">
                <span>Показывать по:</span>
                <Breadcrumbs className="text-slate-300" separator={<Divider width={1} height={14} />}>
                  <a className="filter__link">9</a>
                  <a className="filter__link--active">12</a>
                  <a className="filter__link">18</a>
                  <a className="filter__link">24</a>
                </Breadcrumbs>
              </div>
              {/* layout type */}
              <div className="hidden text-slate-400 md:flex md:gap-2.5">
                <button className="hover:text-mediumBlue-500">
                  <LayoutList size={18} />
                </button>
                <button className="text-mediumBlue-500 hover:text-mediumBlue-500">
                  <LayoutGrid size={18} />
                </button>
                <button className="hover:text-mediumBlue-500">
                  <LayoutDashboard size={18} />
                </button>
              </div>
              {/* category select */}
              <div>
                <Select.Root>
                  <Select.Trigger className="flex gap-1 rounded p-2" aria-label="Category">
                    <Select.Value placeholder="Категория" />
                    <Select.Icon className="text-slate-500">
                      <ChevronDown />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content className="overflow-hidden rounded-md bg-white shadow">
                      <Select.ScrollUpButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
                        <ChevronUpIcon />
                      </Select.ScrollUpButton>
                      <Select.Viewport className="p-[5px]">
                        <Select.Group>
                          <Select.Label className="text-mauve11 px-[25px] text-xs leading-[25px]">
                            Fruits
                          </Select.Label>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </Select.Group>
                        <Select.Separator className="bg-violet6 m-[5px] h-[1px]" />
                        <Select.Group>
                          <Select.Label className="text-mauve11 px-[25px] text-xs leading-[25px]">
                            Vegetables
                          </Select.Label>
                          <SelectItem value="aubergine">Aubergine</SelectItem>
                          <SelectItem value="broccoli">Broccoli</SelectItem>
                          <SelectItem value="carrot" disabled>
                            Carrot
                          </SelectItem>
                          <SelectItem value="courgette">Courgette</SelectItem>
                          <SelectItem value="leek">Leek</SelectItem>
                        </Select.Group>
                        <Select.Separator className="bg-violet6 m-[5px] h-[1px]" />
                        <Select.Group>
                          <Select.Label className="text-mauve11 px-[25px] text-xs leading-[25px]">
                            Meat
                          </Select.Label>
                          <SelectItem value="beef">Beef</SelectItem>
                          <SelectItem value="chicken">Chicken</SelectItem>
                          <SelectItem value="lamb">Lamb</SelectItem>
                          <SelectItem value="pork">Pork</SelectItem>
                        </Select.Group>
                      </Select.Viewport>
                      <Select.ScrollDownButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
                        <ChevronDownIcon />
                      </Select.ScrollDownButton>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>
            </nav>
            {/* item cards */}
            <div className="my-6 grid grid-cols-2 gap-2.5 md:grid-cols-3">
              {repeatItems(
                [
                  {
                    title: 'Monge',
                    price: 3446,
                    prevPrice: 8699,
                    discount: 0.25,
                    img: 'monge.png',
                    description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                  },
                  {
                    title: 'FLORIDA',
                    price: 3446,
                    prevPrice: 8699,
                    discount: 0.25,
                    img: 'florida.png',
                    description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                  },
                ],
                8,
              ).map((item, i) => (
                <ItemCard
                  key={i}
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  previousPrice={item.prevPrice}
                  description={item.description}
                  discount={item.discount}
                />
              ))}
            </div>
            <Button variant="outline" className="mx-auto border-2 px-8 py-4">
              Загрузить ещё
            </Button>
          </section>
        </main>
      </div>

      {/* grooming banner */}
      <div className="lg:cont py-16 md:px-5">
        <GroomingBanner />
      </div>

      {/* previously browsed section */}
      <section className="cont my-12">
        <Swiper
          slidesPerView={bp.md ? (bp.lg ? 4 : 3) : 2}
          spaceBetween={10}
          wrapperClass="my-4 isolate py-px"
        >
          <div className="cont isolate mt-12 flex justify-between" slot="container-start">
            <h2 className="section_title md:section_title--decorated-right">
              Вы смотрели<span className="hidden md:inline">/Вам понравится</span>
            </h2>
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
                img: 'florida.png',
                price: 3440,
                previousPrice: 8320,
                discount: 0.25,
              },
              {
                title: 'Monge',
                description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                img: 'monge.png',
                price: 3440,
                previousPrice: 8320,
              },
              {
                title: 'ProBalance',
                description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                img: 'probalance.webp',
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
    </>
  );
};

type SelectItemProps = {
  children: React.ReactNode;
  value: string;
  className?: string;
  disabled?: boolean;
};

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classNames(
          'text-violet11 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 relative flex h-[25px] select-none items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] leading-none data-[disabled]:pointer-events-none data-[disabled]:text-slate-300 data-[highlighted]:outline-none',
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

export default CataloguePage;
