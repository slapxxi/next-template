import classNames from 'classnames';
import { useState } from 'react';
import { useSwiper } from 'swiper/react';

export type SwiperPrevButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export const SwiperPrevButton = (props: SwiperPrevButtonProps) => {
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
      onClick={() => swiper.slidePrev()}
      data-beginning={isBeginning}
      data-end={isEnd}
      {...rest}
    >
      {children}
    </button>
  );
};
