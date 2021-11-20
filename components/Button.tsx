import styled from '@emotion/styled';
import tw from 'twin.macro';

export interface ButtonProps {}

export let Button = styled.button(({ theme, disabled }) => [
  tw`p-4 font-bold rounded-full cursor-pointer`,
  {
    background: theme.bg,
    ':hover': { background: theme.bgHover },
    ':active': { background: theme.bgActive },
  },
  disabled && tw`opacity-50 hover:opacity-50`,
]);
