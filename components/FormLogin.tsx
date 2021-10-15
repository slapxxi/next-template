import { Mail } from 'lucide-react';
import { signIn } from 'next-auth/client';
import Link from 'next/link';
import tw from 'twin.macro';
import create from 'zustand';
import { Button } from './Button';
import { Input } from './Input';
import { PasswordInput } from './PasswordInput';
import { Spinner } from './Spinner';

export interface FormLoginProps {}

interface State {
  state: {
    email: string;
    password: string;
    error: string;
    status: 'idle' | 'submitting' | 'error';
  };
  setEmail: (email: string) => void;
  setPassword: (email: string) => void;
  submit: () => void;
}

async function login(state: State['state']) {
  let response = await signIn('credentials', {
    email: state.email,
    password: state.password,
    redirect: false,
  });
  return response;
}

let useLoginForm = create<State>((set, get) => {
  return {
    state: {
      email: '',
      password: '',
      error: null,
      status: 'idle',
    },
    setEmail: (email) => set({ state: { ...get().state, email } }),
    setPassword: (password) => set({ state: { ...get().state, password } }),
    submit: () => {
      let state = get().state;

      if (state.status !== 'submitting') {
        set({ state: { ...state, status: 'submitting' } });

        login(state).then((response) => {
          if (response.error) {
            set({ state: { ...get().state, status: 'error', error: response.error } });
          } else {
            set({ state: { ...get().state, status: 'idle', error: null } });
          }
        });
      }
    },
  };
});

export let FormLogin: React.FC<FormLoginProps> = () => {
  let { state, ...actions } = useLoginForm();

  function handleChangeEmail(e) {
    actions.setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    actions.setPassword(e.target.value);
  }

  function handleSubmit(e) {
    actions.submit();
    e.preventDefault();
  }

  return (
    <form css={[tw`flex flex-col w-full gap-6`]} onSubmit={handleSubmit}>
      <Input
        name="email"
        autoComplete="email"
        value={state.email}
        placeholder="Your email"
        onChange={handleChangeEmail}
        icon={<Mail size={20} />}
        disabled={state.status === 'submitting'}
      />
      <PasswordInput
        name="password"
        value={state.password}
        placeholder="Your password"
        onChange={handleChangePassword}
        disabled={state.status === 'submitting'}
      />

      {state.error && <div css={(theme) => [{ color: theme.fgAccent }]}>{state.error}</div>}

      <Button variant="fill" type="submit" center>
        {state.status === 'submitting' ? <Spinner /> : 'Login'}
      </Button>

      <Link href="/restore-password" passHref>
        <Button as="a" center variant="none" css={(theme) => [{ color: theme.fgAccent }]}>
          Can't remember password?
        </Button>
      </Link>
    </form>
  );
};
