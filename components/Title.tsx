import styled from '@emotion/styled';
import tw from 'twin.macro';

interface TitleProps {
  variant?: 'normal' | 'fancy';
}

export let Title = styled.h1<TitleProps>(({ variant = 'normal' }) => [
  tw`p-0 m-0 text-4xl`,
  { fontFamily: 'Rubik, sans-serif' },
  variant === 'fancy' && { fontFamily: 'Pacifico, cursive', lineHeight: 1 },
]);
