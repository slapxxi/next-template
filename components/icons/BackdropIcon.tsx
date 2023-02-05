export type BackdropIconProps = {
  className?: string;
  size?: number;
  children?: JSX.Element;
};

export let BackdropIcon = (props: BackdropIconProps) => {
  let { children, className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 48 48" width={size} height={size} {...rest}>
      <svg fill="none" viewBox="18 2 62 62">
        <rect
          width="45.95"
          height="45.95"
          x="49.49"
          y="1"
          fill="#E3E4F8"
          rx="6.05"
          transform="rotate(45 49.49 1)"
        />
        <rect
          width="45.95"
          height="45.95"
          x="37.73"
          y="3.2"
          fill="#fff"
          rx="6.05"
          transform="rotate(23.78 37.73 3.2)"
        />
      </svg>
      <svg x="12" y="12">
        {children}
      </svg>
    </svg>
  );
};
