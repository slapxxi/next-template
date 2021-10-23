import styled from '@emotion/styled';
import tw from 'twin.macro';

interface TitleProps {
  variant?: 'normal' | 'fancy';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
}

export let Title = styled.h1<TitleProps>(({ size = 'xl', center = false, variant = 'normal' }) => [
  tw`p-0 m-0 text-4xl`,
  { fontFamily: 'Rubik, sans-serif', lineHeight: 1 },
  size === 'sm' && tw`text-sm`,
  size === 'md' && tw`text-base`,
  size === 'lg' && tw`text-lg`,
  size === 'xl' && tw`text-4xl`,
  variant === 'fancy' && { fontFamily: 'Pacifico, cursive' },
  center && tw`text-center`,
]);
