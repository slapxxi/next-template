import type { NextPage } from 'next';
import React from 'react';
import tw from 'twin.macro';
import { ItemCard } from '../components/ItemCard';
import { Layout, LayoutFooter, LayoutHeader } from '../components/Layout';
import { Title } from '../components/Title';
import { Item } from '../lib/types';

let Home: NextPage = () => {
  let item: Item = {
    id: 'dogfood',
    name: 'Dog Food',
    image: '/img/food.png',
    price: '860',
    prevPrice: '1200',
    description: 'Dog Food Ya Know',
  };

  return (
    <Layout>
      <LayoutHeader />
      <Title size="lg">Popular</Title>

      <div css={[tw`grid gap-4 p-4`, { gridTemplateColumns: 'repeat(4, minmax(100px, 1fr))' }]}>
        <ItemCard item={item} />
        <ItemCard item={item} />
        <ItemCard item={item} />
        <ItemCard item={item} />
      </div>
      <LayoutFooter />
    </Layout>
  );
};

export default Home;
