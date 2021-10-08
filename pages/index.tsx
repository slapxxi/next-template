import type { NextPage } from 'next';
import tw, { theme } from 'twin.macro';

let Home: NextPage = () => {
  return (
    <div css={[tw`text-rose-300`]}>
      <svg viewBox="0 0 60 17" fill="currentColor" width="300">
        <defs>
          <linearGradient id="grad">
            <stop offset="0" stopColor={theme`colors.rose.300`} />
            <stop offset="1" stopColor={theme`colors.rose.400`} />
          </linearGradient>
        </defs>
        <text y="15" fontFamily="Pacifico" fill="url(#grad)">
          lovebirds
        </text>
      </svg>
    </div>
  );
};

export default Home;
