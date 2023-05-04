import type { LayoutProps } from 'lib/types';
import 'app/admin/admin.scss';

let AdminLayout = (props: LayoutProps) => {
  let { children } = props;

  return (
    <div className="dashboard h-screen">
      <header className="dashboard__header bg-zinc-800 p-4 text-white">header</header>
      <aside className="dashboard__sidebar bg-zinc-900 p-4 text-white">sidebar</aside>
      <main className="bg-zinc-700 text-white">{children}</main>
    </div>
  );
};

export default AdminLayout;
