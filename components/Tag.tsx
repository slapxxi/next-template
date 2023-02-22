import classNames from 'classnames';

export type TagProps = {
  children?: React.ReactNode;
  className?: string;
  name: string;
  selected?: boolean;
};

export const Tag = (props: TagProps) => {
  const { children, className = '', selected = false, name, ...rest } = props;
  return (
    <span className={classNames(className, 'tag', selected && 'tag--active')} {...rest}>
      {name}
    </span>
  );
};
