import classNames from 'classnames';
import { SVGProps } from 'react';

export type PinIconProps = {
  children?: React.ReactNode;
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export const PinIcon = (props: PinIconProps) => {
  const { children, className = '', size = 24, ...rest } = props;
  return (
    <svg className={classNames(className)} width={size} height={size} viewBox="0 0 14 17" {...rest}>
      <path
        fill="currentColor"
        d="M11.77 12.02 7 16.8l-4.77-4.78a6.75 6.75 0 1 1 9.54 0ZM7 8.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </svg>
  );
};
