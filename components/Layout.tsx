import type { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { animated, useSpring } from '@react-spring/web';
import { Bell, Search, XCircle } from 'lucide-react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import tw from 'twin.macro';
import { useOnClickOutside } from '../lib/hooks/useOnClickOutside';
import { md } from '../lib/styles/mq';
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
  hideHeader?: boolean;
  hideFooter?: boolean;
  center?: boolean;
}

export let Layout: React.FC<LayoutProps> = (props) => {
  let { children, center = false, indent = false, hideFooter = false, hideHeader = false } = props;

  let [session, loading] = useSession();
  let router = useRouter();
  let [showMenu, setShowMenu] = useState(false);
  let menuSpring = useSpring({
    y: showMenu ? '100%' : '0%',
    onRest: () => {
      if (!showMenu) {
        backdropRef.current.style.display = 'none';
      }
    },
    onStart: () => {
      if (showMenu) {
        backdropRef.current.style.display = 'block';
      }
    },
  });
  let ref = useRef(null);
  let backdropRef = useRef(null);

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
        md(tw`overflow-hidden`, {
          ':before': {
            content: '""',
            position: 'absolute',
            top: '100%',
            left: '30%',
            width: '100%',
            paddingTop: '100%',
            background: `radial-gradient(${theme.bgAccent} 0, ${theme.bg} 70%)`,
          },
        }),
      ]}
    >
      <animated.div
        ref={backdropRef}
        css={(theme) => [
          tw`absolute top-0 bottom-0 left-0 right-0 z-10 hidden`,
          { '--bg-alpha': 0.8, background: theme.backdropAlpha },
        ]}
        style={{ opacity: menuSpring.y }}
      />

      {hideHeader ? null : session ? (
        <header
          css={(theme) => [
            tw`relative z-10`,
            { background: theme.bgAccent },
            md({ boxShadow: '2px 2px 10px rgba(0,0,0,0.05)' }),
          ]}
        >
          <nav css={[tw`flex items-center justify-between px-2`, md(tw`gap-8 p-3 px-4`)]}>
            <Link href="/" passHref>
              <StyledNavItem>
                <Logo size={36} css={[{ transform: 'translate(0, -20%)' }]} />
                <Title variant="fancy" size="lg" css={[tw`hidden text-white`, md([tw`block`])]}>
                  lovebirds
                </Title>
              </StyledNavItem>
            </Link>

            <div css={[tw`hidden`, md(tw`flex justify-center flex-1 gap-8`)]}>
              <Link href="/" passHref>
                <StyledNavItem active={router.pathname === '/'} css={[tw`hidden`, md(tw`flex`)]}>
                  Browse
                </StyledNavItem>
              </Link>
              <Link href="/chats" passHref>
                <StyledNavItem
                  active={router.pathname === '/chats'}
                  css={[tw`hidden`, md(tw`flex`)]}
                >
                  Chats
                </StyledNavItem>
              </Link>
              <Link href="/subscription" passHref>
                <StyledNavItem
                  active={router.pathname === '/subscription'}
                  css={[tw`hidden`, md(tw`flex`)]}
                >
                  Subscription
                </StyledNavItem>
              </Link>
            </div>

            <Select variant="none" css={[tw`hidden`, md(tw`flex`)]}>
              <SelectOption>English</SelectOption>
              <SelectOption>Russian</SelectOption>
            </Select>

            <Link href="/search" passHref>
              <StyledNavItem css={md(tw`hidden`)}>
                <Search size={26} />
              </StyledNavItem>
            </Link>
            <Link href="/notifications" passHref>
              <StyledNavItem css={md(tw`hidden`)}>
                <Bell size={26} />
              </StyledNavItem>
            </Link>

            <div css={[tw`hidden`, md(tw`flex gap-4`)]}>
              <Link href="/search" passHref>
                <StyledNavItem>
                  <Search size={24} css={(theme) => [{ stroke: theme.fgAccent }]} />
                </StyledNavItem>
              </Link>
              <Link href="/notifications" passHref>
                <StyledNavItem>
                  <Bell size={24} css={(theme) => [{ stroke: theme.fgAccent }]} />
                </StyledNavItem>
              </Link>
            </div>

            <Link href="/profile" passHref>
              <StyledNavItem>
                <Avatar href={session.user.image} size={28} />
                <span css={(theme) => [tw`hidden`, md(tw`block`, { color: theme.fg })]}>
                  {session.user.name}
                </span>
              </StyledNavItem>
            </Link>
            <StyledNavItem css={[md([tw`hidden`])]}>
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
            css={(theme: Theme) => [
              tw`fixed z-0 flex flex-col w-full gap-4 p-4 bottom-full`,
              showMenu && tw`shadow-xl`,
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
                  <Link href="/chats">
                    <a>Chats</a>
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

      <section css={[tw`relative flex-1`, indent && tw`p-4`, center && tw`mx-auto`]}>
        <Skeleton loading={loading}>{children}</Skeleton>
      </section>

      {hideFooter ? null : (
        <footer
          css={[tw`z-10 flex flex-col items-center justify-center gap-8 p-4`, md(tw`flex-row`)]}
        >
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
      )}
    </div>
  );
};

let StyledNavItem = styled.a<{ active?: boolean }>(({ theme, active }) => [
  tw`relative flex items-center gap-2 p-3`,
  { color: theme.fgAccent },
  md(
    tw`p-0`,
    { color: theme.fg },
    active && {
      color: theme.fgActive,
      '::after': {
        ...tw`absolute w-full h-0.5 bg-gradient-to-r top-full from-pink-600 to-orange-600`,
        content: '""',
        transform: 'translateY(18px)',
      },
    },
  ),
]);
