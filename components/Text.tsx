import classNames from 'classnames';
import { pickValue } from '../lib/pickValue';

export type TextProps = {
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
        pickValue(
          size as TextProps['size'],
          ['2xs', 'text-2xs'],
          ['xs', 'text-xs'],
          ['sm', 'text-sm'],
          ['md', 'text-med'],
          ['lg', 'text-base'],
          ['xl', 'text-2xl'],
        ),
      )}
      {...rest}
    >
      {children}
    </Element>
  );
};
