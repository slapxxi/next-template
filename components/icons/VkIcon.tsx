import classNames from 'classnames';
import { SVGProps } from 'react';

export type VkIconProps = {
  children?: React.ReactNode;
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export const VkIcon = (props: VkIconProps) => {
  const { className = '', size = 24, ...rest } = props;
  return (
    <svg className={classNames(className)} width={size} height={size} viewBox="0 0 20 20" {...rest}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        transform="translate(0 4)"
        d="M19.54.96c.14-.46 0-.8-.66-.8h-2.19c-.55 0-.81.3-.95.62 0 0-1.11 2.66-2.69 4.39-.5.5-.74.66-1.02.66-.14 0-.35-.16-.35-.62V.96c0-.55-.15-.8-.61-.8H7.63c-.35 0-.56.26-.56.5 0 .52.79.64.87 2.1v3.16c0 .7-.13.82-.4.82-.75 0-2.55-2.68-3.62-5.74C3.7.4 3.5.17 2.94.17H.75C.12.17 0 .46 0 .77c0 .57.74 3.4 3.45 7.13 1.81 2.55 4.36 3.93 6.68 3.93 1.39 0 1.56-.3 1.56-.83V9.07c0-.61.13-.74.57-.74.33 0 .88.16 2.18 1.4 1.49 1.45 1.73 2.1 2.56 2.1h2.2c.62 0 .93-.3.75-.91-.2-.6-.9-1.48-1.85-2.52-.5-.59-1.27-1.23-1.5-1.55-.33-.4-.24-.59 0-.95 0 0 2.66-3.7 2.94-4.94Z"
      />
    </svg>
  );
};
