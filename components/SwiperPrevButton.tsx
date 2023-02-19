import classNames from 'classnames';
import { useSwiper } from 'swiper/react';

export type SwiperPrevButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export const SwiperPrevButton = (props: SwiperPrevButtonProps) => {
  const { children, className = '', ...rest } = props;
  const swiper = useSwiper();

  return (
    <button className={classNames(className)} onClick={() => swiper.slidePrev()} {...rest}>
      {children}
    </button>
  );
};
