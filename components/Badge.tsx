export interface BadgeProps {
  count: number;
  className?: string;
  loading?: boolean;
}

export let Badge: React.FC<BadgeProps> = (props) => {
  let { count, loading = false, ...rest } = props;

  if (!loading && !count) {
    return null;
  }

  return (
    <svg viewBox="0 0 24 24" width={24} {...rest}>
      <path
        d="m2 12a1 1 0 0120 0a1 1 0 01-20 0"
        css={(theme) => [{ fill: theme.bgBadge, stroke: `var(--stroke, none)`, strokeWidth: 3 }]}
      />
      {!loading && (
        <text
          textLength={12.5}
          x={12}
          y={16}
          css={[{ fill: '#fff', fontSize: 12, textAnchor: 'middle' }]}
        >
          {count}
        </text>
      )}
      {loading && (
        <>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            x="5.5"
            y="5.5"
          >
            <g>
              <path d="M21 2v6h-6M3 12a9 9 0 0115-6.7L21 8M3 22v-6h6M21 12a9 9 0 01-15 6.7L3 16" />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 12 12"
                to="360 12 12"
                dur="1s"
                repeatCount="indefinite"
              />
            </g>
          </svg>
        </>
      )}
    </svg>
  );
};
