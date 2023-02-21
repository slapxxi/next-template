import { Text, TextProps } from 'components/Text';
import { Responsive } from './Responsive';

export type HeroTextProps = {} & TextProps;

export const HeroText = (props: HeroTextProps) => {
  // @ts-ignore
  return <Responsive component={Text} size="lg" md={{ size: '2xl' }} lg={{ size: '3xl' }} {...props} />;
};
