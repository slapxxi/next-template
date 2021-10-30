import Image from 'next/image';
import Flag from 'react-world-flags';
import tw from 'twin.macro';
import { getCountryName } from '../lib/getCountryName';
import { md } from '../lib/styles/mq';
import { User } from '../lib/types';
import { OnlineIndicator } from './OnlineIndicator';
import { Skeleton } from './Skeleton';
import { Title } from './Title';

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
