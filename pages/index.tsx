import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { clamp } from 'lodash';
import { Heart, Slash } from 'lucide-react';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { useQuery } from 'react-query';
import tw from 'twin.macro';
import { Blob } from '../components/Blob';
import { Button } from '../components/Button';
import { FormLogin } from '../components/FormLogin';
import { Image } from '../components/Image';
import { Layout } from '../components/Layout';
import { LOGO_GRAD_ID } from '../components/Logo';
import { Skeleton } from '../components/Skeleton';
import { Text } from '../components/Text';
import { Title } from '../components/Title';
import { UserInfo, UserInfoPicture } from '../components/UserInfo';
import { getHot } from '../lib/services/getHot';
import { getUser } from '../lib/services/getUser';
import { isZeroVec } from '../lib/vec';

interface HomePageProps {}

let Home: NextPage<HomePageProps> = () => {
  let [session, loading] = useSession();

  return (
    <Layout>
      <Skeleton loading={loading}>{session ? <IndexPage /> : <OnboardingPage />}</Skeleton>
    </Layout>
  );
};

export interface IndexPageProps {}

export let IndexPage: React.FC<IndexPageProps> = () => {
  let { query } = useRouter();
  let hotQuery = useQuery('hot', getHot);
  let userQuery = useQuery(`user-${query.id}`, () => getUser(query.id as string), {
    enabled: !!query.id,
    initialData: hotQuery.data?.find((p) => p.id === query.id),
  });
  let bindDrag = useDrag(
    (gesture) => {
      let { movement, dragging, swipe } = gesture;

      if (!isZeroVec(swipe)) {
        animateSwipeSpring.start({ x: `${swipe[0] * 100}%`, opacity: 0, scale: 0.3 });
      } else {
        if (dragging) {
          animateSwipeSpring.start({
            progress: clamp(movement[0] / window.innerWidth, -0.5, 0.5),
            x: `${(movement[0] / window.innerWidth) * 100}%`,
            scale: 1 - Math.abs(movement[0]) / window.innerWidth / 1.7,
            opacity: 1 - (Math.abs(movement[0]) / window.innerWidth) * 1.3,
          });
        } else {
          animateSwipeSpring.start({ x: '0%', scale: 1, opacity: 1, progress: 0 });
        }
      }
    },
    {
      axis: 'x',
      pointer: { touch: true },
      swipe: { distance: 160 },
    },
  );
  let [swipeSpring, animateSwipeSpring] = useSpring(
    { x: '0%', scale: 1, opacity: 1, progress: 0, config: { tension: 400 }, immediate: !query.id },
    [query.id],
  );

  return (
    <div css={[tw`mb-8`]}>
      <div css={[query.id && tw`hidden`, tw`p-4`]}>
        <div css={[tw`flex flex-col gap-8`]}>
          <Title>Hot</Title>
          <div css={[tw`flex gap-8 overflow-scroll`, { scrollSnapType: 'x mandatory' }]}>
            {hotQuery.status === 'success' &&
              hotQuery.data.map((p) => (
                <div
                  css={[{ width: 220, flex: '1 0 220px', scrollSnapAlign: 'center' }]}
                  key={p.id}
                >
                  <Title size="md">{p.name}</Title>
                  <Link href={`?id=${p.id}`} as={`/user/${p.id}`}>
                    <a>
                      <Image src={p.image} width={220} height={350} css={[tw`rounded-xl`]} />
                    </a>
                  </Link>
                </div>
              ))}
          </div>
          <Title>Male</Title>
          <div css={[tw`flex gap-8 overflow-scroll`, { scrollSnapType: 'x mandatory' }]}>
            {hotQuery.status === 'success' &&
              hotQuery.data
                .filter((p) => p.gender === 'male')
                .map((p) => (
                  <div
                    css={[{ width: 220, flex: '1 0 220px', scrollSnapAlign: 'center' }]}
                    key={p.id}
                  >
                    <Title size="md">{p.name}</Title>
                    <Link href={`?id=${p.id}`} as={`/user/${p.id}`}>
                      <a>
                        <Image src={p.image} width={220} height={350} css={[tw`rounded-xl`]} />
                      </a>
                    </Link>
                  </div>
                ))}
          </div>
          <Title>Female</Title>
          <div css={[tw`flex gap-8 overflow-scroll`, { scrollSnapType: 'x mandatory' }]}>
            {hotQuery.status === 'success' &&
              hotQuery.data
                .filter((p) => p.gender === 'female')
                .map((p) => (
                  <div
                    css={[{ width: 220, flex: '1 0 220px', scrollSnapAlign: 'center' }]}
                    key={p.id}
                  >
                    <Title size="md">{p.name}</Title>
                    <Link href={`?id=${p.id}`} as={`/user/${p.id}`}>
                      <a>
                        <Image src={p.image} width={220} height={350} css={[tw`rounded-xl`]} />
                      </a>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>

      {query.id && (
        <div>
          <div {...bindDrag()} style={{ position: 'relative', touchAction: 'pan-y' }}>
            <animated.div
              css={[{ transformOrigin: 'top center' }]}
              style={{ x: swipeSpring.x, scale: swipeSpring.scale }}
            >
              <UserInfoPicture user={userQuery.data} />
            </animated.div>
            <animated.div
              style={{
                scale: swipeSpring.progress.to([0.1, 0.5], [0, 1], 'clamp'),
                x: '-50%',
                y: '-50%',
                transformOrigin: 'center',
              }}
              css={[tw`absolute left-1/2 top-1/2`]}
            >
              <Heart
                size={128}
                stroke="none"
                fill={`url(#${LOGO_GRAD_ID})`}
                css={[{ filter: 'drop-shadow(3px 3px 2px #0004)' }]}
              />
            </animated.div>
            <animated.div
              style={{
                scale: swipeSpring.progress.to([-0.5, -0.1], [1, 0], 'clamp'),
                x: '-50%',
                y: '-50%',
                transformOrigin: 'center',
              }}
              css={[tw`absolute z-10 top-1/2 left-1/2`, { color: 'crimson' }]}
            >
              <Slash
                size={96}
                stroke={`url(#${LOGO_GRAD_ID})`}
                css={[{ filter: 'drop-shadow(3px 3px 2px #0004)' }]}
              />
            </animated.div>
          </div>
          <animated.div
            css={[{ transformOrigin: 'top center' }]}
            style={{ x: swipeSpring.x, opacity: swipeSpring.opacity.to([0, 0.8, 1], [0, 0.1, 1]) }}
          >
            <UserInfo user={userQuery.data} />
          </animated.div>
        </div>
      )}
    </div>
  );
};

interface OnboardingPageProps {}

let OnboardingPage: React.FC<OnboardingPageProps> = () => {
  return (
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

export default Home;
