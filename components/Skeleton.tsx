import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { Children } from 'react';
import tw from 'twin.macro';

export interface SkeletonProps {
  loading?: boolean;
}

export let Skeleton: React.FC<SkeletonProps> = (props) => {
  let { children, loading = false } = props;

  if (loading) {
    return (
      <>
        {Children.map(children, (c) => (
          <StyledBlock>{c}</StyledBlock>
        ))}
      </>
    );
  }

  return <>{children}</>;
};

let shimmerAnimation = keyframes({
  '100%': {
    backgroundPosition: '200%',
  },
});

let StyledBlock = styled.div(({ theme }) => [
  tw`relative invisible`,
  { lineHeight: 1 },
  {
    '::after': {
      ...tw`absolute top-0 bottom-0 left-0 right-0 visible bg-white rounded-xl`,
      content: '""',
      background: `linear-gradient(90deg, ${theme.skeletonBg}, ${theme.skeletonEm} 50%, ${theme.skeletonBg} 100%)`,
      backgroundSize: '200%',
      animation: `${shimmerAnimation} 1s infinite linear`,
    },
  },
]);
