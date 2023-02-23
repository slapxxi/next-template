import classNames from 'classnames';
import { Menu as MenuIcon, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useNoScroll } from '../lib/hooks/useNoScroll';
import { pickValue } from '../lib/pickValue';
import { Button } from './Button';
import { Divider } from './Divider';
import { ViberIcon } from './icons/ViberIcon';
import { VkIcon } from './icons/VkIcon';
import { List, ListItem } from './List';
import { Logo } from './Logo';
import { Modal } from './Modal';
import { Navbar } from './Navbar';
import { NavbarSpacer } from './NavbarSpacer';
import { Responsive } from './Responsive';
import { ResponsiveLogo } from './responsive/ResponsiveLogo';
import { ResponsiveText } from './responsive/ResponsiveText';
import { Strong } from './Strong';
import { Text } from './Text';

export type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: 'normal' | 'fill';
};

export const Header = (props: HeaderProps) => {
  const { children, className = '', variant = 'normal', ...rest } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  useNoScroll(menuOpen);

  function handleClickMenu() {
    setMenuOpen((o) => !o);
  }

  return (
    <header
      className={classNames(
        className,
        variant === 'normal' && 'border-lightGray-200 bg-lightGray-100 text-black md:border-none',
        variant === 'fill' && 'border-lightBlue-400 bg-lightBlue-500 text-white md:border-none',
        'border-b py-4 md:pb-px',
      )}
      {...rest}
    >
      <div className="cont flex items-center justify-between">
        <Link href="/">
          <ResponsiveLogo variant={pickValue(variant, ['normal', 'normal'], ['fill', 'bright'])} />
        </Link>

        <Divider height={40} width={1} className="hidden text-slate-200 lg:block" />

        <p
          className={classNames(
            className,
            'hidden text-xs lg:block',
            variant === 'normal' && 'text-slate-500',
            variant === 'fill' && 'text-white',
          )}
        >
          Зоомагазин и груминг салон <br /> в Нижневартовске
        </p>

        <Button
          variant={pickValue(variant, ['fill', 'outline-bright'], ['normal', 'outline'])}
          className="hidden border-2 px-5 py-2.5 text-med md:block"
        >
          Запись на груминг онлайн
        </Button>

        <div className="flex items-center gap-2.5">
          <p className="text-sm font-semibold md:font-normal md:text-med lg:text-base">+7 (982) 537-81-27</p>
          <button
            className={classNames(
              className,
              'hidden rounded-full p-2 md:block',
              variant === 'normal' && 'bg-white text-mediumBlue-500',
              variant === 'fill' && 'bg-lightBlue-400 text-white',
            )}
          >
            <ViberIcon />
          </button>
          <button
            className={classNames(
              className,
              'hidden rounded-full p-2 md:block',
              variant === 'normal' && 'bg-white text-mediumBlue-500',
              variant === 'fill' && 'bg-lightBlue-400 text-white',
            )}
          >
            <VkIcon />
          </button>
        </div>

        <Button variant="icon" onClick={handleClickMenu} className="md:hidden">
          <MenuIcon />
        </Button>

        <div className="relative hidden lg:flex">
          <label htmlFor="search" className="absolute left-5 top-1/2 -translate-y-1/2 text-mediumBlue-500">
            <Search />
          </label>
          <input
            type="text"
            placeholder="Поиск по каталогу"
            id="search"
            className="rounded-full bg-white py-2 pl-14 pr-5 text-base text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="cont my-5 hidden md:block lg:mb-0">
        <Navbar />
      </div>

      {/* menu */}
      <Modal
        open={menuOpen}
        className="menu fixed inset-0 flex flex-col overflow-y-scroll bg-lightBlue-600 md:hidden"
      >
        <header className="cont sticky top-0 z-10 flex w-full items-center justify-between border-b border-lightBlue-500 bg-lightBlue-600 py-4">
          <Logo variant="bright" />
          <Responsive component={Strong} md={{ weight: 400 }} className="text-white">
            <ResponsiveText>+7 (982) 537-81-27</ResponsiveText>
          </Responsive>
          <Button variant="icon" onClick={handleClickMenu}>
            <X />
          </Button>
        </header>
        <div className="flex flex-1 flex-col py-4">
          <List className="cont">
            <ListItem className="menu__list-item">
              <Text size="xl">Каталог</Text>
              <List className="cont">
                <ListItem className="menu__list-item">
                  <Text size="xl">Для кошек</Text>
                  <List className="cont">
                    <ListItem className="menu__list-item">
                      <Text size="xl">Для собак</Text>
                    </ListItem>
                    <ListItem className="menu__list-item">
                      <Text size="xl">Для птиц</Text>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem className="menu__list-item">
                  <Text size="xl">Для собак</Text>
                </ListItem>
                <ListItem className="menu__list-item">
                  <Text size="xl">Для птиц</Text>
                </ListItem>
              </List>
            </ListItem>
            <ListItem className="menu__list-item">
              <Text size="xl">Акции</Text>
            </ListItem>
            <ListItem className="menu__list-item">
              <Text size="xl">Новинки</Text>
            </ListItem>
            <ListItem className="menu__list-item">
              <Text size="xl">Груминг </Text>
            </ListItem>
            <ListItem className="menu__list-item">
              <Text size="xl">Доставка </Text>
            </ListItem>
            <ListItem className="menu__list-item">
              <Text size="xl">Адреса магазинов</Text>
            </ListItem>
            <ListItem className="menu__list-item">
              <Text size="xl">Контакты</Text>
            </ListItem>
          </List>

          <div className="cont mt-auto flex w-full flex-col gap-5 py-5">
            <div className="flex items-center justify-center gap-2.5">
              <Text className="text-white" size="md">
                +7 (982) 537-81-27
              </Text>
              <Button variant="circle-bright">
                <ViberIcon size={20} />
              </Button>
              <Button variant="circle-bright">
                <VkIcon size={20} />
              </Button>
            </div>
            <Button variant="outline-bright" center>
              <Text size="md">Запись на груминг онлайн</Text>
            </Button>
          </div>
        </div>
        <NavbarSpacer />
      </Modal>
    </header>
  );
};
