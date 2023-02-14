import classNames from 'classnames';

export type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Container = (props: ContainerProps) => {
  const { children, className = '', ...rest } = props;
  return (
    <div className={classNames(className)} {...rest}>
      {children}
    </div>
  );
};
