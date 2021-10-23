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
import ReactDOM from 'react-dom';
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
import { User } from '../lib/types';
import { isZeroVec } from '../lib/vec';

interface HomePageProps {}

let HomePage: NextPage<HomePageProps> = () => {
  let [session] = useSession();
  return <Layout>{session ? <IndexPage /> : <OnboardingPage />}</Layout>;
};

export interface IndexPageProps {}

export let IndexPage: React.FC<IndexPageProps> = () => {
  let { query } = useRouter();
  let hotQuery = useQuery('hot', getHot);
  let userQuery = useQuery(`user-${query.id}`, () => getUser(query.id as string), {
    enabled: !!query.id,
    initialData: hotQuery.data?.find((p) => p.id === query.id),
  });
  console.log(userQuery);
  let bindDrag = useDrag(
    (gesture) => {
      let { movement, dragging, swipe } = gesture;

      if (!isZeroVec(swipe)) {
        animateSwipeSpring.start({ x: `${swipe[0] * 100}%`, scale: 0.3 });
      } else {
        if (dragging) {
          animateSwipeSpring.start({
            progress: clamp(movement[0] / window.innerWidth, -0.5, 0.5),
            x: `${(movement[0] / window.innerWidth) * 100}%`,
            scale: 1 - Math.abs(movement[0]) / window.innerWidth / 1.7,
          });
        } else {
          animateSwipeSpring.start({ x: '0%', scale: 1, progress: 0 });
        }
      }
    },
    {
      axis: 'x',
      pointer: { touch: true },
      swipe: { distance: 130 },
    },
  );
  let [swipeSpring, animateSwipeSpring] = useSpring(
    { x: '0%', scale: 1, progress: 0, config: { tension: 400 }, immediate: !query.id },
    [query.id],
  );

  return (
    <div css={[tw`mb-8`]}>
      <div css={[query.id && tw`hidden`, tw`p-4`]}>
        <div css={[tw`flex flex-col gap-8`]}>
          <Title>Hot</Title>
          <UserCards users={hotQuery.data} loading={hotQuery.status === 'loading'} />

          <Title>Male</Title>
          <UserCards
            users={hotQuery.data?.filter((p) => p.gender === 'male')}
            loading={hotQuery.status === 'loading'}
          />

          <Title>Female</Title>
          <UserCards
            users={hotQuery.data?.filter((p) => p.gender === 'female')}
            loading={hotQuery.status === 'loading'}
          />
        </div>
      </div>

      {query.id && (
        <div>
          <div {...bindDrag()} style={{ position: 'relative', touchAction: 'pan-y' }}>
            <animated.div
              css={[{ transformOrigin: 'top center' }]}
              style={{
                x: swipeSpring.x,
                scale: swipeSpring.scale,
                opacity: swipeSpring.progress.to([-0.5, 0, 0.5], [0, 1, 1]),
              }}
            >
              <UserInfoPicture user={userQuery.data} />
            </animated.div>

            <Modal>
              <animated.div
                style={{
                  scale: swipeSpring.progress.to([0.1, 0.5], [0, 1], 'clamp'),
                  x: '-50%',
                  y: '-50%',
                  transformOrigin: 'center',
                }}
                css={[tw`fixed left-1/2 top-1/2`]}
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
                css={[tw`fixed z-10 top-1/2 left-1/2`, { color: 'crimson' }]}
              >
                <Slash
                  size={96}
                  stroke={`url(#${LOGO_GRAD_ID})`}
                  css={[{ filter: 'drop-shadow(3px 3px 2px #0004)' }]}
                />
              </animated.div>
            </Modal>
          </div>
          <animated.div
            css={[{ transformOrigin: 'top center' }]}
            style={{
              x: swipeSpring.x,
              opacity: swipeSpring.progress.to([-0.5, 0, 0.5], [0, 1, 0]),
            }}
          >
            <UserInfo user={userQuery.data} />
          </animated.div>
        </div>
      )}
    </div>
  );
};

export interface UserCardsProps {
  users: User[];
  loading?: boolean;
}

export let UserCards: React.FC<UserCardsProps> = (props) => {
  let { users, loading = false } = props;

  return (
    <div css={[tw`flex gap-8 overflow-scroll`, { scrollSnapType: 'x mandatory' }]}>
      {(loading
        ? new Array(3)
            .fill(null)
            .map((_, i) => ({ name: 'loading', id: i, image: '/img/placeholder.svg' }))
        : users
      ).map((p) => (
        <div
          css={[
            tw`relative`,
            { width: 220, height: 350, flex: '1 0 220px', scrollSnapAlign: 'center' },
          ]}
          key={p.id}
        >
          {loading ? (
            <Skeleton loading>
              <Title size="md">{p.name}</Title>
              <Link href={`?id=${p.id}`} as={`/user/${p.id}`}>
                <a>
                  <Image src={p.image} width={220} height={350} css={[tw`rounded-xl`]} />
                </a>
              </Link>
            </Skeleton>
          ) : (
            <>
              <Title size="md">{p.name}</Title>
              <Link href={`?id=${p.id}`} as={`/user/${p.id}`}>
                <a>
                  <Image src={p.image} css={[tw`rounded-xl`]} layout="fill" objectFit="cover" />
                </a>
              </Link>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

interface OnboardingPageProps {}

let OnboardingPage: React.FC<OnboardingPageProps> = () => {
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

function Modal(props) {
  let { children } = props;
  return ReactDOM.createPortal(children, document.getElementById('__next'));
}

export default HomePage;
