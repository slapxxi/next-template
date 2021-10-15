export interface MaleIconProps {
  size?: number;
}

export let MaleIcon: React.FC<MaleIconProps> = (props) => {
  let { size = 24, ...rest } = props;

  return (
    <svg viewBox="0 0 36 36" fill="none" width={size} height={size} {...rest}>
      <path
        d="M32 19.9c0-2.2-1.1-4-2.5-4C28 9.6 23.4 5 18 5S8 9.6 6.5 16c-1.4 0-2.5 1.8-2.5 4 0 2 1 3.8 2.3 4 1.2 6.6 6 10.5 11.7 10.5 5.7 0 10.5-3.9 11.7-10.5 1.3-.2 2.3-2 2.3-4Z"
        fill="#FFDC5D"
      />
      <path
        d="M33 12.7c0-1-.5-1.7-1.2-2.2l.2-.9c0-1.2-1-2.3-2.2-2.4l.2-1a3 3 0 0 0-4.1-2.8 3 3 0 0 0-5-1.3 3 3 0 0 0-5.7 0 3 3 0 0 0-5 1.3 3 3 0 0 0-4 3.8 2.5 2.5 0 0 0-2 3.3 2.5 2.5 0 0 0 0 4.2c-.7 1-.5 2.6 1 2.8 0 1.4 1.3 2.5 1.4.6 0-1.1.3-2.5 1-4 1.3.4 2.7.2 4-.1 1.2-.4 2.2-1 2.5-1.2.4 1.3 2 2.3 3.9 2.3 1.3 0 2.8-.3 3.5-1 .5 1.2 2.2 2 4 2 1.1 0 2.6-.5 3.3-1 .3.8.5 1.4.5 2.6 0 2.3 1 1.5 1.5-.1 1.4 0 1.7-1.8 1-2.9.7-.4 1.2-1.2 1.2-2Z"
        fill="#FFAC33"
      />
      <path
        d="M18 31a5.3 5.3 0 0 1-3.7-1.3 1 1 0 0 1 1.4-1.4s.8.7 2.3.7c1.5 0 2.3-.7 2.3-.7a1 1 0 0 1 1.4 0c.4.4.4 1 0 1.4-.1.1-1.4 1.3-3.7 1.3Zm1-5h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Z"
        fill="#C1694F"
      />
      <path
        d="M13 22a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2c0 .6-.4 1-1 1Zm10 0a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2c0 .6-.4 1-1 1Z"
        fill="#662113"
      />
    </svg>
  );
};

export interface FemaleIconProps {
  size?: number;
}

export let FemaleIcon: React.FC<FemaleIconProps> = (props) => {
  let { size = 24, ...rest } = props;

  return (
    <svg fill="none" viewBox="0 0 36 36" width={size} height={size} {...rest}>
      <path
        d="M18 3c6 0 16 3 16 16s0 16-3 16-7-3-13-3-10 3-13 3c-3.3 0-3-12-3-16C2 6 12 3 18 3Z"
        fill="#E95F28"
      />
      <path d="M6 18.6C6 10 11.4 3 18 3s12 7 12 15.5S24.6 34 18 34 6 27 6 18.6Z" fill="#FFDC5D" />
      <path
        d="M18 30a5.3 5.3 0 0 1-3.7-1.3 1 1 0 0 1 1.4-1.4s.8.7 2.3.7c1.5 0 2.3-.7 2.3-.7a1 1 0 0 1 1.4 0c.4.4.4 1 0 1.4-.1.1-1.4 1.3-3.7 1.3Z"
        fill="#DF1F32"
      />
      <path d="M19 25h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Z" fill="#C1694F" />
      <path
        d="M3 24v-1c0-5 3 .6 3-3s2-4 4-6l3-3s5 3 9 3 8 2 8 6 3-2 3 3v1h1v-5C34 6 24 1 18 1S2 6 2 19v5h1Z"
        fill="#E95F28"
      />
      <path
        d="M13 22a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2c0 .6-.4 1-1 1Zm10 0a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2c0 .6-.4 1-1 1Z"
        fill="#662113"
      />
    </svg>
  );
};