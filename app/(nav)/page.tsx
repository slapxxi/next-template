import type { Metadata } from 'next';

export let metadata: Metadata = {
  title: 'Main | NextJS Project',
};

let IndexPage = () => {
  return <div className="p-4">home</div>;
};

export default IndexPage;
