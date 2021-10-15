import { Mail, User } from 'lucide-react';
import { NextPage } from 'next';
import Link from 'next/link';
import tw, { theme } from 'twin.macro';
import create from 'zustand';
import { Button } from '../components/Button';
import { FemaleIcon, MaleIcon } from '../components/Icons';
import { Input } from '../components/Input';
import { Label } from '../components/Label';
import { Layout } from '../components/Layout';
import { PasswordInput } from '../components/PasswordInput';
import { Select, SelectOption } from '../components/Select';
import { Text } from '../components/Text';
import { Title } from '../components/Title';

export interface RegisterPageProps {}

type Sex = 'male' | 'female';

interface State {
  name: string;
  email: string;
  password: string;
  sex: Sex;
  birth: {
    day: number;
    month: string;
    year: number;
  };
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setSex: (sex: Sex) => void;
  setDay: (day: number) => void;
  setMonth: (month: string) => void;
  setYear: (year: number) => void;
}

let useRegisterForm = create<State>((set, get) => {
  return {
    name: '',
    email: '',
    password: '',
    sex: 'female',
    birth: {
      day: 1,
      month: 'jan',
      year: 2000,
    },
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    setSex: (sex) => set({ sex }),
    setDay: (day) => set({ birth: { ...get().birth, day } }),
    setMonth: (month) => set({ birth: { ...get().birth, month } }),
    setYear: (year) => set({ birth: { ...get().birth, year } }),
  };
});

let RegisterPage: NextPage = () => {
  let state = useRegisterForm();

  function handleChangeName(e) {
    state.setName(e.target.value);
  }

  function handleChangeDay(e) {
    state.setDay(e.target.value);
  }

  function handleChangeMonth(e) {
    state.setMonth(e.target.value);
  }

  function handleChangeYear(e) {
    state.setYear(e.target.value);
  }

  function handleChangeSex(e) {
    state.setSex(e.target.value);
  }

  function handleChangeEmail(e) {
    state.setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    state.setPassword(e.target.value);
  }

  return (
    <Layout>
      <div css={[tw`flex flex-col gap-8`]}>
        <div css={[tw`relative flex flex-col items-center justify-center gap-4 mb-10`]}>
          <Text>Have an account?</Text>
          <Link href="/" passHref>
            <Button variant="outline-fill" as="a">
              Sign In
            </Button>
          </Link>
        </div>

        <div css={[tw`flex flex-col gap-6`]}>
          <Title center>Create Account</Title>
          <Text variant="subtle" center>
            Join the community of 69 million of people!
          </Text>

          <form css={[tw`flex flex-col gap-8`]}>
            <Input
              autoComplete="username"
              placeholder="Your Name"
              icon={<User />}
              value={state.name}
              onChange={handleChangeName}
            />

            <div css={[tw`flex flex-col gap-4`]}>
              <Label subtle>Date of Birth</Label>
              <div css={[tw`flex justify-between gap-2`]}>
                <Select value={state.birth.day} onChange={handleChangeDay}>
                  {new Array(31).fill(null).map((_, i) => (
                    <SelectOption key={i} value={i + 1}>
                      {i + 1}
                    </SelectOption>
                  ))}
                </Select>

                <Select value={state.birth.month} onChange={handleChangeMonth}>
                  <SelectOption value="jan">January</SelectOption>
                  <SelectOption value="feb">February</SelectOption>
                  <SelectOption value="mar">March</SelectOption>
                  <SelectOption value="apr">April</SelectOption>
                  <SelectOption value="may">May</SelectOption>
                  <SelectOption value="jun">June</SelectOption>
                  <SelectOption value="jul">July</SelectOption>
                  <SelectOption value="aug">August</SelectOption>
                  <SelectOption value="sep">September</SelectOption>
                  <SelectOption value="oct">October</SelectOption>
                  <SelectOption value="nov">November</SelectOption>
                  <SelectOption value="dec">December</SelectOption>
                </Select>

                <Select value={state.birth.year} onChange={handleChangeYear}>
                  {new Array(30).fill(null).map((_, i) => (
                    <SelectOption key={i} value={1990 + i}>
                      {i + 1990}
                    </SelectOption>
                  ))}
                </Select>
              </div>
            </div>

            <div css={[tw`flex gap-4`]}>
              <div css={[tw`flex items-center flex-1`]}>
                <input
                  type="radio"
                  name="sex"
                  value="male"
                  id="male"
                  onChange={handleChangeSex}
                  checked={state.sex === 'male'}
                  css={[tw`hidden`]}
                />
                <label
                  htmlFor="male"
                  css={[
                    tw`flex justify-center flex-1 rounded-full `,
                    { border: `1px solid ${theme`colors.blue.400`}` },
                    state.sex === 'male' && {
                      ...tw`bg-gradient-to-r from-blue-400 to-blue-600`,
                    },
                  ]}
                >
                  <MaleIcon size={48} />
                </label>
              </div>

              <div css={[tw`flex items-center flex-1`]}>
                <input
                  type="radio"
                  name="sex"
                  value="female"
                  id="female"
                  onChange={handleChangeSex}
                  checked={state.sex === 'female'}
                  css={[tw`hidden`]}
                />
                <label
                  htmlFor="female"
                  css={[
                    tw`flex justify-center flex-1 rounded-full`,
                    { border: `1px solid ${theme`colors.rose.400`}` },
                    state.sex === 'female' && {
                      ...tw`bg-gradient-to-r from-rose-400 to-rose-600`,
                    },
                  ]}
                >
                  <FemaleIcon size={48} />
                </label>
              </div>
            </div>

            <Input
              autoComplete="email"
              type="email"
              value={state.email}
              placeholder="Your Email"
              icon={<Mail size={20} />}
              onChange={handleChangeEmail}
            />
            <PasswordInput
              placeholder="Your Password"
              value={state.password}
              onChange={handleChangePassword}
            />

            <Button variant="fill" center type="submit">
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
