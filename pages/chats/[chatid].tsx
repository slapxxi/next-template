import styled from '@emotion/styled';
import { animated, useSpring } from '@react-spring/web';
import { ChevronLeft, Send } from 'lucide-react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useLayoutEffect, useReducer, useRef } from 'react';
import { useQuery } from 'react-query';
import tw from 'twin.macro';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Layout } from '../../components/Layout';
import { OnlineIndicator } from '../../components/OnlineIndicator';
import { Title } from '../../components/Title';
import { useMediaQuery } from '../../lib/hooks/useMediaQuery';
import { getChat } from '../../lib/services/getChat';
import { ChatMessage } from '../../lib/types';

interface ChatPageProps {}

let ChatPage: React.FC<ChatPageProps> = () => {
  let { query } = useRouter();
  let chatQuery = useQuery(`chat-${query.chatid}`, () => getChat(query.chatid as string), {
    // refetchInterval: 2000,
  });
  let isMobile = useMediaQuery('(max-width: 680px)');
  let [messageSpring, animateMessage] = useSpring({ x: 0, y: 0, avatarY: 0, opacity: 1 }, []);
  let [state, dispatch] = useReducer(chatReducer, { status: 'idle', message: '' });
  let chatRef = useRef(null);
  let messageRef = useRef(null);
  console.log(chatQuery.data);

  useLayoutEffect(() => {
    if (state.status === 'sending') {
      let container = chatRef.current;
      container.scrollTop = container.scrollHeight;
      let source = document.querySelector('[data-flip-id=source]');
      let sourceRect = source.getBoundingClientRect();
      let message = messageRef.current;
      let messageRect = message.getBoundingClientRect();

      animateMessage.start({
        x: sourceRect.x - messageRect.x,
        y: sourceRect.y - messageRect.y,
        opacity: 0,
        immediate: true,
      });
      animateMessage.start({ x: 0, y: 0, opacity: 1, immediate: false });
      source.style.visibility = 'hidden';

      setTimeout(() => {
        dispatch({ type: 'FINISH' });
      }, 1000);
    }
  }, [state.status]);

  useLayoutEffect(() => {
    let el = chatRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, []);

  function handleChange(e) {
    dispatch({ type: 'SET_MESSAGE', payload: e.target.value });
  }

  function handleSend() {
    dispatch({ type: 'SEND' });
  }

  return (
    <Layout hideHeader hideFooter>
      <main css={[tw`flex flex-col h-screen`]}>
        <header
          css={(theme) => [
            tw`relative flex items-center p-2`,
            { minHeight: 70, background: theme.bg, boxShadow: '2px 2px 10px #0005' },
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

        {chatQuery.status === 'success' && (
          <section
            ref={chatRef}
            css={(theme) => [
              tw`flex flex-col flex-1 max-h-screen gap-6 p-4 overflow-scroll`,
              { background: theme.bg, paddingBottom: 80 },
            ]}
          >
            {chatQuery.data.messages.map((m: ChatMessage) => (
              <StyledMessage key={m.id}>
                <StyledAvatar
                  href={chatQuery.data.participants.find((p) => p._id === m.author)?.image}
                  size={40}
                />
                <StyledMessageBubble>{m.text}</StyledMessageBubble>
              </StyledMessage>
            ))}

            {state.status === 'sending' && (
              <StyledMessage recipient css={[tw`relative z-10`]}>
                <animated.div style={messageSpring}>
                  <StyledMessageBubble ref={messageRef}>{state.message}</StyledMessageBubble>
                </animated.div>

                <animated.div style={{ y: messageSpring.y, opacity: messageSpring.opacity }}>
                  <StyledAvatar href="/img/female-1.png" size={40} />
                </animated.div>
              </StyledMessage>
            )}
          </section>
        )}

        <div css={(theme) => [tw`absolute bottom-0 w-full p-2`, { background: theme.bg }]}>
          <Input
            placeholder="New Message..."
            iconRight={
              <Button onClick={handleSend}>
                <Send />
              </Button>
            }
            value={state.status === 'sending' ? '' : state.message}
            onChange={handleChange}
          />

          {state.status === 'sending' && (
            <StyledMessage recipient css={[tw`absolute top-4 left-4`]} data-flip-id="source">
              <StyledMessageBubble>{state.message}</StyledMessageBubble>
            </StyledMessage>
          )}
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

function chatReducer(state, action) {
  if (state.status === 'sending') {
    switch (action.type) {
      case 'FINISH':
        return { ...state, status: 'idle' };
      default:
        return state;
    }
  }

  switch (action.type) {
    case 'SET_MESSAGE':
      return { ...state, message: action.payload };
    case 'SEND':
      return { ...state, status: 'sending' };
    default:
      return state;
  }
}

export default ChatPage;
