import classNames from 'classnames';
import { SVGProps } from 'react';
import { pickValue } from '../lib/pickValue';

export type LogoProps = {
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
} & SVGProps<SVGSVGElement>;

export const Logo = (props: LogoProps) => {
  const { children, className = '', size = 'sm', ...rest } = props;
  return (
    <svg
      className={classNames(className)}
      viewBox="0 0 116 25"
      width={pickValue(size, ['sm', 116], ['md', 165], ['lg', 182])}
      {...rest}
    >
      <path
        fill="#606C8C"
        d="M13.36 10.26a9.54 9.54 0 0 0-8.34 4.53c-1.62 2.41-3.5 7.81.15 9.81 1.44.79 3.25.34 4.56-.68 1.3-1 2.58-1.77 3.63-1.77 1.05 0 2.33.76 3.64 1.77 1.3 1.02 3.12 1.47 4.55.68 3.66-2 1.77-7.4.15-9.81a9.74 9.74 0 0 0-5.15-4.05c-1-.34-2.1-.5-3.19-.48Zm11.29-3.84c3.93.82 1.73 7.92-2.05 7.26-2.46-.43-2.67-4.31-.38-6.44.5-.48 1.44-1.03 2.43-.82Zm-5.8-6.3c2.09.64 2.96 3.33 2.3 5.72a5.92 5.92 0 0 1-1.52 2.73c-.66.64-1.88 1.36-3.16.98-3.16-.93-3.33-6.02-.85-8.45.7-.68 1.93-1.38 3.22-.98ZM2.07 6.42c-3.93.82-1.74 7.92 2.03 7.26 2.47-.43 2.68-4.31.4-6.44-.5-.48-1.45-1.03-2.43-.82Zm5.8-6.3c-2.1.64-2.96 3.33-2.3 5.72.29 1.1.81 2.05 1.5 2.73.67.64 1.9 1.36 3.18.98 3.15-.93 3.33-6.02.84-8.45C10.4.42 9.16-.28 7.88.12Z"
      />
      <path
        fill="#B3B6C9"
        d="M5.06 11.74h-3.2c.53.73 1.28 1.2 2.13 1.05.58-.1.9-.51 1.07-1.05Zm16.68 0h3.22c-.54.73-1.3 1.2-2.15 1.05-.57-.1-.9-.51-1.07-1.05Zm-1.66-9.26H15.8c.16-.24.34-.46.54-.66.3-.3.72-.59 1.2-.74.33-.1.7-.12 1.06-.01.67.21 1.16.73 1.48 1.4Zm.01 3.7h-5.12c-.09-.59-.06-1.22.06-1.85h5.42c0 .64-.14 1.25-.36 1.85Zm5.66 3.71h-3.98c.18-.67.54-1.32 1.08-1.86h2.63c.36.54.37 1.25.27 1.86Zm-9.99-1.86h3.14c-.56.5-1.36.88-2.11.66-.4-.12-.75-.34-1.03-.66Zm3.15 5.07h-11a8.61 8.61 0 0 1 5.49-1.84h.01a9.1 9.1 0 0 1 2.87.43 8.7 8.7 0 0 1 2.63 1.41Zm2.9 3.82H5c.3-.68.66-1.3 1.1-1.9H20.7c.43.6.8 1.22 1.1 1.9Zm.93 3.83H4.07c0-.64.1-1.29.26-1.9h18.14c.16.61.26 1.26.26 1.9h.01Zm-5.75 1.92h5.32c-.21.37-.5.7-.89.97l-.04.03-.24.15c-.42.22-.91.26-1.42.18A5.15 5.15 0 0 1 17 22.67ZM6.73 2.48H11a4.18 4.18 0 0 0-.55-.66 3.1 3.1 0 0 0-1.2-.73c-.33-.1-.69-.13-1.06-.02-.67.21-1.16.73-1.47 1.41Zm-.02 3.7h5.13a5.4 5.4 0 0 0-.07-1.84h-5.4c0 .63.12 1.25.35 1.85ZM1.06 9.9h3.98a4.16 4.16 0 0 0-1.1-1.85H1.33c-.35.53-.37 1.25-.27 1.85Zm10-1.85H7.91c.55.49 1.35.87 2.1.65.4-.12.75-.34 1.03-.65ZM9.81 22.67H4.5c.23.42.54.75.94 1l.24.15c.4.23.9.26 1.41.19a5.12 5.12 0 0 0 2.73-1.34Z"
      />
      <path
        fill="#1951E7"
        d="M31.55 12.11c0 .63.47 1.14 1.17 1.14s1.17-.51 1.17-1.14V7.92l1.41 2.48c.3.5.7.74 1.2.74.49 0 .89-.24 1.17-.74l1.4-2.48v4.2c0 .62.48 1.13 1.15 1.13.71 0 1.2-.51 1.2-1.14V5.05c0-.84-.64-1.5-1.54-1.5-.6 0-1.03.25-1.32.76l-2.08 3.74-2.08-3.74a1.4 1.4 0 0 0-1.32-.75c-.92 0-1.53.64-1.53 1.5v7.05Zm11.02.02c0 .62.45 1.12 1.16 1.12.62 0 1.02-.26 1.18-.8l.32-1.04h2.88l.3 1.04c.16.51.57.8 1.17.8.71 0 1.22-.44 1.22-1.12 0-.15-.03-.32-.1-.52l-2.26-6.8c-.28-.84-.87-1.27-1.73-1.27-.87 0-1.42.43-1.72 1.27l-2.32 6.8c-.06.2-.1.36-.1.52Zm4.12-5.54.84 2.87h-1.7l.87-2.87Zm3.33-1.83c0 .6.47 1.08 1.05 1.08h1.98v6.23c0 .66.55 1.18 1.21 1.18.66 0 1.22-.55 1.22-1.18V5.84h1.99c.56 0 1.04-.48 1.04-1.08 0-.6-.48-1.08-1.04-1.08h-6.4c-.57 0-1.05.48-1.05 1.08Zm9.37 7.31c0 .66.56 1.18 1.22 1.18.66 0 1.21-.55 1.21-1.18v-1.6h1.9c.87 0 1.58-.22 2.13-.67a3.37 3.37 0 0 0 1.27-2.73c0-1.14-.44-2.05-1.18-2.65a3.44 3.44 0 0 0-2.28-.74H60.6a1.2 1.2 0 0 0-1.22 1.2v7.19Zm2.43-6.26h1.53c.35 0 .6.07.82.2.3.21.48.56.48 1.06s-.17.88-.5 1.07c-.2.13-.47.2-.8.2h-1.53V5.8Zm6.26 2.6c0 2.9 2.34 4.83 5.09 4.83s5.07-1.88 5.07-4.84a4.88 4.88 0 0 0-5.07-4.86c-1.37 0-2.65.49-3.57 1.32a4.75 4.75 0 0 0-1.52 3.54Zm5.09-2.58c.73 0 1.33.24 1.8.73.46.48.7 1.09.7 1.84s-.24 1.36-.7 1.84a2.4 2.4 0 0 1-1.82.72c-.73 0-1.32-.23-1.79-.72-.47-.48-.7-1.1-.7-1.84 0-.75.23-1.36.7-1.84a2.43 2.43 0 0 1 1.8-.73Zm6.1 2.56c-.03 2.93 2.15 4.9 5.07 4.86.82 0 1.56-.13 2.22-.36.54-.2.9-.6.9-1.1 0-.65-.5-1.14-1.12-1.14-.2 0-.68.16-1.03.26-.34.08-.66.12-1 .12a2.4 2.4 0 0 1-1.8-.74c-.48-.5-.7-1.14-.7-1.9s.24-1.39.72-1.89a2.35 2.35 0 0 1 1.78-.76c.35 0 .66.04.95.12.31.1.7.21.92.21.61 0 1.13-.48 1.13-1.13 0-.51-.34-.9-.89-1.08-.6-.21-1.26-.3-2.05-.3-2.74 0-5.1 2.03-5.1 4.83Zm9.36 3.66c0 .66.55 1.18 1.21 1.18.66 0 1.22-.55 1.22-1.18V9.44h.5l2.4 3.28c.25.34.59.53 1.01.53.68 0 1.19-.53 1.19-1.21 0-.3-.11-.6-.33-.86l-2.28-2.97 2.14-2.7c.2-.25.31-.5.31-.77 0-.66-.5-1.2-1.15-1.2-.39 0-.7.16-.95.5l-2.35 3.24h-.5V4.7a1.2 1.2 0 0 0-1.21-1.18 1.2 1.2 0 0 0-1.21 1.18v7.34Zm8.7.02c0 .65.55 1.18 1.21 1.18.66 0 1.22-.56 1.22-1.18v-.3l3.6-3.7v4c0 .65.56 1.18 1.22 1.18.67 0 1.22-.56 1.22-1.18V4.73a1.2 1.2 0 0 0-1.22-1.17 1.2 1.2 0 0 0-1.21 1.17v.36l-3.61 3.69V4.73a1.2 1.2 0 0 0-1.22-1.17 1.2 1.2 0 0 0-1.2 1.17v7.34Zm10.23 0c0 .65.55 1.18 1.21 1.18.66 0 1.22-.56 1.22-1.18V9.44h3.58v2.63c0 .65.56 1.18 1.22 1.18.66 0 1.21-.56 1.21-1.18V4.73a1.2 1.2 0 0 0-1.21-1.17 1.2 1.2 0 0 0-1.22 1.17v2.55H110V4.73a1.2 1.2 0 0 0-1.22-1.17 1.2 1.2 0 0 0-1.2 1.17v7.34Z"
      />
      <path
        className="fill-[#292929] opacity-50 dark:fill-lightBlue-500"
        d="M33.3 21.43c.99 0 1.6-.53 1.6-1.25 0-.51-.3-.8-.7-.93.35-.18.6-.45.6-.93 0-.63-.61-1.08-1.51-1.08-.77 0-1.3.29-1.68.68l.55.65c.25-.22.69-.4 1.04-.4.3 0 .5.15.5.36s-.16.37-.56.37h-.41v.83h.41c.45 0 .65.14.65.36 0 .22-.2.4-.61.4-.48 0-.85-.2-1.14-.48l-.58.74c.45.4.93.68 1.85.68Zm4.61.01a2.1 2.1 0 1 0 .01-4.2 2.1 2.1 0 1 0 0 4.2Zm.02-1.01c-.61 0-1.03-.51-1.03-1.1 0-.58.41-1.09 1.01-1.09.6 0 1.04.51 1.04 1.1 0 .58-.41 1.09-1.02 1.09Zm5.23 1.01a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0-2.16 2.1c0 1.16.91 2.1 2.16 2.1Zm0-1.01c-.6 0-1.02-.51-1.02-1.1 0-.58.4-1.09 1.02-1.09.6 0 1.03.51 1.03 1.1 0 .58-.4 1.09-1.03 1.09Zm3.21.93h1.1v-2.31l1.02 1.57h.02l1.03-1.58v2.32h1.1v-4.04h-1.17l-.96 1.56-.96-1.56h-1.17v4.04Zm5.13 0h1.17l.3-.72h1.54l.3.72H56l-1.72-4.07H53.2l-1.7 4.07h-.01Zm1.79-1.6.45-1.15.45 1.16h-.9Zm3.56 1.6h1.12V18.3h1.78v-.98h-2.9v4.04Zm3.5 0h1.18l.29-.72h1.55l.3.72h1.19l-1.71-4.07h-1.08l-1.71 4.07Zm1.8-1.6.45-1.15.45 1.16h-.9Zm5.12 1.67c.98 0 1.6-.53 1.6-1.25 0-.5-.3-.8-.71-.93.35-.17.6-.45.6-.92 0-.63-.61-1.1-1.5-1.1-.78 0-1.3.3-1.69.7l.56.65c.25-.23.68-.4 1.03-.4.3 0 .5.15.5.35 0 .21-.16.37-.57.37h-.4v.83h.42c.44 0 .64.14.64.36 0 .22-.2.4-.62.4-.47 0-.84-.2-1.13-.48l-.58.74c.45.4.93.68 1.85.68Zm2.59-.07h1.04l1.55-2.27v2.27h1.1v-4.04h-1.04l-1.55 2.27v-2.27h-1.1v4.04Zm4.87 0h1.12v-1.54h1.42v1.54h1.12v-4.04h-1.12v1.51h-1.42v-1.51h-1.12v4.04Z"
      />
    </svg>
  );
};
