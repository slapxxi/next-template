import styled from '@emotion/styled';
import tw from 'twin.macro';

export interface TitleProps {
  size?: 'sm' | 'lg' | 'md';
}

export let Title = styled.h1<TitleProps>(({ size = 'md' }) => [
  tw`p-0 m-0 text-base leading-none`,
  { fontFamily: 'Nunito, sans-serif' },
  size === 'sm' && tw`text-sm`,
  size === 'lg' && tw`text-lg`,
]);
