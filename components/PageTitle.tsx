import classNames from 'classnames';
import useMediaQuery from '../lib/hooks/useMediaQuery';
import { mdQuery } from '../lib/styles/mq';
import { Title, TitleProps } from './Title';

export type PageTitleProps = {
  children?: React.ReactNode;
  className?: string;
};

export let PageTitle = (props: PageTitleProps) => {
  let { children, className = '', ...rest } = props;
  let md = useMediaQuery(mdQuery);
  let titleSize: TitleProps['size'] = md ? 54 : '2xl';

  return (
    <Title className={classNames(className)} variant="decorated" size={titleSize} {...rest}>
      {children}
    </Title>
  );
};
