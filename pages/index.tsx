import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import tw from 'twin.macro';
import { Button } from '../components/Button';
import { ItemCard } from '../components/ItemCard';
import { Layout, LayoutFooter, LayoutHeader } from '../components/Layout';
import { Title } from '../components/Title';
import { useStoreItems } from '../lib/hooks/useStoreItems';

let Home: NextPage = () => {
  let { items } = useStoreItems();
  let { handleSubmit, register, formState } = useForm({ mode: 'onTouched' });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Layout css={[tw`gap-4`]}>
      <LayoutHeader />

      <div css={[tw`flex-1 mx-auto`, { maxWidth: 960 }]}>
        <Title size="lg">Popular</Title>
        <div css={[tw`grid gap-4 p-4`, { gridTemplateColumns: 'repeat(4, minmax(100px, 1fr))' }]}>
          {items.map((i) => (
            <ItemCard key={i.id} item={i} />
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} css={[tw`flex flex-col gap-4`]}>
          <input
            type="text"
            placeholder="your@email.com"
            css={[
              tw`p-2 border-0 rounded shadow-xl`,
              formState.errors.email && { color: 'crimson' },
            ]}
            {...register('email', {
              minLength: 3,
              required: true,
            })}
          />
          <input
            type="password"
            placeholder="your password"
            {...register('password', { minLength: 5 })}
            css={[
              tw`p-2 border-0 rounded shadow-xl`,
              formState.errors.password && {
                color: 'crimson',
                outline: '1px solid crimson',
                filter: 'drop-shadow(1px 1px 3px hsla(350, 50%, 80%, 0.5))',
              },
            ]}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>

      <LayoutFooter />
    </Layout>
  );
};

export default Home;
