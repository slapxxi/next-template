import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';
import { md } from '../lib/styles/mq';
import { User } from '../lib/types';
import { Skeleton } from './Skeleton';
import { UserInfoPicture } from './UserInfoPicture';

export interface UserCardsProps {
  users: User[];
  loading?: boolean;
}

export let UserCards: React.FC<UserCardsProps> = (props) => {
  let { users, loading = false } = props;

  return (
    <div
      css={[
        tw`flex gap-8 overflow-scroll`,
        { scrollSnapType: 'x mandatory' },
        md(tw`grid gap-4 overflow-hidden`, {
          gridTemplateColumns: 'repeat(4, 1fr)',
        }),
      ]}
    >
      {(loading
        ? new Array(4)
            .fill(null)
            .map((_, i) => ({ name: 'loading', id: i, image: '/img/placeholder.svg' }))
        : users
      ).map((p) => (
        <div css={[tw`relative`, { flex: '1 0 220px', scrollSnapAlign: 'center' }]} key={p.id}>
          {loading ? (
            <Skeleton loading>
              <Image src={p.image} width={220} height={350} css={[tw`rounded-xl`]} />
            </Skeleton>
          ) : (
            <>
              <Link href={`?id=${p.id}`} as={`/user/${p.id}`}>
                <a>
                  <UserInfoPicture user={p} showInfo />
                </a>
              </Link>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
