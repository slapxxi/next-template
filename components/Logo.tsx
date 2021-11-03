import { SVGProps } from 'react';

export interface LogoProps extends SVGProps<SVGSVGElement> {}

export let Logo: React.FC<LogoProps> = (props) => {
  let { ...rest } = props;

  return (
    <svg fill="none" viewBox="0 0 72 72" {...rest}>
      <path
        d="M24.6 37.3 19 32.8m0 0s-5.9-5.4-8.2-9.4m8.2 9.4c-3.5.9-11.4 1.6-14.5-2.5m7-17c5-3.8 5-12 5-12m-5 12c-1.3 1.2-1.3 7.5-.7 10m.7-10c-1.3.2-4-.5-4.5-5m3.8 15A11 11 0 0 1 1.3 19M45.5 36.6l6.1-4.3m0 0s6.4-5.4 8.9-9.3m-8.9 9.3c3.9.8 12.4 1.5 15.7-2.5m-7.5-16.7c-5.5-3.8-5.5-11.8-5.5-11.8M59.8 13c1.4 1.2 1.4 7.4.7 9.9m-.7-10c1.4.3 4.2-.4 4.8-5m-4.1 15c2 .2 7-.4 10.2-4.4M51.8 45.5c0-5.6-7.6-10.1-17-10.1-9.5 0-17.1 4.5-17.1 10M30.3 49.3c0-1.4-1.7-2.6-3.8-2.6-2 0-3.8 1.2-3.8 2.6M48 49.3c0-1.4-1.7-2.6-3.8-2.6-2 0-3.8 1.2-3.8 2.6M25.3 67c0 2 2.2 3.7 5 3.7s5-1.7 5-3.8v-3.7M45.5 67c0 2-2.3 3.7-5 3.7-2.9 0-5.1-1.7-5.1-3.8v-3.7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse
        cx="35.4"
        cy="60"
        rx="3.8"
        ry="3.2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
