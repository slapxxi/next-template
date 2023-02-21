import classNames from 'classnames';
import { SVGProps } from 'react';

export type BadgeProps = {
  r?: number;
  textColor?: string;
  backgroundColor?: 'blue';
  fontWeight?: number;
  fontSize?: number;
  className?: string;
  children?: React.ReactNode;
} & SVGProps<SVGSVGElement>;

export let Badge = (props: BadgeProps) => {
  let {
    children,
    r = 20,
    className = '',
    backgroundColor = 'crimson',
    textColor = 'white',
    fontWeight = 400,
    fontSize = r / 2 + 1,
    ...rest
  } = props;
  return (
    <svg
      style={{ overflow: 'visible' }}
      x="100%"
      y="0"
      fontSize={fontSize}
      className={classNames(className, 'badge', backgroundColor === 'blue' && 'badge--blue')}
      {...rest}
    >
      <circle cx="0" cy="0" r={r / 2} stroke="none" className="fill-[var(--bg)]" />
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
