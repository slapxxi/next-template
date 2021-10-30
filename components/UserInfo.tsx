import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { XCircle } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Flag from 'react-world-flags';
import tw from 'twin.macro';
import { getCountryName } from '../lib/getCountryName';
import { lorem } from '../lib/lorem';
import { md } from '../lib/styles/mq';
import { User } from '../lib/types';
import { Button } from './Button';
import { WaveIcon } from './Icons';
import { Image } from './Image';
import { Skeleton } from './Skeleton';
import { Text } from './Text';
import { Title } from './Title';

export interface UserPageProps {
  user: User;
}

export let UserInfo: React.FC<UserPageProps> = (props) => {
  let { user } = props;
  let [showLightbox, setShowLightbox] = useState(false);

  return (
    <>
      <LightBox open={showLightbox} onToggle={(open) => setShowLightbox(open)}>
        <div css={[tw`relative flex flex-col gap-8 mt-8`]}>
          <Image src="/img/male-5.png" width={220} height={350} objectFit="cover" />
          <Image src="/img/female-5.png" width={220} height={350} objectFit="cover" />
        </div>
      </LightBox>

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
          onClick={() => setShowLightbox(true)}
        >
          <div
            css={[
              tw`overflow-hidden rounded-lg`,
              { flex: '0 0 120px', width: 120, height: 120, scrollSnapAlign: 'center' },
            ]}
          >
            <Image
              src={user.image}
              width={220}
              height={350}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div
            css={[
              tw`overflow-hidden rounded-lg`,
              { flex: '0 0 120px', width: 120, height: 120, scrollSnapAlign: 'center' },
            ]}
          >
            <Image
              src={user.image}
              width={220}
              height={350}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div
            css={[
              tw`overflow-hidden rounded-lg`,
              { flex: '0 0 120px', width: 120, height: 120, scrollSnapAlign: 'center' },
            ]}
          >
            <Image
              src={user.image}
              width={220}
              height={350}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div
            css={[
              tw`overflow-hidden rounded-lg`,
              { flex: '0 0 120px', width: 120, height: 120, scrollSnapAlign: 'center' },
            ]}
          >
            <Image
              src={user.image}
              width={220}
              height={350}
              layout="responsive"
              objectFit="cover"
            />
          </div>
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

export interface LightBoxProps {
  open?: boolean;
  onToggle?: (open: boolean) => void;
}

export let LightBox: React.FC<LightBoxProps> = (props) => {
  let { children, open = false, onToggle } = props;

  useEffect(() => {
    if (open) {
      document.documentElement.style.height = '100%';
      document.documentElement.style.overflow = 'hidden';
    }
    return () => {
      document.documentElement.style.height = null;
      document.documentElement.style.overflow = null;
    };
  }, [open]);

  if (!open) {
    return null;
  }

  function handleToggle() {
    onToggle?.(!open);
  }

  return ReactDOM.createPortal(
    <div
      css={[tw`fixed top-0 z-20 w-full h-screen p-4`, { background: '#000d', overflow: 'scroll' }]}
    >
      <div css={[tw`sticky top-0 z-10 flex justify-end`]}>
        <Button onClick={handleToggle}>
          <XCircle />
        </Button>
      </div>

      {children}
    </div>,
    document.querySelector('#__next'),
  );
};

export interface UserInfoPictureProps {
  user: User;
  profileView?: boolean;
  showInfo?: boolean;
}

export let UserInfoPicture: React.FC<UserInfoPictureProps> = (props) => {
  let { user, profileView = false, showInfo = false } = props;

  return (
    <div css={[tw`relative`]}>
      <div css={[tw`relative`, { width: '100%', paddingBottom: '159%' }]}>
        <Image
          src={user.image}
          css={[
            tw`shadow-xl rounded-xl`,
            profileView && [tw`rounded-none rounded-b-3xl`, md([tw`rounded-3xl`])],
          ]}
          layout="fill"
          draggable={false}
          objectFit="cover"
        />
      </div>

      <div css={[tw`absolute flex flex-col hidden gap-2 bottom-4 left-4`, showInfo && tw`flex`]}>
        <Title size="lg">
          {user.name} {user.age}
        </Title>

        <div css={[tw`flex items-center gap-2`]}>
          <Skeleton loading={!user.country}>
            <Flag code={user.country ?? 'RU'} width={16} />
            {getCountryName(user.country ?? 'RU')}
          </Skeleton>
        </div>

        <OnlineIndicator online={user.isOnline} css={[tw`absolute bottom-full left-full`]} />
      </div>
    </div>
  );
};

export interface OnlineIndicatorProps {
  online?: boolean;
  className?: string;
}

export let OnlineIndicator: React.FC<OnlineIndicatorProps> = (props) => {
  let { online = false, ...rest } = props;

  return (
    <svg
      viewBox="0 0 10 10"
      css={[
        {
          width: 10,
          fill: online ? '#33e159' : 'tomato',
          transform: 'translateY(50%)',
        },
      ]}
      {...rest}
    >
      <path d="m0 5a1 1 0 0110 0a1 1 0 01-10 0" />
    </svg>
  );
};

let Divider = styled.div(({ theme }) => [
  tw`flex-1 mx-4`,
  { borderBottom: `1px dashed ${theme.bgAccent}`, transform: 'translateY(-50%)' },
]);
