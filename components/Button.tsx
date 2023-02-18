import classNames from 'classnames';
import React, { HTMLProps } from 'react';
import { pickValue } from '../lib/pickValue';

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
  center?: boolean;
  size?: 'xs' | 'sm' | 'md';
};

export const Button = (props: ButtonProps) => {
  const { children, className = '', variant = 'normal', type, center = false, size = 'md', ...rest } = props;
  return (
    <button
      type={type as any}
      className={classNames(
        className,
        center && 'text-center',
        'flex items-center justify-center gap-2.5 font-bold leading-none',
        pickValue(size, ['xs', 'text-xs'], ['sm', 'text-sm'], ['md', 'text-med']),
        pickValue(
          variant,
          ['normal', 'p-0'],
          ['fill', 'rounded-full bg-mediumBlue-500 py-2.5 px-5 text-white hover:bg-mediumBlue-400'],
          ['fill-bright', 'rounded-full bg-white py-2.5 px-5 text-mediumBlue-500'],
          ['outline', 'rounded-full border border-mediumBlue-500 py-3 px-4'],
          [
            'outline-bright',
            'rounded-full border border-white py-3 px-4 text-white hover:border-lightGray-400',
          ],
          ['icon', 'rounded-lg bg-mediumBlue-500 p-1 text-white hover:bg-mediumBlue-400'],
          ['circle', 'inline-flex items-center justify-center rounded-full bg-mediumBlue-500 p-1'],
          [
            'circle-bright',
            'inline-flex items-center justify-center rounded-full bg-white/30 p-2 text-white hover:bg-mediumBlue-500',
          ],
          [
            'circle-outline',
            'inline-flex items-center justify-center rounded-full border border-mediumBlue-500 p-1.5',
          ],
        ),
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
