import classNames from 'classnames';
import { Menu as MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './Button';
import { Modal } from './Modal';
import { Responsive } from './Responsive';
import { ResponsiveLogo } from './responsive/ResponsiveLogo';
import { ResponsiveText } from './responsive/ResponsiveText';
import { Strong } from './Strong';

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
        'container flex items-center justify-between border-b border-lightBlue-200 bg-lightGray-300 py-4',
      )}
      {...rest}
    >
      <Modal open={menuOpen}>hello</Modal>
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
