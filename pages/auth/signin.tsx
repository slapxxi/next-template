import { omit } from 'lodash';
import type { GetServerSideProps } from 'next';
import {
  ClientSafeProvider,
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
  signOut,
} from 'next-auth/client';
import React from 'react';
import tw from 'twin.macro';

export interface SigninPageProps {
  csrfToken: string;
  session?: any;
  errors?: string[];
  providers?: ClientSafeProvider[];
}

let SignInPage: React.FC<SigninPageProps> = (props) => {
  let { session, csrfToken, errors, providers } = props;

  if (session) {
    return (
      <div>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return (
    <div>
      {errors && (
        <div css={[tw`p-2 m-2 text-white text-red-900 bg-red-300 rounded`]}>
          {errors.map((e) => (
            <div key={e}>{e}</div>
          ))}
        </div>
      )}
      <form
        method="POST"
        action="/api/auth/callback/credentials"
        css={[tw`flex flex-col gap-4 p-4`]}
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Username
          <input name="username" type="text" placeholder="Username" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign in</button>
      </form>

      {Object.values(providers).map((p) => (
        <div key={p.id} css={[tw`p-4`]}>
          <button onClick={() => signIn(p.id)}>Sign in with {p.name}</button>
        </div>
      ))}
    </div>
  );
};

export let getServerSideProps: GetServerSideProps = async (context) => {
  let { error: errors = null } = context.query;

  if (errors) {
    if (Array.isArray(errors)) {
      errors = Array.from(new Set(errors));
    } else {
      errors = [errors];
    }
  }

  let session = await getSession(context);
  let csrfToken = await getCsrfToken(context);
  let providers = session ? [] : omit(await getProviders(), 'credentials');

  return { props: { csrfToken, session, errors, providers } };
};

export default SignInPage;
