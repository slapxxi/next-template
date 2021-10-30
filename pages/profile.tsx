import styled from '@emotion/styled';
import { Camera, LogOut } from 'lucide-react';
import { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/client';
import Image from 'next/image';
import { useReducer } from 'react';
import { useDropzone } from 'react-dropzone';
import { useQuery } from 'react-query';
import tw, { theme } from 'twin.macro';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';
import { FormLogin } from '../components/FormLogin';
import { FemaleIcon, MaleIcon } from '../components/Icons';
import { Input } from '../components/Input';
import { Layout } from '../components/Layout';
import { Select, SelectOption } from '../components/Select';
import { Title } from '../components/Title';
import { getAuthUser } from '../lib/services/getAuthUser';

export interface ProfilePageProps {}

function profileReducer(state, action) {
  if (action.type) {
    let { sex, name, height, weight, hairColor } = action.payload;
    return { ...state, sex, name, height, weight, hairColor };
  }
  return state;
}

let ProfilePage: NextPage = () => {
  let [session] = useSession();
  let userQuery = useQuery(`user-auth`, () => getAuthUser(), {
    onSuccess: (data) => {
      dispatch({ type: 'SET_DATA', payload: data });
    },
  });
  let [state, dispatch] = useReducer(profileReducer, {
    sex: 'female',
    birth: { day: 1, month: 1, year: 1990 },
  });

  let dropzone = useDropzone({
    accept: ['image/jpeg', 'image/png'],
    multiple: true,
  });

  function handleChangeDay(e) {
    dispatch({ type: 'SET_DAY', payload: e.target.value });
  }

  function handleChangeMonth(e) {
    dispatch({ type: 'SET_MONTH', payload: e.target.value });
  }

  function handleChangeYear(e) {
    dispatch({ type: 'SET_YEAR', payload: e.target.value });
  }

  function handleChangeSex(e) {
    dispatch({ type: 'SET_SEX', payload: e.target.value });
  }

  return (
    <Layout indent>
      {session ? (
        <div css={[tw`flex flex-col gap-8`]}>
          <div css={[tw`flex items-center justify-between`]}>
            <Title>{session.user.name}</Title>
            <Avatar href={session.user.image} size={72} />
          </div>

          <Select>
            <SelectOption name="profile">Profile</SelectOption>
            <SelectOption name="favs">Favorites</SelectOption>
            <SelectOption name="balance">Balance</SelectOption>
          </Select>

          <div>
            <Image
              src={session?.user.image}
              width={220}
              height={220}
              layout="responsive"
              objectFit="cover"
            />
            <div
              css={(theme) => [
                tw`flex gap-2 p-3 rounded`,
                { border: `1px solid ${theme.bgAccent}`, color: theme.fgAccent },
              ]}
              {...dropzone.getRootProps()}
            >
              <input {...dropzone.getInputProps()} />
              {dropzone.acceptedFiles.length !== 0 ? (
                dropzone.acceptedFiles.map((f) => (
                  <Image src={URL.createObjectURL(f)} width={100} height={100} objectFit="cover" />
                ))
              ) : (
                <>
                  <CameraTile />
                  <CameraTile />
                  <CameraTile />
                </>
              )}
            </div>
          </div>

          <StyledInputGroup>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <Input type="text" placeholder="Name" value={session.user.name} />
          </StyledInputGroup>

          <StyledInputGroup>
            <StyledLabel htmlFor="birthday">Birthday</StyledLabel>
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
          </StyledInputGroup>

          <StyledInputGroup horizontal>
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
          </StyledInputGroup>

          <Title size="lg">Personal Information</Title>

          <StyledInputGroup>
            <StyledLabel>Height</StyledLabel>
            <Input type="text" value={state.height} />
          </StyledInputGroup>

          <StyledInputGroup>
            <StyledLabel>Weight</StyledLabel>
            <Input type="text" value={state.weight} />
          </StyledInputGroup>

          <StyledInputGroup>
            <StyledLabel>Hair Color</StyledLabel>
            <Input type="text" value={state.hairColor} />
          </StyledInputGroup>

          <Button variant="fill" center>
            Save
          </Button>

          <button
            css={(theme) => [tw`flex items-center gap-4`, { color: theme.fgAccent }]}
            onClick={() => signOut({ redirect: false })}
          >
            <LogOut />
            Sign Out
          </button>
        </div>
      ) : (
        <FormLogin />
      )}
    </Layout>
  );
};

export interface CameraTileProps {
  name?: string;
}

export let CameraTile: React.FC<CameraTileProps> = (props) => {
  let { name } = props;

  return (
    <svg viewBox="0 0 24 24">
      {name ? (
        <text fontSize={3} textAnchor="middle" x={12} y={13} fill="currentColor">
          {name}
        </text>
      ) : (
        <Camera size={14} x={5} y={5} strokeWidth={1} />
      )}
      <rect
        id="rect"
        x={1}
        y={1}
        width={22}
        height={22}
        rx={3}
        css={[{ fill: 'none', stroke: 'currentcolor', strokeLinejoin: 'round', strokeWidth: 0.6 }]}
      />
    </svg>
  );
};

let StyledLabel = styled.label(({ theme }) => [{ color: theme.fgAccent }]);
let StyledInputGroup = styled.div<{ horizontal?: boolean }>(({ horizontal }) => [
  tw`flex flex-col gap-2`,
  horizontal && tw`flex flex-row`,
]);

export default ProfilePage;
