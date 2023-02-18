import classNames from 'classnames';
import styles from './AnimalCard.module.scss';
import { Title } from './Title';

export type AnimalCardProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  img?: 'dog' | 'cat' | 'bird' | 'hamster' | 'grooming';
  color?: 'blue' | 'orange' | 'gray' | 'purple' | 'pink' | 'rose';
};

export const AnimalCard = (props: AnimalCardProps) => {
  const { children, className = '', title = '', color = 'gray', img = 'dog', ...rest } = props;

  return (
    <div
      className={classNames(
        className,
        styles.card,
        'rounded-3xl p-5',
        color === 'gray' && 'from-gray-300 to-gray-200',
        color === 'blue' && 'from-sky-300 to-sky-200',
        color === 'orange' && 'from-orange-300 to-orange-200',
        color === 'purple' && 'from-purple-400 to-purple-300',
        color === 'pink' && 'from-pink-300 to-pink-200',
        color === 'rose' && 'from-rose-100 to-rose-50',
      )}
      style={{
        backgroundImage: `url(/paw-small.svg), url(/${img}.jpg), linear-gradient(to top right, var(--tw-gradient-stops))`,
      }}
      {...rest}
    >
      <Title>{title}</Title>
    </div>
  );
};
