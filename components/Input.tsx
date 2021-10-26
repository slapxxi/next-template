import styled from '@emotion/styled';
import React, { HTMLProps } from 'react';
import tw from 'twin.macro';

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'as'> {
  type?: string;
  icon?: any;
  iconRight?: any;
}

export let Input: React.FC<InputProps> = (props) => {
  let { icon, iconRight, className, disabled, ...rest } = props;

  return (
    <div
      css={(theme) => [
        tw`relative`,
        { color: theme.fgAccent, ':focus-within': { color: theme.fg } },
        disabled && { opacity: 0.8 },
      ]}
      className={className}
    >
      <div
        css={[tw`absolute left-0 top-1/2`, { transform: 'translate(18px, -50%)', lineHeight: 0 }]}
      >
        {icon}
      </div>

      <StyledInput disabled={disabled} icon={icon} iconRight={iconRight} {...rest} />

      <div
        css={[tw`absolute right-0 top-1/2`, { transform: 'translate(-18px, -50%)', lineHeight: 0 }]}
      >
        {iconRight}
      </div>
    </div>
  );
};

let StyledInput = styled.input<InputProps>(({ theme, icon, iconRight }) => [
  tw`w-full p-4 px-5 border-0 rounded-full`,
  { background: theme.bgAccent, color: theme.fg, '::placeholder': { color: theme.fgAccent } },
  icon && tw`pl-12`,
  iconRight && tw`pr-12`,
]);
