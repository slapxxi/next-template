import type { NextPage } from 'next';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useQuery } from 'react-query';
import tw from 'twin.macro';
import { Layout } from '../components/Layout';
import { OnboardingView } from '../components/OnboardingView';
import { Title } from '../components/Title';
import { UserCards } from '../components/UserCards';
import { UserView } from '../components/UserView';
import { getHot } from '../lib/services/getHot';

interface HomePageProps {}

let HomePage: NextPage<HomePageProps> = () => {
  let [session] = useSession();
  return <Layout>{session ? <IndexPage /> : <OnboardingView />}</Layout>;
};

export interface IndexPageProps {}

export let IndexPage: React.FC<IndexPageProps> = () => {
  let { query } = useRouter();
  let hotQuery = useQuery('hot', getHot);

  return (
    <div css={[tw`mx-auto mb-8`, { maxWidth: 1180 }]}>
      <div css={[query.id && tw`hidden`, tw`p-4`]}>
        <div css={[tw`flex flex-col gap-8`]}>
          <Title>Hot</Title>
          <UserCards users={hotQuery.data} loading={hotQuery.status === 'loading'} />

          <Title>Male</Title>
          <UserCards
            users={hotQuery.data?.filter((p) => p.gender === 'male')}
            loading={hotQuery.status === 'loading'}
          />

          <Title>Female</Title>
          <UserCards
            users={hotQuery.data?.filter((p) => p.gender === 'female')}
            loading={hotQuery.status === 'loading'}
          />
        </div>
      </div>

      {query.id && <UserView userId={query.id as string} />}
    </div>
  );
};

export default HomePage;
