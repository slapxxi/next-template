import { ChevronLeft } from 'lucide-react';
import { NextPage } from 'next';
import Link from 'next/link';
import tw from 'twin.macro';
import { Blob, GRAD_ID } from '../components/Blob';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { Text } from '../components/Text';
import { Title } from '../components/Title';
import { md } from '../lib/styles/mq';

let NotFoundPage: NextPage = () => {
  return (
    <Layout>
      <div
        css={[tw`absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center`]}
      >
        <svg
          viewBox="0 0 10 10"
          css={[
            tw`absolute overflow-visible`,
            { width: '160%', '--fill': 'none' },
            md({ width: '110%' }),
          ]}
        >
          <Blob animate id="blob" />

          <g css={(theme) => [{ stroke: theme.border, strokeWidth: 0.5 }]}>
            <use href="#blob" transform="translate(-1-1) scale(1.2)" />
            <use href="#blob" transform="translate(-2-2) scale(1.4)" />
            <use href="#blob" transform="translate(-3-3) scale(1.6)" />
            <use href="#blob" transform="translate(-4-4) scale(1.8)" />
            <use href="#blob" transform="translate(-5-5) scale(2)" />
            <use href="#blob" css={[{ '--fill': `url(#${GRAD_ID})`, stroke: 'none' }]} />
          </g>
        </svg>

        <div css={[tw`relative flex flex-col items-center gap-4`]}>
          <Title css={[tw`text-8xl`]}>404</Title>

          <Text>You are lost.</Text>
          <Text>Don't worry though. Here's the right way:</Text>

          <Link href="/">
            <Button variant="outline" as="a">
              <ChevronLeft size={20} />
              Go Back
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
