import type { Metadata } from 'next';
import { Suspense } from 'react';

export let metadata: Metadata = {
  title: 'About Us | NextJS Project',
};

let AboutPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold">About Us</h1>
      <Suspense fallback="loading...">
        {/* @ts-ignore */}
        <Data />
      </Suspense>
    </div>
  );
};

let Data = async () => {
  let data = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve((Math.random() * 100).toFixed(0));
    }, 1000);
  });
  return <div>Random Value: {data}</div>;
};

export default AboutPage;
