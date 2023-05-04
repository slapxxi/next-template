import type { LayoutProps } from 'lib/types';
import Link from 'next/link';
import { ActiveLink } from 'components/ActiveLink';

const IMG_URL =
  'https://images.unsplash.com/photo-1683115763606-43dd57a47712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80';

let NavLayout = (props: LayoutProps) => {
  let { children } = props;

  return (
    <div>
      <header>
        <nav className="p-4">
          <ul className="flex items-center gap-4">
            <li>
              <ActiveLink href="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/about">About</ActiveLink>
            </li>
            <li className="ml-auto">
              <Link href="/admin">
                <svg className="h-10 w-10 overflow-visible">
                  <clipPath id="clip">
                    <circle cx="50%" cy="50%" r="50%" />
                  </clipPath>
                  <image
                    href={IMG_URL}
                    x={-10}
                    y={-3}
                    width={60}
                    height={60}
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#clip)"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {children}
    </div>
  );
};

export default NavLayout;
