import styled from '@emotion/styled';
import { ChevronLeft, Send } from 'lucide-react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { useQuery } from 'react-query';
import tw from 'twin.macro';
import { Avatar } from '../../components/Avatar';
import { Input } from '../../components/Input';
import { Layout } from '../../components/Layout';
import { Title } from '../../components/Title';
import { OnlineIndicator } from '../../components/UserInfo';

interface ChatPageProps {}

let ChatPage: React.FC<ChatPageProps> = () => {
  let { query } = useRouter();
  let chatQuery = useQuery(`chat-${query.chatid}`, () => null, { refetchInterval: 2000 });
  console.log(chatQuery);

  return (
    <Layout hideHeader hideFooter>
      <main css={[tw`flex flex-col h-screen`]}>
        <header
          css={(theme) => [
            tw`relative flex items-center p-2`,
            { minHeight: 70, background: theme.bg },
          ]}
        >
          <ChevronLeft />
          <Link href="/chats">
            <a css={[tw`p-4`]}>
              <Title size="md">{query.chatid}</Title>
            </a>
          </Link>
          <OnlineIndicator online />
        </header>

        <section
          css={(theme) => [
            tw`flex flex-col flex-1 max-h-screen gap-6 p-4 overflow-scroll`,
            { background: theme.bg },
          ]}
        >
          <StyledMessage>
            <StyledAvatar href="/img/female-4.png" size={40} />
            <StyledMessageBubble>How are you doin ma buddha?</StyledMessageBubble>
          </StyledMessage>

          <StyledMessage recipient>
            <StyledAvatar href="/img/female-1.png" size={40} />
            <StyledMessageBubble>Im fine u?</StyledMessageBubble>
          </StyledMessage>

          <StyledMessage recipient>
            <StyledAvatar href="/img/female-1.png" size={40} />
            <StyledMessageBubble>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maiores saepe quos
              expedita cupiditate tempore minima ducimus ab nisi corporis voluptatem officia quaerat
              voluptas recusandae libero, similique non dicta vero.
            </StyledMessageBubble>
          </StyledMessage>

          {/* todo: delete */}
          {new Array(20).fill(null).map((_, i) => (
            <StyledMessage recipient={i % 2 === 1} key={i}>
              <StyledAvatar
                href={i % 2 === 1 ? '/img/female-1.png' : '/img/female-4.png'}
                size={40}
              />
              <StyledMessageBubble>Message #{i + 1}</StyledMessageBubble>
            </StyledMessage>
          ))}
        </section>

        <div css={[tw`p-2`]}>
          <Input placeholder="New Message..." iconRight={<Send />} />
        </div>
      </main>
    </Layout>
  );
};

let StyledMessage = styled.div<{ recipient?: boolean }>(({ recipient }) => [
  tw`flex items-start gap-2`,
  recipient && {
    justifyContent: 'flex-end',
    [StyledMessageBubble as any]: [
      tw`order-1 from-blue-400 to-blue-600`,
      { borderRadius: '10px 0 10px 10px' },
    ],
    [StyledAvatar as any]: [tw`order-2`],
  },
]);

let StyledMessageBubble = styled.p([
  tw`order-2 p-2 m-0 rounded-full bg-gradient-to-r from-pink-600 to-pink-500`,
  { borderRadius: '0 10px 10px' },
]);

let StyledAvatar = styled(Avatar)([tw`flex-shrink-0 order-1`]);

export default ChatPage;
