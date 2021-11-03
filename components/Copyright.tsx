import { Copyright as Copy } from 'lucide-react';
import React from 'react';
import tw from 'twin.macro';

export interface CopyrightProps {
  className?: string;
}

export let Copyright: React.FC<CopyrightProps> = (props) => {
  return (
    <p css={[tw`p-0`]} {...props}>
      <Copy size={12} /> «Интернет-магазин натуральных лакомств для собак HorDog.ru»
    </p>
  );
};
