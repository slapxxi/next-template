import classNames from 'classnames';
import { HTMLProps } from 'react';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: 'outline' | 'fill' | 'icon';
  radius?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
} & Omit<HTMLProps<HTMLButtonElement>, 'size'>;

export let Button = (props: ButtonProps) => {
  let { children, className = '', variant = 'outline', type, radius = 'xl', size = 'md', ...rest } = props;
  return (
    <button
      className={classNames(
        className,
        'inline-flex items-center gap-2.5 border-2 border-current',
        `rounded-${radius}`,
        variant === 'fill' && 'border-blue-base bg-blue-base text-white',
        variant === 'outline' && '',
        variant === 'icon' && '!p-[7px]',
        size === 'sm' && 'px-3.5 py-[9px] text-sm font-bold',
        size === 'md' && 'px-4 py-3 text-sm font-bold',
        size === 'lg' && 'px-7 py-4 text-2xl font-bold',
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
