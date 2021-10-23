import styled from '@emotion/styled';
import dayjs from 'dayjs';
import Flag from 'react-world-flags';
import tw from 'twin.macro';
import { getCountryName } from '../lib/getCountryName';
import { lorem } from '../lib/lorem';
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

  return (
    <div css={[tw`flex flex-col gap-4`]}>
      <div css={[tw`flex flex-col gap-8 p-4`]}>
        <Skeleton loading={!user.about}>
          <Text>{user.about ?? lorem()}</Text>
        </Skeleton>

        <Button variant="fill" center>
          Say Hi
          <WaveIcon />
        </Button>

        <div css={[tw`flex gap-8 overflow-scroll`, { scrollSnapType: 'x mandatory' }]}>
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
            <div>Bid</div>
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

        <div css={(theme) => [{ color: theme.fgAccent }]}>
          Registered {dayjs(new Date(user.createdAt)).format('DD MMMM YYYY')}
        </div>
      </div>
    </div>
  );
};

export interface UserInfoPictureProps {
  user: User;
}

export let UserInfoPicture: React.FC<UserInfoPictureProps> = (props) => {
  let { user } = props;

  return (
    <div css={[tw`relative`]}>
      <div css={[tw`relative`, { width: '100%', paddingBottom: '159%' }]}>
        <Image
          src={user.image}
          css={[tw`shadow-xl rounded-b-3xl`]}
          layout="fill"
          draggable={false}
          objectFit="cover"
        />
      </div>

      <div css={[tw`absolute flex flex-col gap-2 bottom-4 left-4`]}>
        <Title size="lg">
          {user.name} {user.age}
        </Title>
        <div css={[tw`flex items-center gap-2`]}>
          <Skeleton loading={!user.country}>
            <Flag code={user.country ?? 'RU'} width={30} />
            {getCountryName(user.country ?? 'RU')}
          </Skeleton>
        </div>
        <svg
          viewBox="0 0 10 10"
          css={[
            tw`absolute bottom-full left-full`,
            {
              width: 10,
              fill: user.isOnline ? '#33e159' : 'tomato',
              transform: 'translateY(50%)',
            },
          ]}
        >
          <path d="m0 5a1 1 0 0110 0a1 1 0 01-10 0" />
        </svg>
      </div>
    </div>
  );
};

let Divider = styled.div(({ theme }) => [
  tw`flex-1 mx-4`,
  { borderBottom: `1px dashed ${theme.bgAccent}`, transform: 'translateY(-50%)' },
]);
