import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';
import { Blob } from './Blob';
import { Button } from './Button';
import { FormLogin } from './FormLogin';
import { Text } from './Text';
import { Title } from './Title';

interface OnboardingViewProps {}

export let OnboardingView: React.FC<OnboardingViewProps> = () => {
  return (
    <div css={[tw`relative p-4`]}>
      <Blob animate css={[tw`absolute top-0`, { transform: 'translate(-65%)' }]} />
      <Blob animate css={[tw`absolute top-0`, { transform: 'translate(70%, 50%)' }]} />

      <div css={[tw`relative flex flex-col items-center justify-center gap-4 mb-10`]}>
        <Text>First time?</Text>
        <Link href="/register" passHref>
          <Button variant="outline-fill" as="a">
            Register
          </Button>
        </Link>
      </div>

      <div css={[tw`relative flex flex-col items-center justify-center h-full gap-10`]}>
        <Title center>Знакомства без преград</Title>
        <Text center>
          Для современного мира сплочённость команды профессионалов однозначно фиксирует
          необходимость системы обучения кадров, соответствующей насущным потребностям.
        </Text>

        <FormLogin />
      </div>
    </div>
  );
};
