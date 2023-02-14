import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';

export type TextLinkProps = {
  children?: React.ReactNode;
  className?: string;
} & LinkProps;

export const TextLink = (props: TextLinkProps) => {
  const { children, className = '', ...rest } = props;
  return (
    <Link
      className={classNames(className, 'decoration-current hover:underline hover:underline-offset-2')}
      {...rest}
    >
      {children}
    </Link>
  );
};
