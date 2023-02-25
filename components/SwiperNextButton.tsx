import classNames from 'classnames';
import { useState } from 'react';
import { useSwiper } from 'swiper/react';

export type SwiperNextButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export const SwiperNextButton = (props: SwiperNextButtonProps) => {
  const { children, className = '', ...rest } = props;
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  swiper.on('activeIndexChange', (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  });

  return (
    <button
      className={classNames(className)}
      onClick={() => swiper.slideNext()}
      data-beginning={isBeginning}
      data-end={isEnd}
      {...rest}
    >
      {children}
    </button>
  );
};
