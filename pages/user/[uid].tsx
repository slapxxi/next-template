import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useQuery } from 'react-query';
import { Layout } from '../../components/Layout';
import { UserInfo } from '../../components/UserInfo';
import { getUser } from '../../lib/services/getUser';

let UserPage: NextPage = () => {
  let { query } = useRouter();
  let userId = query.uid as string;
  let userQuery = useQuery(`user-${userId}`, () => getUser(userId));

  return <Layout>{userQuery.data && <UserInfo user={userQuery.data} />}</Layout>;
};

export default UserPage;
