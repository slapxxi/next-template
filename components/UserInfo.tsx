import styled from '@emotion/styled';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';
import { useLightbox } from '../lib/hooks/useLightbox';
import { lorem } from '../lib/lorem';
import { md } from '../lib/styles/mq';
import { User } from '../lib/types';
import { Button } from './Button';
import { WaveIcon } from './Icons';
import { Image } from './Image';
import { OnlineIndicator } from './OnlineIndicator';
import { Skeleton } from './Skeleton';
import { Text } from './Text';
import { Title } from './Title';

export interface UserPageProps {
  user: User;
}

export let UserInfo: React.FC<UserPageProps> = (props) => {
  let { user } = props;
  let lb = useLightbox();

  return (
    <>
      <div css={[tw`flex flex-col gap-8 p-4`, md(tw`p-0`)]}>
        <Title css={[tw`relative hidden`, { width: 'fit-content' }, md(tw`flex`)]}>
          {user.name} {user.age}
          <OnlineIndicator online={user.isOnline} css={[tw`absolute -top-2 -right-2`]} />
        </Title>

        <Skeleton loading={!user.about}>
          <Text css={[md(tw`hidden`)]}>{user.about ?? lorem()}</Text>
        </Skeleton>

        <Link href={`/chats/${user.id}`}>
          <Button variant="fill" center css={md({ width: 'fit-content' })}>
            Say Hi
            <WaveIcon />
          </Button>
        </Link>

        <div
          css={[tw`flex gap-8 overflow-scroll`, { scrollSnapType: 'x mandatory' }, md(tw`hidden`)]}
          onClick={() => lb.toggle()}
        >
          {user.photos.map((p) => (
            <div
              css={[
                tw`relative overflow-hidden rounded-xl`,
                { flex: '0 0 120px', scrollSnapAlign: 'center' },
              ]}
            >
              <Image src={p} width={220} height={220} objectFit="cover" />
            </div>
          ))}
        </div>

        <div css={[tw`flex flex-col w-full gap-4`]}>
          <div css={[tw`flex`]}>
            <Title size="lg">Bid</Title>
            <Divider />
            <div>{user.bid} RUB</div>
          </div>
          <div css={[tw`flex`]}>
            <div>Height</div>
            <Divider />
            <div>{user.height} cm</div>
          </div>
          <div css={[tw`flex`]}>
            <div>Weight</div>
            <Divider />
            <div>{user.weight} kg</div>
          </div>
          <div css={[tw`flex`]}>
            <div>Eye Color</div>
            <Divider />
            <div>{user.eyeColor}</div>
          </div>
          <div css={[tw`flex`]}>
            <div>Hair Color</div>
            <Divider />
            <Skeleton loading={!user.hairColor}>
              <div>{user.hairColor ?? 'neutral'}</div>
            </Skeleton>
          </div>
        </div>

        <Skeleton loading={!user.about}>
          <Text css={[tw`hidden`, md(tw`block`)]}>{user.about ?? lorem()}</Text>
        </Skeleton>

        <div css={(theme) => [{ color: theme.fgAccent }]}>
          Registered {dayjs(new Date(user.createdAt)).format('DD MMMM YYYY')}
        </div>
      </div>
    </>
  );
};

let Divider = styled.div(({ theme }) => [
  tw`flex-1 mx-4`,
  { borderBottom: `1px dashed ${theme.bgAccent}`, transform: 'translateY(-50%)' },
]);
