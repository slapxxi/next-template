import type { NextPage } from 'next';
import tw from 'twin.macro';
import { Blob } from '../components/Blob';
import { Layout } from '../components/Layout';

let Home: NextPage = () => {
  return (
    <Layout>
      <div css={[tw`relative`]}>
        <Blob animate css={[tw`absolute top-0`, { transform: 'translate(-50%)' }]} />
        <Blob animate css={[tw`absolute top-0`, { transform: 'translate(60%, 50%)' }]} />
      </div>
    </Layout>
  );
};

export default Home;
