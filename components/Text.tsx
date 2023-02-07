import classNames from 'classnames';

export type TextProps = {
  children?: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  subtle?: boolean;
};

export let Text = (props: TextProps) => {
  let { children, className = '', size = 'md', subtle = false, ...rest } = props;
  return (
    <p
      className={classNames(
        className,
        size === 'xs' && 'text-xs',
        size === 'sm' && 'text-sm',
        size === 'md' && 'text-md',
        size === 'lg' && 'text-lg',
        subtle && 'text-gray-500',
      )}
      {...rest}
    >
      {children}
    </p>
  );
};
