import type { NextPage } from 'next';
import { useSession } from 'next-auth/client';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import tw from 'twin.macro';
import { Blob } from '../components/Blob';
import { Button } from '../components/Button';
import { FormLogin } from '../components/FormLogin';
import { Layout } from '../components/Layout';
import { Skeleton } from '../components/Skeleton';
import { Text } from '../components/Text';
import { Title } from '../components/Title';

let Home: NextPage = () => {
  let [session, loading] = useSession();

  return (
    <Layout>
      <Skeleton loading={loading}>{session ? <IndexPage /> : <OnboardingPage />}</Skeleton>
    </Layout>
  );
};

export interface IndexPageProps {
  children?: ReactNode;
}

export let IndexPage: React.FC<IndexPageProps> = (props) => {
  let { children } = props;
  return <div>{children}</div>;
};

interface OnboardingPageProps {}

let OnboardingPage: React.FC<OnboardingPageProps> = () => {
  return (
    <div css={[tw`relative`]}>
      <Blob animate css={[tw`absolute top-0`, { transform: 'translate(-65%)' }]} />
      <Blob animate css={[tw`absolute top-0`, { transform: 'translate(70%, 50%)' }]} />

      <div css={[tw`relative flex flex-col items-center justify-center gap-4 mb-10`]}>
        <Text>First time?</Text>
        <Link href="/register" passHref>
          <Button variant="outline-fill" as="a">
            Register
          </Button>
        </Link>
      </div>

      <div css={[tw`relative flex flex-col items-center justify-center h-full gap-10`]}>
        <Title center>Знакомства без преград</Title>
        <Text center>
          Для современного мира сплочённость команды профессионалов однозначно фиксирует
          необходимость системы обучения кадров, соответствующей насущным потребностям.
        </Text>

        <FormLogin />
      </div>
    </div>
  );
};

export default Home;
