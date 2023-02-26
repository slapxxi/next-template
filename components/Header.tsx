import classNames from 'classnames';
import * as Select from '@radix-ui/react-select';
import { Logo } from 'components/Logo';
import { ChevronDown, ChevronUp, Check, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { Modal } from './Modal';
import { useNoScroll } from '../lib/hooks/useNoScroll';
import Link from 'next/link';

export type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Header = (props: HeaderProps) => {
  const { children, className = '', ...rest } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  useNoScroll(menuOpen);

  function handleClickMenu() {
    setMenuOpen((o) => !o);
  }

  return (
    <header className={classNames(className, 'header')} {...rest}>
      <Logo className="header__logo" />

      <Select.Root>
        <Select.Trigger className="ml-auto flex items-center gap-3" aria-label="language">
          <div className="square h-8 w-8 text-2xs font-bold text-white">
            <Select.Value placeholder="RU" />
          </div>
          <Select.Icon className="text-blue-500">
            <ChevronDown size={10} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="bg-navy-800 p-2 text-xs text-white shadow">
            <Select.ScrollUpButton className="">
              <ChevronUp />
            </Select.ScrollUpButton>
            <Select.Viewport>
              <Select.Group>
                <Select.Label className="font-semibold">Language</Select.Label>
                <Select.Item value="ru" className="flex items-center justify-between">
                  <Select.ItemText>RU</Select.ItemText>
                  <Select.ItemIndicator className="">
                    <Check size={10} />
                  </Select.ItemIndicator>
                </Select.Item>
                <Select.Item value="en" className="flex items-center justify-between">
                  <Select.ItemText>EN</Select.ItemText>
                  <Select.ItemIndicator className="">
                    <Check size={10} />
                  </Select.ItemIndicator>
                </Select.Item>
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="">
              <ChevronDown />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      <button className="text-white" onClick={handleClickMenu}>
        <svg width={26} fill="none" viewBox="0 0 26 23">
          <path
            d="M0 0H26V1H0Z"
            className={classNames('fill-current transition-transform')}
            style={{ transform: menuOpen ? 'translate(4px,1px) rotate(45deg)' : 'none' }}
          />
          <path
            d="M3 11H26V12H3Z"
            className={classNames('fill-current transition-transform', menuOpen && 'translate-x-full')}
          />
          <path
            d="M0 22H26V23H0Z"
            className={classNames('fill-current transition-transform')}
            style={{ transform: menuOpen ? 'translate(-13px,4px) rotate(-45deg)' : 'none' }}
          />
        </svg>
      </button>

      <Modal open>
        <nav
          className={classNames(
            'fixed inset-0 z-10 flex flex-col',
            menuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <header className="header">
            <Logo className="header__logo" />

            {/* <button className="ml-auto text-white" onClick={handleClickMenu}>
              <svg width={26} fill="none" viewBox="0 0 26 23">
                <path d="M0 0H26V1H0Z" className="menu__buttonTop" />
                <path d="M3 11H26V12H3Z" className="menu__buttonCenter" />
                <path d="M0 22H26V23H0Z" className="menu__buttonBottom" />
              </svg>
            </button> */}

            <button className="ml-auto text-white" onClick={handleClickMenu}>
              <svg width={26} fill="none" viewBox="0 0 26 23">
                <path
                  d="M0 0H26V1H0Z"
                  className={classNames('fill-current transition-transform')}
                  style={{ transform: menuOpen ? 'translate(4px,1px) rotate(45deg)' : 'none' }}
                />
                <path
                  d="M3 11H26V12H3Z"
                  className={classNames('fill-current transition-transform', menuOpen && 'translate-x-full')}
                />
                <path
                  d="M0 22H26V23H0Z"
                  className={classNames('fill-current transition-transform')}
                  style={{ transform: menuOpen ? 'translate(-13px,4px) rotate(-45deg)' : 'none' }}
                />
              </svg>
            </button>
          </header>

          <div
            className={classNames(
              'flex-1 border-b border-navy-800 bg-navy-900 py-12 transition-all duration-300',
              menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
            )}
          >
            <ul className="flex flex-col items-center gap-7">
              <li>
                <Link href="/" className="navText">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/" className="navText">
                  Наши склады
                </Link>
              </li>
              <li>
                <Link href="/" className="navText">
                  Брокерам
                </Link>
              </li>
              <li>
                <Link href="/" className="navText">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <footer
            className={classNames(
              'bg-navy-900 py-7 px-4 transition-all duration-300',
              menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
            )}
          >
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3.5 text-sm text-navy-400">
                <Phone size={12} className="fill-current" />
                <span>+7 (495) 737 8585</span>
              </li>
              <li>
                <a
                  href="mailto:ffkaragandainfo@info.ru"
                  className="flex items-center gap-3.5 text-sm text-navy-400"
                >
                  <Mail size={12} />
                  <span>ffkaragandainfo@info.ru</span>
                </a>
              </li>
            </ul>
          </footer>
        </nav>
      </Modal>
    </header>
  );
};
