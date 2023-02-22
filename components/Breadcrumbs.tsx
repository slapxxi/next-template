import classNames from 'classnames';
import { Children } from 'react';

export type BreadcrumbsProps = {
  children?: React.ReactNode;
  className?: string;
  separator?: React.ReactNode;
};

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { children, className = '', separator = <Separator className="shrink-0" />, ...rest } = props;
  const length = Children.count(children);
  const mapped =
    length > 1
      ? Children.map(children, (child, i) => {
          if (i === length - 1) {
            return child;
          }
          return (
            <>
              {child}
              {separator}
            </>
          );
        })
      : children;

  return (
    <nav className={classNames(className, 'flex flex-wrap items-center gap-2')} {...rest}>
      {mapped}
    </nav>
  );
};

export type SeparatorProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Separator = (props: SeparatorProps) => {
  const { children, className = '', ...rest } = props;
  return (
    <svg width={4} height={5} fill="none" className={classNames(className)} {...rest}>
      <circle cx={2} cy={2.5} r={2} fill="currentColor" />
    </svg>
  );
};
