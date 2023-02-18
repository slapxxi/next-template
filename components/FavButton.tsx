import classNames from 'classnames';

export type FavButtonProps = {
  children?: React.ReactNode;
  className?: string;
  active?: boolean;
  size?: number;
};

export const FavButton = (props: FavButtonProps) => {
  const { children, className = '', active = false, size = 24, ...rest } = props;

  return (
    <button className={classNames(className, 'group')} {...rest}>
      <svg width={size} height={size} fill="none" viewBox="0 0 18 16">
        <path
          className={classNames(
            active
              ? 'fill-mediumBlue-500 stroke-mediumBlue-500 group-hover:fill-mediumBlue-400 group-hover:stroke-mediumBlue-400'
              : 'stroke-slate-600 stroke-2 line-round group-hover:stroke-slate-400',
          )}
          d="M15.63 2.46a4.13 4.13 0 0 0-5.83 0l-.8.8-.8-.8a4.13 4.13 0 0 0-5.83 5.83l.8.8L9 14.92l5.84-5.83.8-.8a4.13 4.13 0 0 0 0-5.83v0Z"
        />
      </svg>
    </button>
  );
};
