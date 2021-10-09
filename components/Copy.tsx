import { ReactNode } from 'react';
import tw from 'twin.macro';

export interface CopyProps {
  children?: ReactNode;
}

export let Copy: React.FC<CopyProps> = (props) => {
  let { children } = props;

  return (
    <div css={[tw`flex items-center gap-2`]}>
      &copy; {children} {new Date().getFullYear()}
    </div>
  );
};
