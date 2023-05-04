import type { Metadata } from 'next';

export let metadata: Metadata = {
  title: 'Admin | NextJS Project',
};

let AdminIndexPage = () => {
  return <div className="p-4">main content</div>;
};

export default AdminIndexPage;
