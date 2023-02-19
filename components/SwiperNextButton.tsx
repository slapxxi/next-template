import classNames from 'classnames';
import { useSwiper } from 'swiper/react';

export type SwiperNextButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export const SwiperNextButton = (props: SwiperNextButtonProps) => {
  const { children, className = '', ...rest } = props;
  const swiper = useSwiper();

  return (
    <button className={classNames(className)} onClick={() => swiper.slideNext()} {...rest}>
      {children}
    </button>
  );
};
