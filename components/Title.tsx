import styled from '@emotion/styled';
import tw from 'twin.macro';

interface TitleProps {
  variant?: 'normal' | 'fancy';
  center?: boolean;
}

export let Title = styled.h1<TitleProps>(({ center = false, variant = 'normal' }) => [
  tw`p-0 m-0 text-4xl`,
  { fontFamily: 'Rubik, sans-serif', lineHeight: 1 },
  variant === 'fancy' && { fontFamily: 'Pacifico, cursive' },
  center && tw`text-center`,
]);
