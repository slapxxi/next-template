import styles from './Title.module.scss';

export type TitleProps = {
  children?: React.ReactNode;
  className?: string;
  size?: 'md' | 'lg' | 'xl' | '2xl' | number;
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
    decorationColor,
    ...rest
  } = props;
  let Element = as;
  return (
    <Element
      // @ts-ignore
      style={{ '--decoration-color': decorationColor, fontSize: typeof size === 'number' ? size : undefined }}
      className={`font-bold ${className} ${`text-${size}`} 
      ${variant === 'decorated' ? styles.decorated : ''}
      ${variant === 'stroke' ? styles.stroke : ''}
      `}
      {...rest}
    >
      {children}
    </Element>
  );
};
