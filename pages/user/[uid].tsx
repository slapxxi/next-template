import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useQuery } from 'react-query';
import tw from 'twin.macro';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { Skeleton } from '../../components/Skeleton';
import { Title } from '../../components/Title';
import { getUser } from '../../lib/services/getUser';

let UserPage: NextPage = () => {
  let { query } = useRouter();
  let userId = query.uid as string;
  let userQuery = useQuery(`user-${userId}`, () => getUser(userId));

  return (
    <Layout>
      <div css={[tw`relative flex flex-col gap-4`]}>
        <Skeleton loading={userQuery.status !== 'success'}>
          <div>
            <Image src={userQuery.data?.image ?? '/img/placeholder.svg'} width={220} height={350} />
          </div>
          <Title>{userQuery.data?.name ?? 'User Name'}</Title>
        </Skeleton>
      </div>
    </Layout>
  );
};

export default UserPage;
