import classNames from 'classnames';
import { ChevronUp, ChevronDown, Search } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

import { Checkbox } from 'components/Checkbox';
import { Divider } from 'components/Divider';
import { Slider } from 'components/Slider';

export type SidebarProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Sidebar = (props: SidebarProps) => {
  const { children, className = '', ...rest } = props;

  return (
    <aside className={classNames(className)} {...rest}>
      <Accordion.Root className="w-full" type="multiple" defaultValue={['brand', 'price-range']}>
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
                className="search_input__input w-full"
                placeholder="Поиск по брендам"
              />
            </div>
            <ul className="my-5 flex flex-col">
              {['Brit', 'Advance', 'ProPlan', 'Farmina', 'Royal Canin', 'Happy'].map((brand) => (
                <li className="flex select-none items-center gap-2.5 leading-none" key={brand}>
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
              {['Курица', 'Индейка', 'Рыба', 'Говядина', 'Свинина', 'Злаки'].map((flavor) => (
                <li className="flex items-center gap-2.5 leading-none" key={flavor}>
                  <Checkbox id={flavor.toLowerCase()} />
                  <label htmlFor={flavor.toLowerCase()}>{flavor}</label>
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
  );
};
