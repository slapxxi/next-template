import classNames from 'classnames';
import useOutsideClick from 'lib/hooks/useOutsideClick';
import { Heart, Menu, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Badge } from './Badge';

export type NavbarProps = {
  className?: string;
};

export const Navbar = (props: NavbarProps) => {
  const { className = '', ...rest } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  });

  function handleClick() {
    setMenuOpen((o) => !o);
  }

  function handleClickCategory() {
    setSubmenuOpen((o) => !o);
  }

  return (
    <nav
      ref={ref}
      className={classNames(
        className,
        'relative z-10 flex items-center rounded-full bg-white pr-8 text-slate-700',
      )}
      {...rest}
    >
      <button
        className="gap-6 rounded-full bg-mediumBlue-500 p-3 text-white hover:bg-mediumBlue-400 lg:flex lg:px-5"
        onClick={handleClick}
      >
        <span className="hidden lg:block">Каталог</span>
        <Menu />
      </button>
      <ul className="flex gap-6 pl-5">
        {['Акции', 'Новинки', 'Груминг', 'Доставка', 'Адреса магазинов', 'Контакты'].map((link) => (
          <li className="text-med leading-none" key={link}>
            <Link href="#">{link}</Link>
          </li>
        ))}
      </ul>

      <ul className="ml-auto hidden gap-8 lg:flex">
        <li>
          <Heart />
        </li>
        <li>
          <User />
        </li>
        <li>
          <ShoppingCart className="overflow-visible">
            <Badge backgroundColor="blue" fontWeight={700} r={15} fontSize={10}>
              10
            </Badge>
          </ShoppingCart>
        </li>
      </ul>

      <div
        className="absolute top-full left-0 flex translate-y-2.5 overflow-hidden rounded-2xl bg-white"
        style={{ display: menuOpen ? 'flex' : 'none' }}
      >
        <ul className="flex min-w-max flex-col overflow-hidden">
          <li
            className="flex min-w-[235px] px-5 py-2 text-base font-semibold hover:bg-gray-100 hover:text-mediumBlue-500"
            onClick={handleClickCategory}
          >
            Для собак
          </li>
          <li className="navbar__menu-item">Для кошек</li>
          <li className="navbar__menu-item">Для птиц</li>
          <li className="navbar__menu-item">Для грызунов</li>
          <li className="navbar__menu-item">Для рыбок</li>
        </ul>
        {submenuOpen && <Submenu />}
      </div>
    </nav>
  );
};

export const Submenu = () => {
  return (
    <ul className="flex min-w-[235px] flex-col gap-5 border-l py-4 px-5">
      <li className="navbar__submenu-item">Ветаптека</li>
      <li className="navbar__submenu-item">Виды витаминов</li>
      <li className="navbar__submenu-item">Возраст</li>
      <li className="navbar__submenu-item">Гигиена</li>
      <li className="navbar__submenu-item">Материал товара</li>
      <li className="navbar__submenu-item">Наполнители вид</li>
      <li className="navbar__submenu-item">Порода/размер</li>
      <li className="navbar__submenu-item">Серии по уходу</li>
      <li className="navbar__submenu-item">Цвет товара</li>
      <li className="navbar__submenu-item">Шампуни, кондиционеры</li>
    </ul>
  );
};
