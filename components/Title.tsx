import classNames from 'classnames';
import { pickValue } from '../lib/pickValue';

export type TitleProps = {
  size?: 'sm' | '2xl' | '3xl' | '4xl' | '6xl';
  children?: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: 600 | 700;
  decorate?: boolean;
};

export const Title = (props: TitleProps) => {
  const { children, className = '', as = 'h2', size = 'sm', weight = 600, decorate = false, ...rest } = props;
  const Element = as;
  return (
    <Element
      className={classNames(
        className,
        'relative z-0',
        decorate && 'relative z-0',
        pickValue(weight, [600, 'font-semibold'], [700, 'font-bold']),
        pickValue(
          size,
          ['sm', 'text-lg'],
          ['2xl', 'text-2xl'],
          ['3xl', 'text-3xl'],
          ['4xl', 'text-4xl'],
          ['6xl', 'text-6xl'],
        ),
      )}
      {...rest}
    >
      {decorate && (
        <img
          src="/title-decoration-1.svg"
          alt=""
          className="absolute bottom-full right-full translate-x-0"
          style={{ transform: `translate(5px, 5px)` }}
          width={50}
        />
      )}
      {children}
    </Element>
  );
};
