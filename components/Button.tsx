import styled from '@emotion/styled';
import tw from 'twin.macro';

export interface ButtonProps {}

export let Button = styled.button(({ theme }) => [
  tw`p-4 font-bold rounded-full`,
  { background: theme.bg },
]);
