import styled from '@emotion/styled';
import { animated, useSpring } from '@react-spring/web';
import { Bell, Search, XCircle } from 'lucide-react';
import { useSession } from 'next-auth/client';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import tw from 'twin.macro';
import { useOnClickOutside } from '../lib/hooks/useOnClickOutside';
import { Avatar } from './Avatar';
import { Copy } from './Copy';
import { List, ListItem } from './List';
import { Logo, LOGO_GRAD_ID } from './Logo';
import { Select, SelectOption } from './Select';
import { Skeleton } from './Skeleton';
import { Text } from './Text';
import { Title } from './Title';

export interface LayoutProps {
  indent?: boolean;
}

export let Layout: React.FC<LayoutProps> = (props) => {
  let { children, indent = false } = props;

  let [session, loading] = useSession();
  let [showMenu, setShowMenu] = useState(false);
  let menuSpring = useSpring({ y: showMenu ? '100%' : '0%' });
  let ref = useRef(null);

  useOnClickOutside(ref, () => setShowMenu(false));

  return (
    <div
      css={(theme) => [
        tw`relative flex flex-col min-h-screen`,
        indent && tw`gap-8`,
        {
          ':before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '200%',
            paddingTop: '200%',
            transform: 'translate(-30%, -50%)',
            background: `radial-gradient(${theme.bgAccent} 0, ${theme.bg} 70%)`,
          },
        },
      ]}
    >
      {session ? (
        <header css={(theme) => [tw`relative z-10`, { background: theme.bgAccent }]}>
          <nav css={[tw`flex items-center justify-between px-2`]}>
            <Link href="/" passHref>
              <StyledNavItem>
                <Logo size={36} css={[{ transform: 'translate(0, -20%)' }]} />
              </StyledNavItem>
            </Link>
            <Link href="/search" passHref>
              <StyledNavItem>
                <Search size={26} />
              </StyledNavItem>
            </Link>
            <Link href="/notifications" passHref>
              <StyledNavItem>
                <Bell size={26} />
              </StyledNavItem>
            </Link>
            <Link href="/profile" passHref>
              <StyledNavItem>
                <Avatar href={session.user.image} size={28} />
              </StyledNavItem>
            </Link>
            <StyledNavItem>
              <button onClick={() => setShowMenu((sm) => !sm)}>
                <svg
                  viewBox="0 0 20 20"
                  css={[{ width: 24, strokeWidth: 2, strokeLinecap: 'round' }]}
                >
                  <path d="M1 3h18M1 10h18M1 17h18" stroke={`url(#${LOGO_GRAD_ID})`} />
                </svg>
              </button>
            </StyledNavItem>
          </nav>

          <animated.div
            ref={ref}
            css={(theme) => [
              tw`absolute z-0 flex flex-col w-full gap-4 p-4 shadow-xl bottom-full`,
              { background: theme.bg },
            ]}
            style={{ y: menuSpring.y }}
          >
            <header
              css={(theme) => [tw`flex items-center justify-between`, { color: theme.fgAccent }]}
            >
              <span>Menu</span>
              <button css={[tw`p-2`]} onClick={() => setShowMenu((sm) => !sm)}>
                <XCircle />
              </button>
            </header>

            <section>
              <ul css={[tw`flex flex-col gap-8 p-0 list-none`]}>
                <li>
                  <Link href="/browse">
                    <a>Browse</a>
                  </Link>
                </li>
                <li>
                  <Link href="/favorites">
                    <a>Favorites</a>
                  </Link>
                </li>
                <li>
                  <Link href="/balance">
                    <a>Balance</a>
                  </Link>
                </li>
              </ul>
            </section>
          </animated.div>
        </header>
      ) : (
        <Skeleton loading={loading}>
          <header css={[tw`relative z-10 flex justify-center gap-4 mb-4`]}>
            <Link href="/">
              <a css={[tw`flex items-end gap-4`]}>
                <Logo />
                <Title variant="fancy" css={[tw`text-2xl`]}>
                  lovebirds
                </Title>
              </a>
            </Link>
          </header>
        </Skeleton>
      )}

      <section css={[tw`relative flex-1`, indent && tw`p-4`]}>
        <Skeleton loading={loading}>{children}</Skeleton>
      </section>

      <footer css={[tw`z-10 flex flex-col items-center justify-center gap-8 p-4`]}>
        <List>
          <ListItem>
            <Link href="/about">
              <a>About</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/support">
              <a>Support</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/contacts">
              <a>Contacts</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/tips">
              <a>Tips</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/payment">
              <a>Payment</a>
            </Link>
          </ListItem>
        </List>
        <Text>Personal Data Politics</Text>

        <Select variant="none">
          <SelectOption>EN</SelectOption>
          <SelectOption>RU</SelectOption>
        </Select>

        <Copy>
          <Title variant="fancy" css={[tw`text-sm font-thin`]}>
            lovebirds
          </Title>
        </Copy>
      </footer>
    </div>
  );
};

let StyledNavItem = styled.a(({ theme }) => [tw`p-3`, { color: theme.fgAccent }]);
