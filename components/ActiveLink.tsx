'use client';
import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

export type ActiveLinkProps = {
  children?: React.ReactNode;
  className?: string;
} & LinkProps;

export let ActiveLink = (props: ActiveLinkProps) => {
  let { children, href, className = '', ...rest } = props;
  let pathname = usePathname();

  return (
    <Link className={classNames(className, href === pathname && 'dark:text-zinc-600')} href={href} {...rest}>
      {children}
    </Link>
  );
};
