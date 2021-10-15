import styled from '@emotion/styled';
import { Eye, EyeOff, Lock } from 'lucide-react';
import React, { HTMLProps, useState } from 'react';
import tw from 'twin.macro';
import { Input } from './Input';

export interface PasswordInputProps extends HTMLProps<HTMLInputElement> {}

export let PasswordInput: React.FC<PasswordInputProps> = (props) => {
  let [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      autoComplete="current-password"
      type={showPassword ? 'text' : 'password'}
      icon={<Lock size={20} />}
      iconRight={
        showPassword ? (
          <StyledButton onClick={() => setShowPassword(false)} type="button">
            <EyeOff size={20} />
          </StyledButton>
        ) : (
          <StyledButton onClick={() => setShowPassword(true)} type="button">
            <Eye size={20} />
          </StyledButton>
        )
      }
      {...props}
    />
  );
};

let StyledButton = styled.button([
  tw`p-0 m-0`,
  { color: 'inherit', transform: 'translate(0, 2px)' },
]);
