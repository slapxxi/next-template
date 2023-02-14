import { SVGProps } from 'react';

export type BadgeProps = {
  r?: number;
  textColor?: string;
  backgroundColor?: string;
  fontWeight?: number;
  children?: React.ReactNode;
} & SVGProps<SVGSVGElement>;

export let Badge = (props: BadgeProps) => {
  let {
    children,
    r = 20,
    backgroundColor = 'crimson',
    textColor = 'white',
    fontWeight = 400,
    ...rest
  } = props;
  return (
    <svg style={{ overflow: 'visible' }} x="100%" y="0" fontSize={r / 2 + 1} {...rest}>
      <circle cx="0" cy="0" r={r / 2} stroke="none" fill={backgroundColor} />
      <text
        x="0"
        y="1"
        textAnchor="middle"
        alignmentBaseline="middle"
        fill={textColor}
        stroke="none"
        fontWeight={fontWeight}
      >
        {children}
      </text>
    </svg>
  );
};
