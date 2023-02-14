import classNames from 'classnames';
import { HTMLProps } from 'react';
import { pickValue } from '../lib/pickValue';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: 'icon' | 'normal' | 'outline' | 'circle' | 'circle-outline';
  center?: boolean;
} & HTMLProps<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { children, className = '', variant = 'normal', type, center = false, ...rest } = props;
  return (
    <button
      type={type as any}
      className={classNames(
        className,
        center && 'text-center',
        pickValue(
          variant,
          ['normal', 'p-1'],
          ['outline', 'rounded-full border border-mediumBlue-500 py-3 px-4'],
          ['icon', 'rounded-lg bg-mediumBlue-500 p-1 text-white'],
          ['circle', 'inline-flex items-center justify-center rounded-full p-1'],
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
