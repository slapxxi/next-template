import styled from '@emotion/styled';
import { HTMLProps } from 'react';
import tw from 'twin.macro';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: 'fill' | 'outline' | 'outline-fill' | 'none';
}

export let Button = styled.button<ButtonProps>(({ theme, variant = 'none' }) => [
  tw`relative flex items-center gap-2 p-4 px-10 rounded-full cursor-pointer`,
  { color: theme.fg, transition: 'background-position 0.2s linear' },
  variant === 'outline' && { border: `1px solid ${theme.fg}` },
  variant === 'outline-fill' && { border: `1px solid ${theme.fgAccent}` },
  variant === 'fill' && {
    backgroundImage: `linear-gradient(90deg, ${theme.hotpink} 0, ${theme.orange} 50%, ${theme.hotpink} 100%)`,
    backgroundSize: '200% auto',
    ':hover': {
      backgroundPosition: 'right',
    },
  },
]);
