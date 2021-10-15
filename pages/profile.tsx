import { LogOut } from 'lucide-react';
import { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/client';
import React from 'react';
import tw from 'twin.macro';
import { FormLogin } from '../components/FormLogin';
import { Layout } from '../components/Layout';
import { Title } from '../components/Title';

export interface ProfilePageProps {}

let ProfilePage: NextPage = (props) => {
  let [session] = useSession();

  return (
    <Layout>
      {session ? (
        <div css={[tw`flex flex-col gap-8`]}>
          <Title>{session.user.name}</Title>

          <button
            css={(theme) => [tw`flex items-center gap-4`, { color: theme.fgAccent }]}
            onClick={() => signOut()}
          >
            <LogOut />
            Sign Out
          </button>
        </div>
      ) : (
        <FormLogin />
      )}
    </Layout>
  );
};

export default ProfilePage;
