import type { NextPage } from 'next';
import { useRouter } from 'next/router';

let SlugPage: NextPage = () => {
  let { query } = useRouter();
  return (
    <div>
      <h1>{query.slug}</h1>
    </div>
  );
};

export default SlugPage;
