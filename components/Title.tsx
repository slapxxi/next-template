import classNames from 'classnames';
import { pickValue } from '../lib/pickValue';

export type TitleProps = {
  size?: 'sm' | 'md';
  children?: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Title = (props: TitleProps) => {
  const { children, className = '', as = 'h2', size = 'sm', ...rest } = props;
  const Element = as;
  return (
    <Element className={classNames(className, 'font-semibold', pickValue(size, ['sm', 'text-lg']))} {...rest}>
      {children}
    </Element>
  );
};
