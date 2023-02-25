import classNames from 'classnames';
import React, { HTMLProps } from 'react';

export type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'size'> & {
  children?: React.ReactNode;
  className?: 'button' | string;
  variant?:
    | 'icon'
    | 'icon-bright'
    | 'normal'
    | 'fill'
    | 'outline'
    | 'outline-bright'
    | 'circle'
    | 'circle-outline'
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
        variant === 'icon-bright' && 'button--var-icon_bright',
        variant === 'circle' && 'button--var-circle',
        variant === 'circle-outline' && 'button--var-circle_outline',
        variant === 'circle-bright' && 'button--var-circle_bright',
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
