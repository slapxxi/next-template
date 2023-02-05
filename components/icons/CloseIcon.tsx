export type CloseIconProps = {
  className?: string;
  size?: number;
};

export let CloseIcon = (props: CloseIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 24 24" width={size} height={size} {...rest}>
      <path
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 17.31 17.31 6M6.34 6l11.32 11.31"
      />
    </svg>
  );
};
