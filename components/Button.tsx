import classNames from 'classnames';
import React, { HTMLProps } from 'react';

export type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'size'> & {
  children?: React.ReactNode;
  className?: string;
  variant?:
    | 'icon'
    | 'normal'
    | 'fill'
    | 'outline'
    | 'circle'
    | 'circle-outline'
    | 'outline-bright'
    | 'circle-bright'
    | 'fill-bright';
  size?: 'xs' | 'sm' | 'md';
  center?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { children, className = '', variant, type, center = false, size = 'md', ...rest } = props;
  return (
    <button
      type={type as any}
      className={classNames(
        className,
        center && 'button--center',
        'button',
        variant === 'fill' && 'button--var-fill',
        variant === 'fill-bright' && 'button--var-fill_bright',
        variant === 'outline' && 'button--var-outline',
        variant === 'outline-bright' && 'button--var-outline_bright',
        variant === 'icon' && 'button--var-icon',
        variant === 'circle' && 'button--var-circle',
        variant === 'circle-outline' && 'button--var-circle_outline',
        size === 'xs' && 'button--size-xs',
        size === 'sm' && 'button--size-sm',
        size === 'md' && 'button--size-md',
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
