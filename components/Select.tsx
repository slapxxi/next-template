import { ChevronDown } from 'lucide-react';
import React, { HTMLProps } from 'react';
import tw from 'twin.macro';

export interface SelectProps extends HTMLProps<HTMLSelectElement> {
  variant?: 'normal' | 'none';
}

export let Select: React.FC<SelectProps> = (props) => {
  let { children, id, variant = 'normal', ...rest } = props;

  return (
    <label
      htmlFor={id}
      css={(theme) => [
        tw`flex items-center p-2 px-3 rounded-full`,
        {
          background: theme.bgAccent,
          color: theme.fgAccent,
          ':hover': {
            background: theme.bgAccentActive,
          },
        },
        variant === 'none' && {
          borderRadius: 0,
          background: 0,
          color: 'inherit',
          ':hover': {
            background: 0,
          },
        },
      ]}
      {...rest}
    >
      <select
        id={id}
        css={[
          tw`relative flex border-0 rounded-full outline-none`,
          {
            lineHeight: 1.1,
            background: 'inherit',
            color: 'inherit',
          },
        ]}
      >
        {children}
      </select>
      <ChevronDown size={20} />
    </label>
  );
};

export interface SelectOptionProps extends HTMLProps<HTMLOptionElement> {}

export let SelectOption: React.FC<SelectOptionProps> = (props) => {
  let { children, value } = props;
  return <option value={value}>{children}</option>;
};
