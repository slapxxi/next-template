import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { clamp } from 'lodash';
import { Heart, Slash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import tw from 'twin.macro';
import { useLightbox } from '../lib/hooks/useLightbox';
import { useMediaQuery } from '../lib/hooks/useMediaQuery';
import { getUser } from '../lib/services/getUser';
import { md } from '../lib/styles/mq';
import { isZeroVec } from '../lib/vec';
import { LightBox } from './LightBox';
import { LOGO_GRAD_ID } from './Logo';
import { Modal } from './Modal';
import { UserInfo } from './UserInfo';
import { UserInfoPicture } from './UserInfoPicture';

interface UserViewProps {
  userId: string;
}

export let UserView: React.FC<UserViewProps> = (props) => {
  let { userId } = props;
  let { data } = useQuery(`user-${userId}`, () => getUser(userId), {
    onSuccess: (data) => setActiveImage(data.image),
  });
  let bindDrag = useDrag(
    (gesture) => {
      let { movement, dragging, swipe } = gesture;

      if (isZeroVec(swipe)) {
        if (dragging) {
          animateSwipeSpring.start({
            progress: clamp(movement[0] / Math.min(window.innerWidth, 400), -0.5, 0.5),
            x: `${(movement[0] / window.innerWidth) * 100}%`,
            scale: isMobile ? 0.8 : 1 - Math.abs(movement[0]) / window.innerWidth / 3,
          });
        } else {
          animateSwipeSpring.start({ x: '0%', scale: 1, progress: 0 });
        }
      } else {
        animateSwipeSpring.start({ x: `${swipe[0] * 100}%`, progress: swipe[0] * 0.5, scale: 0.3 });
      }
    },
    {
      axis: 'x',
      pointer: { touch: true },
      swipe: { distance: 130 },
    },
  );
  let [swipeSpring, animateSwipeSpring] = useSpring(
    { x: '0%', scale: 1, progress: 0, config: { tension: 400 }, immediate: !userId },
    [userId],
  );
  let isMobile = useMediaQuery('(max-width: 680px)');
  let lb = useLightbox();
  let [activeImage, setActiveImage] = useState(data?.image);

  useEffect(() => {
    lb.close();
  }, [isMobile]);

  if (!data) {
    return null;
  }

  return (
    <>
      <LightBox css={[!isMobile && tw`flex flex-col justify-center`]}>
        {isMobile ? (
          <div css={[tw`flex flex-col gap-2 pt-2`]}>
            {data.photos.map((p) => (
              <img src={p} css={[tw`w-full`]} />
            ))}
          </div>
        ) : (
          <div css={[tw`flex justify-center`]}>
            <img src={activeImage} />
          </div>
        )}
      </LightBox>

      <div css={[md(tw`flex gap-6 p-8 px-12`)]}>
        <div
          {...bindDrag()}
          style={{ position: 'relative', touchAction: 'pan-y' }}
          css={md({ flex: '0 0 40%' })}
        >
          <animated.div
            css={[{ transformOrigin: 'top center' }]}
            style={{
              x: swipeSpring.x,
              scale: swipeSpring.scale,
              opacity: swipeSpring.progress.to([-0.5, 0, 0.5], [0, 1, 0]),
            }}
          >
            {isMobile && <UserInfoPicture user={data} profileView showInfo={isMobile} />}

            <div css={[tw`hidden`, md(tw`flex flex-col gap-2`)]}>
              <img
                draggable={false}
                src={activeImage ?? data.image}
                css={[tw`w-full rounded-xl`, { aspectRatio: '1/1.59', objectFit: 'cover' }]}
                onDoubleClick={() => lb.toggle()}
              />

              <div css={[tw`flex flex-wrap justify-between gap-2`]}>
                {data.photos.map((p) => (
                  <div css={[tw`rounded`, { flex: '0 0 30%' }]}>
                    <img
                      src={p}
                      css={[tw`max-w-full rounded-xl`, { aspectRatio: '1', objectFit: 'cover' }]}
                      onClick={() => setActiveImage(p)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </animated.div>
        </div>

        <animated.div
          css={[{ transformOrigin: 'top center' }]}
          style={{
            x: swipeSpring.x,
            opacity: swipeSpring.progress.to([-0.5, 0, 0.5], [0, 1, 0]),
          }}
        >
          <UserInfo user={data} />
        </animated.div>
      </div>

      <Modal>
        <animated.div
          style={{
            scale: swipeSpring.progress.to([0.1, 0.5], [0, 1], 'clamp'),
            x: '-50%',
            y: '-50%',
            transformOrigin: 'center',
          }}
          css={[tw`fixed top-1/2 left-1/2`]}
        >
          <Heart
            size={128}
            stroke="none"
            fill={`url(#${LOGO_GRAD_ID})`}
            css={[{ filter: 'drop-shadow(3px 3px 2px #0004)' }]}
          />
        </animated.div>
        <animated.div
          style={{
            scale: swipeSpring.progress.to([-0.5, -0.1], [1, 0], 'clamp'),
            x: '-50%',
            y: '-50%',
            transformOrigin: 'center',
          }}
          css={[tw`fixed top-1/2 left-1/2`]}
        >
          <Slash
            size={96}
            stroke={`url(#${LOGO_GRAD_ID})`}
            css={[{ filter: 'drop-shadow(3px 3px 2px #0004)' }]}
          />
        </animated.div>
      </Modal>
    </>
  );
};
