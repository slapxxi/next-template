import { useTheme } from '@emotion/react';

export interface LogoProps {
  size?: number;
  className?: string;
}

export const LOGO_GRAD_ID = 'Qjpo7DPP7zLSPSRX6rDdF';
const ANIM_ID = 'md1dtdo35_Vj6WLkAx1FJ';

export let Logo: React.FC<LogoProps> = (props) => {
  let { size = 60, ...rest } = props;
  let theme = useTheme();

  return (
    <svg viewBox="0 0 60 60" width={size} {...rest}>
      <defs>
        <linearGradient id={LOGO_GRAD_ID}>
          <stop offset="0" stopColor={theme.hotpink} />
          <stop offset="1" stopColor={theme.orange} />
        </linearGradient>
      </defs>

      <g fill={`url(#${LOGO_GRAD_ID})`}>
        <path d="M30 11a.8.8 90 015.44 8l-4.64 4q-.8.8-1.6 0l-4.56-3.92a.8.8 90 015.36-8.08">
          <animateMotion
            id={ANIM_ID}
            path="M0 10c5-7 5-15.4 0-21s-5-14 0-19.6"
            dur="1.3s"
            begin={`0s;${ANIM_ID}.end+0.8s`}
            fill="freeze"
          />
        </path>
        <path
          d="m54 40a2 2 0 01-2-2v-4a10.3 10.3 0 00-20.3-2.3c-.2.9-1 1.6-1.9 1.6c-1 0-1.7-.7-2-1.6a10.3 10.3 0 00-19.9 2.3v4a2 2 0 01-2 2h-3.9a2 2 0 00-2 2v4.4c0 4.5 3.7 8.2 8.3 8.2c.2 0 .5.2.5.5v1.6c0 1 .7 1.8 1.7 1.8s1.8-.8 1.8-1.8v-.6c0-.8.6-1.5 1.4-1.5c.9 0 1.5.7 1.5 1.5v.6c0 1 .8 1.8 1.8 1.8s1.7-.8 1.7-1.8v-.2c0-1 .9-2 2-2.2c4.3-1 7.6-5 7.6-9.8v-6c0-.9.8-1.6 1.7-1.6c1 0 1.7.7 1.7 1.6v6c0 4.7 3.3 8.7 7.7 9.8c1 .3 1.9 1.1 1.9 2.2v.2c0 1 .7 1.8 1.7 1.8s1.8-.8 1.8-1.8v-.6c0-.8.6-1.5 1.5-1.5c.8 0 1.4.7 1.4 1.5v.6c0 1 .8 1.8 1.8 1.8s1.7-.8 1.7-1.8v-1.6c0-.3.3-.5.5-.5c4.6 0 8.3-3.7 8.3-8.2v-4.4a2 2 0 00-2-2h-4zm-32.6 2.7c0 3-2.4 5.3-5.3 5.3h-1.5c-1 0-1.7-.7-1.7-1.7s.8-1.8 1.7-1.8h1.5c1 0 1.8-.8 1.8-1.8s.8-1.7 1.7-1.7c1 0 1.8.8 1.8 1.7zm0-9c0 1-.8 1.8-1.8 1.8s-1.7-.8-1.7-1.8s.8-1.7 1.7-1.7c1 0 1.8.8 1.8 1.7zm16.8 0c0-1 .8-1.7 1.8-1.7s1.7.8 1.7 1.7c0 1-.8 1.8-1.7 1.8c-1 0-1.8-.8-1.8-1.8zm8.8 12.7c0 1-.8 1.7-1.7 1.7h-1.5c-3 0-5.3-2.3-5.3-5.3c0-1 .8-1.7 1.8-1.7s1.7.8 1.7 1.7c0 1 .8 1.8 1.8 1.8h1.5c1 0 1.7.8 1.7 1.8z"
          fill={`url(#${LOGO_GRAD_ID})`}
        />
      </g>
    </svg>
  );
};
