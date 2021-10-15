import styled from '@emotion/styled';
import { HTMLProps } from 'react';
import tw from 'twin.macro';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: 'fill' | 'outline' | 'outline-fill' | 'none';
  center?: boolean;
}

export let Button = styled.button<ButtonProps>(({ theme, center, variant = 'none' }) => [
  tw`relative flex items-center gap-2 p-4 px-10 rounded-full cursor-pointer`,
  { color: theme.fg, transition: 'background-position 0.2s linear' },
  center && tw`justify-center`,
  variant === 'none' && { padding: 0, color: 'inherit' },
  variant === 'outline' && { border: `1px solid ${theme.fg}` },
  variant === 'outline-fill' && [
    {
      backgroundImage: `linear-gradient(90deg, ${theme.hotpink}, ${theme.orange})`,
      zIndex: 0,
      '::after': [
        tw`absolute top-0 bottom-0 left-0 right-0 rounded-full`,
        {
          content: '""',
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
          background: theme.bg,
          zIndex: -1,
        },
      ],
    },
  ],
  variant === 'fill' && {
    backgroundImage: `linear-gradient(90deg, ${theme.hotpink} 0, ${theme.orange} 50%, ${theme.hotpink} 100%)`,
    backgroundSize: '200% auto',
    ':hover': {
      backgroundPosition: 'right',
    },
  },
]);
