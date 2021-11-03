import { SVGProps } from 'react';

export interface FaceIconProps extends SVGProps<SVGSVGElement> {}

export let FaceIcon: React.FC<FaceIconProps> = (props) => {
  return (
    <svg
      fill="none"
      viewBox="-1 -1 40 40"
      css={[{ strokeWidth: 3.5, strokeLinecap: 'round', stroke: 'currentcolor' }]}
      {...props}
    >
      <path d="M14.3 10.3c0-1.4-1.7-2.6-3.8-2.6c-2 0-3.8 1.2-3.8 2.6m25.3 0c0-1.4-1.7-2.6-3.8-2.6c-2 0-3.8 1.2-3.8 2.6m-15.1 17.7c0 2 2.2 3.7 5 3.7s5-1.7 5-3.8v-3.7m10.2 3.8c0 2-2.3 3.7-5 3.7c-2.9 0-5.1-1.7-5.1-3.8v-3.7" />
      <ellipse cx="19.4" cy="21" rx="3.8" ry="3.2" />
    </svg>
  );
};
