import tw from 'twin.macro';

export interface SpinnerProps {
  size?: number;
  className?: string;
}

export let Spinner: React.FC<SpinnerProps> = (props) => {
  let { size = 24, ...rest } = props;

  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      css={[tw`overflow-visible`, { stroke: '#fff' }]}
      {...rest}
    >
      <defs>
        <linearGradient id="grad">
          <stop offset="0" stopColor="gold" />
          <stop offset="1" stopColor="red" />
        </linearGradient>
      </defs>

      <use href="#spinner" x="-2" y="1" stroke="#0002" />
      <path
        id="spinner"
        d="m2 10a1 1 0 0117 0a1 1 0 01-17 0zm14 0a1 1 0 00-11 0m0 0a1 1 0 0011 0"
        pathLength="20"
        css={[
          {
            fill: 'none',
            strokeWidth: 1,
            strokeDasharray: '2 4',
            strokeDashoffset: 0,
            strokeLinecap: 'round',
            transformOrigin: '10.5px 10px',
          },
        ]}
      >
        <animate attributeName="stroke-dashoffset" to="18" dur="2s" repeatCount="indefinite" />
        <animate
          attributeName="stroke-width"
          values=".5;1.5;.5"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};
