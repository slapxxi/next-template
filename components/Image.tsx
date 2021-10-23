import { Theme, useTheme } from '@emotion/react';
import NextImage, { ImageProps } from 'next/image';

export interface Props extends ImageProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

export let Image: React.FC<Props> = (props) => {
  let { width, height, ...rest } = props;
  let theme = useTheme();

  return (
    <NextImage
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={toDataURL(toBase64(shimmer(width ?? 220, height ?? 350, theme)))}
      layout="responsive"
      {...rest}
    />
  );
};

function toDataURL(input: string) {
  return `data:image/svg+xml;base64,${input}`;
}

function shimmer(w: number, h: number, theme: Theme) {
  return `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g" spreadMethod="reflect">
      <stop offset="0" stop-color="${theme.bg}" />
      <stop offset="1" stop-color="${theme.bgAccent}" />
      <animateTransform attributeName="gradientTransform" to="2" dur="1s" repeatCount="indefinite" />
    </linearGradient>
  </defs>
  <path d="m0 0h${w}v${h}h${-w}z" fill="url(#g)" />
</svg>
`;
}

function toBase64(str: string) {
  return typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
}
