import styled from '@emotion/styled';
import tw from 'twin.macro';

interface ButtonProps {
  variant: 'normal' | 'outline';
}

export let Button = styled.button<ButtonProps>(({ theme, variant }) => [
  tw`flex items-center gap-2 p-2 px-4 rounded-full`,
  { color: theme.fg },
  variant === 'outline' && { border: `1px solid ${theme.fg}` },
]);
