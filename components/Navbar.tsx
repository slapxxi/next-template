import classNames from 'classnames';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import useOutsideClick from '../lib/hooks/useOutsideClick';
import styles from './Navbar.module.scss';

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
        'relative z-10 flex items-center rounded-full bg-white text-slate-700',
      )}
      {...rest}
    >
      <button
        className="rounded-full bg-mediumBlue-500 p-3 text-white hover:bg-mediumBlue-400"
        onClick={handleClick}
      >
        <Menu />
      </button>
      <ul className="flex gap-6 pl-5">
        {['Акции', 'Новинки', 'Груминг', 'Доставка', 'Адреса магазинов', 'Контакты'].map((link) => (
          <li className="text-med leading-none" key={link}>
            <Link href="#">{link}</Link>
          </li>
        ))}
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
          <li className={classNames(styles.menu__li)}>Для кошек</li>
          <li className={classNames(styles.menu__li)}>Для птиц</li>
          <li className={classNames(styles.menu__li)}>Для грызунов</li>
          <li className={classNames(styles.menu__li)}>Для рыбок</li>
        </ul>
        {submenuOpen && <Submenu />}
      </div>
    </nav>
  );
};

export type SubmenuProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Submenu = (props: SubmenuProps) => {
  const { children, className = '', ...rest } = props;
  return (
    <ul className="flex min-w-[235px] flex-col gap-5 border-l py-4 px-5">
      <li className={classNames(styles.submenu__li)}>Ветаптека</li>
      <li className={classNames(styles.submenu__li)}>Виды витаминов</li>
      <li className={classNames(styles.submenu__li)}>Возраст</li>
      <li className={classNames(styles.submenu__li)}>Гигиена</li>
      <li className={classNames(styles.submenu__li)}>Материал товара</li>
      <li className={classNames(styles.submenu__li)}>Наполнители вид</li>
      <li className={classNames(styles.submenu__li)}>Порода/размер</li>
      <li className={classNames(styles.submenu__li)}>Серии по уходу</li>
      <li className={classNames(styles.submenu__li)}>Цвет товара</li>
      <li className={classNames(styles.submenu__li)}>Шампуни, кондиционеры</li>
    </ul>
  );
};
