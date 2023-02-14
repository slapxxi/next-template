import { Logo, LogoProps } from 'components/Logo';
import { Responsive } from 'components/Responsive';

export const ResponsiveLogo = (props: LogoProps) => {
  return (
    <Responsive component={Logo} sm={{ size: 'sm' }} md={{ size: 'md' }} lg={{ size: 'lg' }} {...props} />
  );
};
