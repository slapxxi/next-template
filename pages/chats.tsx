import styled from '@emotion/styled';
import { last } from 'lodash';
import Link from 'next/link';
import React from 'react';
import { useQuery } from 'react-query';
import tw from 'twin.macro';
import { Avatar } from '../components/Avatar';
import { Layout } from '../components/Layout';
import { Spinner } from '../components/Spinner';
import { Text } from '../components/Text';
import { Title } from '../components/Title';
import { getChats } from '../lib/services/getChats';
import { ChatMessage } from '../lib/types';

export interface ChatsPageProps {}

let ChatsPage: React.FC<ChatsPageProps> = () => {
  let chatsQuery = useQuery('chats', () => getChats());

  if (chatsQuery.status === 'loading') {
    return (
      <Layout indent center>
        <Spinner />
      </Layout>
    );
  }

  return (
    <Layout>
      <StyledList>
        {chatsQuery.data.map((c) => {
          let unreadMessages = c.messages.filter(filterUnread);
          let lastMessage: ChatMessage = last(c.messages) ?? ({ text: '' } as any);

          return (
            <Link href={`/chats/${c.id}`} key={c.id}>
              <StyledListItem>
                <Avatar href="/img/female-1.png" size={72} />
                <StyledTextBlock>
                  <Title size="md">{c.participants.map((p) => p.name).join(' ')}</Title>
                  <Text variant="subtle">{lastMessage.text}</Text>
                </StyledTextBlock>

                {unreadMessages.length !== 0 && <StyledBadge>{unreadMessages.length}</StyledBadge>}
              </StyledListItem>
            </Link>
          );
        })}
      </StyledList>
    </Layout>
  );
};

function filterUnread(message: ChatMessage) {
  return message.status === 'unread';
}

let StyledList = styled.ul([tw`flex flex-col gap-6 p-2 m-0 list-none`]);
let StyledListItem = styled.li([tw`flex items-center gap-2 cursor-pointer hover:opacity-75`]);
let StyledBadge = styled.div([
  tw`flex items-center justify-center w-6 h-6 p-2 text-sm bg-red-500 rounded-full`,
]);
let StyledTextBlock = styled.div([tw`flex flex-col flex-1 gap-2`]);

export default ChatsPage;
