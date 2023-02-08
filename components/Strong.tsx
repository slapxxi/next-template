import classNames from 'classnames';

export type StrongProps = {
  children?: React.ReactNode;
  className?: string;
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
};

export let Strong = (props: StrongProps) => {
  let { children, className = '', size = 'md', ...rest } = props;
  return (
    <strong
      className={classNames(
        className,
        'font-bold',
        size === '2xs' && 'text-sm',
        size === 'xs' && 'text-base',
        size === 'sm' && 'text-xl',
        size === 'md' && 'text-2xl',
        size === 'lg' && 'text-3xl',
        size === 'xl' && 'text-4xl',
      )}
      style={{ fontSize: typeof size === 'number' ? size : undefined }}
      {...rest}
    >
      {children}
    </strong>
  );
};
