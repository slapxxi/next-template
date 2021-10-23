import { LogOut } from 'lucide-react';
import { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/client';
import tw from 'twin.macro';
import { Avatar } from '../components/Avatar';
import { FormLogin } from '../components/FormLogin';
import { Layout } from '../components/Layout';
import { Title } from '../components/Title';

export interface ProfilePageProps {}

let ProfilePage: NextPage = () => {
  let [session] = useSession();

  return (
    <Layout indent>
      {session ? (
        <div css={[tw`flex flex-col gap-8`]}>
          <div css={[tw`flex items-center justify-between`]}>
            <Title>{session.user.name}</Title>
            <Avatar href={session.user.image} size={72} />
          </div>

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
