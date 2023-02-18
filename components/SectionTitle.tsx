import { Responsive } from './Responsive';
import { Title, TitleProps } from './Title';

export type SectionTitleProps = {} & TitleProps;

export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <Responsive
      component={Title}
      sm={{ size: '2xl' }}
      md={{ size: '3xl' }}
      lg={{ size: '4xl', decorate: true }}
      {...props}
    />
  );
};
