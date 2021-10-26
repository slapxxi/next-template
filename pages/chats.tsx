import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';
import { Avatar } from '../components/Avatar';
import { Layout } from '../components/Layout';
import { Text } from '../components/Text';
import { Title } from '../components/Title';

export interface ChatsPageProps {}

let ChatsPage: React.FC<ChatsPageProps> = () => {
  return (
    <Layout>
      <StyledList>
        <Link href={`/chats/marisol`}>
          <StyledListItem>
            <Avatar href="/img/female-1.png" size={72} />
            <StyledTextBlock>
              <Title size="md">Marisol</Title>
              <Text variant="subtle">Why so silent all of a sudden?</Text>
            </StyledTextBlock>
            <StyledBadge>3</StyledBadge>
          </StyledListItem>
        </Link>

        <Link href={`/chats/emily`}>
          <StyledListItem>
            <Avatar href="/img/female-4.png" size={72} />

            <StyledTextBlock>
              <Title size="md">Emily</Title>
              <Text variant="subtle">It was nice to meet ya!</Text>
            </StyledTextBlock>
          </StyledListItem>
        </Link>
      </StyledList>
    </Layout>
  );
};

let StyledList = styled.ul([tw`flex flex-col gap-6 p-2 m-0 list-none`]);
let StyledListItem = styled.li([tw`flex items-center gap-2`]);
let StyledBadge = styled.div([
  tw`flex items-center justify-center w-6 h-6 p-2 text-sm bg-red-500 rounded-full`,
]);
let StyledTextBlock = styled.div([tw`flex flex-col flex-1 gap-2`]);

export default ChatsPage;
