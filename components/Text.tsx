import classNames from 'classnames';
import { pickValue } from '../lib/pickValue';

export type TextProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export const Text = (props: TextProps) => {
  const { children, className = '', as = 'p', size = 'sm', ...rest } = props;
  const Element = as;
  return (
    <Element
      className={classNames(
        className,
        pickValue(size, ['xs', 'text-xs'], ['sm', 'text-sm'], ['md', 'text-[15px]'], ['lg', 'text-base']),
      )}
      {...rest}
    >
      {children}
    </Element>
  );
};
