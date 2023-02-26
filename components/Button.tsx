import classNames from 'classnames';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const { children, className = '', ...rest } = props;
  return (
    <button className={classNames(className, 'button')} {...rest}>
      {children}
    </button>
  );
};
