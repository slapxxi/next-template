import { HTMLProps } from 'react';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: 'outline' | 'fill';
  radius?: 'md' | 'xl';
  type?: 'button' | 'submit' | 'reset';
} & HTMLProps<HTMLButtonElement>;

export let Button = (props: ButtonProps) => {
  let { children, className = '', variant = 'outline', type, radius = 'xl', ...rest } = props;
  return (
    <button
      className={`${className} border-2 border-current p-2 font-medium
      ${variant === 'fill' ? 'border-blue bg-blue text-white' : ''}
      ${`rounded-${radius}`}
      `}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
