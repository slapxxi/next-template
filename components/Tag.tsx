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
    <span
      className={classNames(
        className,
        'cursor-pointer rounded-full px-5 py-2 text-base md:text-lg',
        selected
          ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          : 'bg-white text-slate-600 hover:bg-slate-100',
      )}
      {...rest}
    >
      {name}
    </span>
  );
};
