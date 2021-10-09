import { ReactNode } from 'react';

export interface LogoProps {
  children?: ReactNode;
  size?: number;
}

const GRAD_ID = 'Qjpo7DPP7zLSPSRX6rDdF';
const ANIM_ID = 'md1dtdo35_Vj6WLkAx1FJ';

export let Logo: React.FC<LogoProps> = (props) => {
  let { size = 60 } = props;

  return (
    <svg viewBox="0 0 60 60" width={size}>
      <defs>
        <linearGradient id={GRAD_ID}>
          <stop offset="0" stopColor="#ee0979" />
          <stop offset="1" stopColor="#ff6a00" />
        </linearGradient>
      </defs>

      <g fill={`url(#${GRAD_ID})`}>
        <path d="M30 30a.8.8 90 015.44 8l-4.64 4q-.8.8-1.6 0l-4.56-3.92a.8.8 90 015.36-8.08">
          <animateMotion
            id={ANIM_ID}
            path="M0-5c5-7 5-15.4 0-21s-5-14 0-19.6"
            dur="1.3s"
            begin={`0s;${ANIM_ID}.end+0.8s`}
            fill="freeze"
          />
        </path>
        <path d="m0 40h8v-6a1 1 0 0120 0h2v3h-2v8a10 10 0 01-9 10v4h-3v-4h-4v4h-3v-4a10 10 0 01-9-8zm18-5a1 1 0 004 0a1 1 0 00-4 0m-3 11a1 1 0 000 3c4 0 6 0 6-5a1 1 0 00-3 0c0 2-1 2-3 2M60 40h-8v-6a1 1 90 00-20 0h-2v3h2v8a10 10 90 009 10v4h3v-4h4v4h3v-4a10 10 90 009-8zm-18-5a1 1 90 01-4 0a1 1 90 014 0m3 11a1 1 90 010 3c-4 0-6 0-6-5a1 1 90 013 0c0 2 1 2 3 2" />
      </g>
    </svg>
  );
};
