import classNames from 'classnames';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './Button';
import { ViberIcon } from './icons/ViberIcon';
import { VkIcon } from './icons/VkIcon';
import { List, ListItem } from './List';
import { Logo } from './Logo';
import { Modal } from './Modal';
import { NavbarSpacer } from './NavbarSpacer';
import { Responsive } from './Responsive';
import { ResponsiveLogo } from './responsive/ResponsiveLogo';
import { ResponsiveText } from './responsive/ResponsiveText';
import { Strong } from './Strong';
import { Text } from './Text';

export type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Header = (props: HeaderProps) => {
  const { children, className = '', ...rest } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClickMenu() {
    setMenuOpen((o) => !o);
  }

  return (
    <header
      className={classNames(
        className,
        'container flex items-center justify-between border-b border-lightBlue-100 bg-lightGray-100 py-4',
      )}
      {...rest}
    >
      <Modal open={menuOpen} className="menu fixed inset-0 flex flex-col overflow-y-scroll bg-lightBlue-600">
        <header className="container sticky top-0 z-10 flex items-center justify-between border-b border-lightBlue-500 bg-lightBlue-600 py-4">
          <Logo variant="bright" />
          <Responsive component={Strong} md={{ weight: 400 }} className="text-white">
            <ResponsiveText>+7 (982) 537-81-27</ResponsiveText>
          </Responsive>
          <Button variant="icon" onClick={handleClickMenu}>
            <X />
          </Button>
        </header>

        <div className="flex flex-1 flex-col py-4">
          <List className="container">
            <ListItem className="menu__list-item">
              <Text size="xl">Каталог</Text>
              <List className="container">
                <ListItem className="menu__list-item">
                  <Text size="xl">Для кошек</Text>
                  <List className="container">
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

          <div className="container mt-auto flex flex-col gap-5">
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
            <Button variant="outline-bright">
              <Text size="md">Запись на груминг онлайн</Text>
            </Button>
          </div>
        </div>
        <NavbarSpacer />
      </Modal>

      <ResponsiveLogo />
      <Responsive component={Strong} md={{ weight: 400 }}>
        <ResponsiveText>+7 (982) 537-81-27</ResponsiveText>
      </Responsive>
      <Button variant="icon" onClick={handleClickMenu}>
        <MenuIcon />
      </Button>
    </header>
  );
};
