export type StrongProps = {
  children?: React.ReactNode;
  className?: string;
};

export let Strong = (props: StrongProps) => {
  let { children, className = '', ...rest } = props;
  return (
    <span className={`${className} text-3xl font-bold`} {...rest}>
      {children}
    </span>
  );
};
