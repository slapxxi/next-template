import styled from '@emotion/styled';
import { Facebook, Heart, Linkedin, ShoppingBag, Twitter } from 'lucide-react';
import React from 'react';
import tw from 'twin.macro';
import { useFavorites } from '../lib/hooks/useFavorites';
import { useShoppingCart } from '../lib/hooks/useShoppingCart';
import { Badge } from './Badge';
import { Copyright } from './Copyright';
import { Dropdown, DropdownContent, DropdownTrigger } from './Dropdown';
import { FaceIcon } from './Icons';
import { Logo } from './Logo';
import { Title } from './Title';

export interface LayoutProps {}

export let Layout: React.FC<LayoutProps> = (props) => {
  let { children } = props;
  return <div>{children}</div>;
};

export interface LayoutHeaderProps {
  className?: string;
}

export let LayoutHeader: React.FC<LayoutHeaderProps> = (props) => {
  let favorites = useFavorites();
  let shoppingCart = useShoppingCart();

  return (
    <header css={(theme) => [tw`p-2`, { background: theme.bg, '--stroke': theme.bg }]} {...props}>
      <div css={[tw`flex justify-between gap-4 mx-auto`, { maxWidth: 960 }]}>
        <div css={[tw`flex items-center gap-4`]}>
          <Logo width="42" />
          <Title>HorDog</Title>
        </div>

        <input
          type="text"
          css={[tw`w-1/2 px-6 text-sm border-0 rounded-full`]}
          placeholder="Search"
        />

        <div css={[tw`flex gap-8`]}>
          <div css={[tw`flex items-center justify-center`]}>
            <Heart />
            <Badge
              count={favorites.count}
              css={[tw`absolute`, { transform: 'translate(75%, -50%)' }]}
            />
          </div>

          <Dropdown css={[tw`flex items-center`]}>
            <DropdownTrigger css={[tw`flex`]}>
              <ShoppingBag />
              <Badge
                count={shoppingCart.count}
                css={[tw`absolute`, { transform: 'translate(75%, -50%)' }]}
              />
            </DropdownTrigger>
            <DropdownContent css={[tw`flex flex-col gap-2 p-4 bg-white rounded shadow w-max`]}>
              {shoppingCart.items.map((i, index) => (
                <div css={[tw`flex items-center gap-2`]} key={index}>
                  <img src={i.image} css={[{ width: 20, height: 20 }]} />
                  {i.name}
                </div>
              ))}
            </DropdownContent>
          </Dropdown>

          <div css={[tw`flex items-center justify-center`]}>
            <FaceIcon width={22} />
          </div>
        </div>
      </div>
    </header>
  );
};

export interface LayoutFooterProps {
  className?: string;
}

export let LayoutFooter: React.FC<LayoutFooterProps> = (props) => {
  return (
    <footer css={(theme) => [tw`p-4 bg-yellow-300`, { background: theme.bg }]} {...props}>
      <div css={[tw`mx-auto`, { maxWidth: 960 }]}>
        <div css={[tw`flex justify-between`]}>
          <div css={[tw`flex flex-col items-center gap-2`]}>
            <Logo width="72" />
            <Copyright css={(theme) => [{ maxWidth: 220, color: theme.fgEm }]} />
          </div>

          <StyledList>
            <StyledListItem>Products</StyledListItem>
            <StyledListItem>Offers</StyledListItem>
            <StyledListItem>News</StyledListItem>
            <StyledListItem>Reviews</StyledListItem>
          </StyledList>

          <StyledList>
            <StyledListItem>Payment</StyledListItem>
            <StyledListItem>FAQ</StyledListItem>
            <StyledListItem>Feedback</StyledListItem>
            <StyledListItem>Contacts</StyledListItem>
          </StyledList>

          <div css={[tw`flex flex-col gap-4`]}>
            <Title>Our Contacts</Title>
            <Title size="lg">8 (917) 717-21-79</Title>
            <a href="mailto:hordog.ru@gmail.com">hordog.ru@gmail.com</a>

            <StyledList horizontal css={(theme) => [tw`mt-2`, { color: theme.fgEm }]}>
              <StyledListItem>
                <Twitter />
              </StyledListItem>
              <StyledListItem>
                <Facebook />
              </StyledListItem>
              <StyledListItem>
                <Linkedin />
              </StyledListItem>
            </StyledList>
          </div>
        </div>
      </div>
    </footer>
  );
};

let StyledList = styled.ul<{ horizontal?: boolean }>(({ horizontal }) => [
  tw`flex flex-col gap-4 p-0 m-0 list-none`,
  horizontal && tw`flex-row`,
]);
let StyledListItem = styled.li([]);
