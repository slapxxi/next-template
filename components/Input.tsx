import styled from '@emotion/styled';
import React, { HTMLProps } from 'react';
import tw from 'twin.macro';

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'as'> {
  type?: string;
  icon?: any;
  iconRight?: any;
}

export let Input: React.FC<InputProps> = (props) => {
  let { icon, iconRight, className, ...rest } = props;

  return (
    <div
      css={(theme) => [
        tw`relative`,
        { color: theme.fgAccent, ':focus-within': { color: theme.fg } },
      ]}
      className={className}
    >
      <div
        css={[tw`absolute left-0 top-1/2`, { transform: 'translate(18px, -50%)', lineHeight: 0 }]}
      >
        {icon}
      </div>

      <StyledInput {...rest} />

      <div
        css={[tw`absolute right-0 top-1/2`, { transform: 'translate(-18px, -50%)', lineHeight: 0 }]}
      >
        {iconRight}
      </div>
    </div>
  );
};

let StyledInput = styled.input<InputProps>(({ theme }) => [
  tw`w-full p-4 px-12 border-0 rounded-full`,
  { background: theme.bgAccent, color: theme.fg, '::placeholder': { color: theme.fgAccent } },
]);
