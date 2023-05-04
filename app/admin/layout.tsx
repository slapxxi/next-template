import type { LayoutProps } from 'lib/types';
import 'app/admin/admin.scss';

let AdminLayout = (props: LayoutProps) => {
  let { children } = props;
  return (
    <div className="dashboard h-screen">
      <header className="dashboard__header p-4 dark:bg-zinc-800 dark:text-white">header</header>
      <aside className="dashboard__sidebar p-4 dark:bg-zinc-900 dark:text-white">sidebar</aside>
      <main className="dark:bg-zinc-700 dark:text-white">{children}</main>
    </div>
  );
};

export default AdminLayout;
