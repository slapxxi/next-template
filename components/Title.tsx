import classNames from 'classnames';
import styles from './Title.module.scss';

export type TitleProps = {
  children?: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'decorated' | 'normal' | 'stroke';
  decorationColor?: string;
};

export let Title = (props: TitleProps) => {
  let {
    children,
    className = '',
    as = 'h2',
    size = 'lg',
    variant = 'normal',
    decorationColor = 'violet',
    ...rest
  } = props;
  let Element = as;
  return (
    <Element
      style={{
        // @ts-ignore
        '--decoration-color': `var(--${decorationColor},${decorationColor})`,
        fontSize: typeof size === 'number' ? size : undefined,
      }}
      className={classNames(
        className,
        'font-bold',
        `text-${size}`,
        variant === 'decorated' && styles.decorated,
        variant === 'stroke' && styles.stroke,
      )}
      {...rest}
    >
      {children}
    </Element>
  );
};
