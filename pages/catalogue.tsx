import * as Select from '@radix-ui/react-select';
import classNames from 'classnames';
import { Header } from 'components/Header';
import { Tag } from 'components/Tag';
import { CheckIcon, ChevronDown, ChevronDownIcon, ChevronUpIcon, Filter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ItemCard } from '../components/ItemCard';
import { repeatItems } from '../lib/repeatItems';

const CataloguePage = () => {
  return (
    <>
      <Header />

      <main className="bg-lightGray-100 py-px">
        <div className="cont my-5">
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

        <div className="cont">
          <div className="bg-wiggle my-8 rounded-3xl bg-lightBlue-600 bg-no-repeat px-5 py-8">
            <h2 className="text-xl font-bold text-white">Бесплатная доставка при заказе от 2000₽</h2>
            <p className="text-base text-white">При заказе до 2000₽, доставка 150₽.</p>
          </div>
        </div>

        <div className="cont my-8 flex flex-wrap gap-2">
          {['Консервы', 'Пресервы', 'Лакомства', 'Сухой корм', 'Витамины и добавки'].map((tag) => (
            <Tag name={tag} key={tag} />
          ))}
        </div>

        {/* items */}
        <section className="cont">
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
          <div className="my-6 grid grid-cols-2 gap-2.5">
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
        </section>
      </main>
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
