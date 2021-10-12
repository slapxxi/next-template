import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';
import { Copy } from './Copy';
import { List, ListItem } from './List';
import { Logo } from './Logo';
import { Text } from './Text';
import { Title } from './Title';

export interface LayoutProps {}

export let Layout: React.FC<LayoutProps> = (props) => {
  let { children } = props;

  return (
    <div
      css={(theme) => [
        tw`relative flex flex-col min-h-screen gap-8`,
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

      <section css={[tw`relative flex-1 p-4`]}>{children}</section>

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
        <Copy>
          <Title variant="fancy" css={[tw`text-sm font-thin`]}>
            lovebirds
          </Title>
        </Copy>
      </footer>
    </div>
  );
};
