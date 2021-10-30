export interface OnlineIndicatorProps {
  online?: boolean;
  className?: string;
}

export let OnlineIndicator: React.FC<OnlineIndicatorProps> = (props) => {
  let { online = false, ...rest } = props;

  return (
    <svg
      viewBox="0 0 10 10"
      css={[
        {
          width: 10,
          fill: online ? '#33e159' : 'tomato',
          transform: 'translateY(50%)',
        },
      ]}
      {...rest}
    >
      <path d="m0 5a1 1 0 0110 0a1 1 0 01-10 0" />
    </svg>
  );
};
