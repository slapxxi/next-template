import { Responsive } from 'components/Responsive';
import { Text, TextProps } from 'components/Text';

export const ResponsiveText = (props: TextProps) => {
  return (
    <Responsive component={Text} sm={{ size: 'sm' }} md={{ size: 'md' }} lg={{ size: 'lg' }} {...props} />
  );
};
