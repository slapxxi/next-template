import classNames from 'classnames';
import { HTMLProps } from 'react';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: 'outline' | 'fill' | 'icon';
  radius?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  center?: boolean;
} & Omit<HTMLProps<HTMLButtonElement>, 'size'>;

export let Button = (props: ButtonProps) => {
  let {
    children,
    className = '',
    variant = 'outline',
    type,
    radius = 'xl',
    size = 'md',
    center = false,
    ...rest
  } = props;
  return (
    <button
      className={classNames(
        className,
        'inline-flex items-center gap-2.5 border-2 border-current',
        `rounded-${radius}`,
        variant === 'fill' && 'border-blue-base bg-blue-base text-white',
        variant === 'outline' && 'hover:border-navy hover:text-navy',
        variant === 'icon' && '!p-[7px]',
        size === 'sm' && 'px-3.5 py-[9px] text-xs font-bold md:text-sm',
        size === 'md' && 'px-4 py-3 text-sm font-bold md:text-base',
        size === 'lg' && 'px-7 py-4 text-xl font-bold md:text-2xl',
        center && 'justify-center',
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
