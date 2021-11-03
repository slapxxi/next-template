export interface BadgeProps {
  count: number;
  className?: string;
}

export let Badge: React.FC<BadgeProps> = (props) => {
  let { count, ...rest } = props;

  if (!count) {
    return null;
  }

  return (
    <svg viewBox="0 0 24 24" width={24} {...rest}>
      <path
        d="m2 12a1 1 0 0120 0a1 1 0 01-20 0"
        css={(theme) => [{ fill: theme.bgBadge, stroke: `var(--stroke, none)`, strokeWidth: 3 }]}
      />
      <text
        textLength={12.5}
        x={12}
        y={16}
        css={[{ fill: '#fff', fontSize: 12, textAnchor: 'middle' }]}
      >
        {count}
      </text>
    </svg>
  );
};
