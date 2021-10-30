import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useQuery } from 'react-query';
import tw from 'twin.macro';
import { Layout } from '../../components/Layout';
import { UserInfo, UserInfoPicture } from '../../components/UserInfo';
import { useMediaQuery } from '../../lib/hooks/useMediaQuery';
import { getUser } from '../../lib/services/getUser';
import { md } from '../../lib/styles/mq';

let UserPage: NextPage = () => {
  let { query } = useRouter();
  let userId = query.uid as string;
  let userQuery = useQuery(`user-${userId}`, () => getUser(userId));
  let isMobile = useMediaQuery('(max-width: 680px)');

  return (
    <Layout>
      {userQuery.data && (
        <div css={[md(tw`flex gap-6 p-8 px-12`)]}>
          <div css={[md({ flex: '0 0 40%' })]}>
            <UserInfoPicture user={userQuery.data} profileView showInfo={isMobile} />
          </div>
          <UserInfo user={userQuery.data} />
        </div>
      )}
    </Layout>
  );
};

export default UserPage;
