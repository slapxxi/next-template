import type { NextPage } from 'next';
import tw from 'twin.macro';
import { ItemCard } from '../components/ItemCard';
import { Layout, LayoutFooter, LayoutHeader } from '../components/Layout';
import { Title } from '../components/Title';
import { useStoreItems } from '../lib/hooks/useStoreItems';

let Home: NextPage = () => {
  let { items } = useStoreItems();

  return (
    <Layout>
      <LayoutHeader />
      <Title size="lg">Popular</Title>

      <div css={[tw`grid gap-4 p-4`, { gridTemplateColumns: 'repeat(4, minmax(100px, 1fr))' }]}>
        {items.map((i) => (
          <ItemCard key={i.id} item={i} />
        ))}
      </div>
      <LayoutFooter />
    </Layout>
  );
};

export default Home;
