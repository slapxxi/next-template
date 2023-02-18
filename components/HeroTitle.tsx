import { Responsive } from './Responsive';
import { Title, TitleProps } from './Title';

export type HeroTitleProps = {} & TitleProps;

export const HeroTitle = (props: HeroTitleProps) => {
  return (
    <Responsive
      component={Title}
      weight={700}
      sm={{ size: '3xl' }}
      md={{ size: '4xl' }}
      lg={{ size: '6xl' }}
      {...props}
    />
  );
};
