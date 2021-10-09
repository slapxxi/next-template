import React, { ReactNode } from 'react';
import tw from 'twin.macro';
import { Copy } from './Copy';
import { List, ListItem } from './List';
import { Logo } from './Logo';
import { Title } from './Title';

export interface LayoutProps {
  children?: ReactNode;
}

export let Layout: React.FC<LayoutProps> = (props) => {
  let { children } = props;

  return (
    <div>
      <header css={[tw`flex justify-center gap-4 mb-4`]}>
        <div css={[tw`flex items-end gap-4`]}>
          <Logo />
          <Title>lovebirds</Title>
        </div>
      </header>

      <section css={[tw`p-4`]}>{children}</section>

      <footer css={[tw`flex flex-col items-center justify-center gap-4 p-4`]}>
        <List>
          <ListItem>About</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>Contacts</ListItem>
          <ListItem>Tips</ListItem>
          <ListItem>Payment</ListItem>
        </List>

        <Copy>
          <Title css={[tw`text-sm font-thin`]}>lovebirds</Title>
        </Copy>
      </footer>
    </div>
  );
};
