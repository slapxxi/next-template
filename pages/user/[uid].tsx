import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { Layout } from '../../components/Layout';
import { UserView } from '../../components/UserView';

let UserPage: NextPage = () => {
  let { query } = useRouter();

  return (
    <Layout>
      <UserView userId={query.uid as string} />
    </Layout>
  );
};

export default UserPage;
