import classNames from 'classnames';

export type StrongProps = {
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

export let Strong = (props: StrongProps) => {
  let { children, className = '', size = 'md', ...rest } = props;
  return (
    <span
      className={classNames(
        className,
        'font-bold',
        size === 'sm' && 'text-xl',
        size === 'md' && 'text-2xl',
        size === 'lg' && 'text-3xl',
      )}
      {...rest}
    >
      {children}
    </span>
  );
};
