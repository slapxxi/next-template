import Link from 'next/link';

export let metadata = {
  title: 'Main | NextJS Project',
};

let IndexPage = () => {
  return (
    <div>
      <Link href="/about">About</Link>
    </div>
  );
};

export default IndexPage;
