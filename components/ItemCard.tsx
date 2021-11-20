import { Item } from '@prisma/client';
import { Heart } from 'lucide-react';
import React from 'react';
import tw from 'twin.macro';
import { useShoppingCart } from '../lib/hooks/useShoppingCart';
import { Button } from './Button';

export interface ItemCardProps {
  item: Item;
}

export let ItemCard: React.FC<ItemCardProps> = (props) => {
  let { item } = props;
  let shoppingCart = useShoppingCart();

  function handleClick() {
    shoppingCart.addItem(item);
  }

  return (
    <div css={[tw`relative flex flex-col`]}>
      <button css={[tw`absolute right-0 p-0 m-0`]}>
        <Heart />
      </button>

      <img src={item.image} alt="" />

      {item.prevPrice && <div css={[tw`text-sm font-bold line-through`]}>{item.prevPrice} ₽</div>}
      <div css={(theme) => [tw`text-2xl font-bold`, { color: theme.red }]}>{item.price} ₽</div>
      <p>{item.description}</p>
      <Button onClick={handleClick} disabled={shoppingCart.status === 'loading'}>
        Add to Cart
      </Button>
    </div>
  );
};
