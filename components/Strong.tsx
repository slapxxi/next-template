import classNames from 'classnames';
import { pickValue } from '../lib/pickValue';

export type StrongProps = {
  children?: React.ReactNode;
  className?: string;
  weight?: 400 | 500 | 600 | 700;
};

export const Strong = (props: StrongProps) => {
  const { children, className = '', weight = 600, ...rest } = props;
  return (
    <strong
      className={classNames(
        className,
        pickValue(
          weight,
          [400, 'font-normal'],
          [500, 'font-medium'],
          [600, 'font-semibold'],
          [700, 'font-bold'],
        ),
      )}
      {...rest}
    >
      {children}
    </strong>
  );
};
