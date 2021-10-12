import { Mail } from 'lucide-react';
import type { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/client';
import Link from 'next/link';
import { useEffect, useReducer } from 'react';
import tw from 'twin.macro';
import { Blob } from '../components/Blob';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Layout } from '../components/Layout';
import { PasswordInput } from '../components/PasswordInput';
import { Spinner } from '../components/Spinner';
import { Text } from '../components/Text';
import { Title } from '../components/Title';

let Home: NextPage = () => {
  let [session, loading] = useSession();
  let [state, dispatch] = useReducer(homeReducer, { email: '', password: '', status: 'idle' });

  function handleChangeEmail(e) {
    dispatch({ type: 'SET_EMAIL', payload: e.target.value });
  }

  function handleChangePassword(e) {
    dispatch({ type: 'SET_PASSWORD', payload: e.target.value });
  }

  function handleSubmit(e) {
    dispatch({ type: 'SUBMIT' });

    e.preventDefault();
  }

  useEffect(() => {
    if (state.status === 'submitting') {
      signIn('credentials', { email: state.email, password: state.password, redirect: false })
        .then(console.log)
        .catch(console.log);
    }
  }, [state.status]);

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
            <Input
              name="email"
              value={state.email}
              placeholder="Your email"
              onChange={handleChangeEmail}
              icon={<Mail size={20} />}
              disabled={state.status !== 'idle'}
              css={[tw`w-full`]}
            />
            <PasswordInput
              name="password"
              value={state.password}
              placeholder="Your password"
              onChange={handleChangePassword}
              disabled={state.status !== 'idle'}
              css={[tw`w-full`]}
            />

            <Button variant="fill" css={[tw`justify-center w-full`]} type="submit">
              {state.status === 'submitting' ? <Spinner /> : 'Login'}
            </Button>
          </form>

          <Link href="/restore-password" passHref>
            <Button as="a" css={(theme) => [tw`p-0`, { color: theme.fgAccent }]}>
              Can't remember password?
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

function homeReducer(state, action) {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SUBMIT':
      return { ...state, status: 'submitting' };
    default:
      return state;
  }
}

export default Home;
