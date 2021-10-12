import { Mail } from 'lucide-react';
import type { NextPage } from 'next';
import Link from 'next/link';
import tw from 'twin.macro';
import { Blob } from '../components/Blob';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Layout } from '../components/Layout';
import { PasswordInput } from '../components/PasswordInput';
import { Text } from '../components/Text';
import { Title } from '../components/Title';

let Home: NextPage = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Layout>
      <div css={[tw`relative`]}>
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
          <Title css={[tw`text-center`]}>Знакомства без преград</Title>
          <Text css={[tw`text-center`]}>
            Для современного мира сплочённость команды профессионалов однозначно фиксирует
            необходимость системы обучения кадров, соответствующей насущным потребностям.
          </Text>

          <form css={[tw`flex flex-col items-center w-full gap-6`]} onSubmit={handleSubmit}>
            <Input placeholder="Your email" icon={<Mail size={20} />} css={[tw`w-full`]} />
            <PasswordInput placeholder="Your password" css={[tw`w-full`]} />

            <Link href="/login" passHref>
              <Button variant="fill" css={[tw`justify-center w-full`]} as="a">
                Login
              </Button>
            </Link>
            <Link href="/login" passHref>
              <Button as="a" css={(theme) => [tw`p-0`, { color: theme.fgAccent }]}>
                Can't remember password?
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
