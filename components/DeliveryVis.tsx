import classNames from 'classnames';
import { SVGProps, useState } from 'react';
import { WorldMap } from './WorldMap';
import { useDrag } from '@use-gesture/react';

export type DeliveryVisProps = {
  children?: React.ReactNode;
  className?: string;
};

const baseCoords = [610, 120];

const locations = [
  { name: 'Ecuador', id: 'ec', coords: [270, 290] },
  { name: 'Kenya', id: 'ke', coords: [255, 320] },
  { name: 'Columbia', id: 'co', coords: [282, 394] },
  { name: 'Chile', id: 'cl', coords: [500, 150] },
  { name: 'Holland', id: 'hol', coords: [575, 223] },
  { name: 'Israel', id: 'isr', coords: [581, 313] },
];

export const DeliveryVis = (props: DeliveryVisProps) => {
  const { children, className = '', ...rest } = props;
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const location = activeLocation !== null && locations.find((l) => l.id === activeLocation);
  const routePath = location
    ? `M${baseCoords[0]} ${baseCoords[1]}q${(location.coords[0] - baseCoords[0]) / 2} ${-20} ${
        location.coords[0] - baseCoords[0]
      } ${location.coords[1] - baseCoords[1]}`
    : '';
  const bindDrag = useDrag<React.MouseEvent<SVGSVGElement>>(
    (gesture) => {
      let ct = gesture.event.currentTarget;
      requestAnimationFrame(() => {
        ct.setAttribute('viewBox', `${220 - gesture.offset[0]} 0 420 600`);
      });
    },
    {
      axis: 'x',
      bounds: { left: -360, right: 220 },
      threshold: 3,
      preventScrollAxis: 'y',
      preventScroll: 200,
    },
  );

  function handleClick(id: string) {
    setActiveLocation(id);
  }

  return (
    <div>
      <svg
        fill="none"
        viewBox="220 0 420 600"
        className={classNames(className, 'touch-pan-y')}
        {...bindDrag()}
        {...rest}
      >
        <WorldMap width={1000} height={1000 * 0.506} />
        <Circles x={baseCoords[0]} y={baseCoords[1]} count={4} r={20} animated />
        <circle cx={baseCoords[0]} cy={baseCoords[1]} r="3" fill="#fff9" />
        <path d={routePath} stroke="white" strokeDasharray="8" id="route" className="animate-dashoffset" />
        <text
          className="fill-white font-bold uppercase"
          x={baseCoords[0]}
          y={baseCoords[1] - 10}
          textAnchor="end"
        >
          Karaganda
        </text>
        <g transform="scale(1 -1) translate(-20-10)">
          <Plane size={30} />
          {activeLocation && (
            <animateMotion dur="4s" repeatCount="indefinite" path={routePath} rotate="auto" />
          )}
        </g>
        {locations.map((item) => (
          <g onClick={() => handleClick(item.id)} key={item.id}>
            <Circles x={item.coords[0]} y={item.coords[1]} count={3} r={20} opacity={0.4} />
            <Pin
              x={item.coords[0]}
              y={item.coords[1]}
              size={item.id === activeLocation ? 30 : 16}
              active={item.id === activeLocation}
            />
            {activeLocation === item.id && (
              <text
                className="fill-white font-bold uppercase"
                x={item.coords[0] + 20}
                y={item.coords[1] - 10}
                textAnchor="start"
              >
                {item.name}
              </text>
            )}
          </g>
        ))}
      </svg>

      <h2 className="mb-3 text-center text-xs font-semibold text-slate-500">
        Доставка в Караганду занимает от <em className="em">1</em> до <em className="em">2</em> дней
      </h2>
      <ul className="flex justify-around bg-black/10 pt-9">
        {locations.map((l) => (
          <li
            key={l.id}
            className={classNames(
              l.id === activeLocation ? 'text-blue-500' : 'text-slate-500',
              'flex flex-col items-center justify-between gap-4',
            )}
            onClick={() => handleClick(l.id)}
          >
            <span className="font-bold writing-v-rl">{l.id}</span>
            <div className="flex h-24 flex-col">
              <svg
                className={classNames(
                  l.id === activeLocation ? 'h-20' : 'h-10',
                  'mt-auto w-0.5 fill-current transition-all',
                )}
              >
                <rect width="100%" height="100%" />
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

type PinProps = { size?: number; active?: boolean } & Omit<SVGProps<SVGSVGElement>, 'width' | 'height'>;

const Pin = (props: PinProps) => {
  const { x, y, size = 9, className, active = false, ...rest } = props;

  return (
    <svg
      x={x}
      y={y}
      viewBox="0 0 9 13"
      width={size}
      height={size * (13 / 9)}
      preserveAspectRatio="none"
      className={classNames(
        className,
        'overflow-visible',
        active ? 'fill-rose-600' : 'fill-navy-200 hover:fill-white',
      )}
      {...rest}
    >
      <g transform="translate(-4.4-11.8)">
        <path d="M5.07 11.83a.76.76 0 0 0-.78-.76c-.44 0-.79.32-.79.74s.33.76.78.76a.8.8 0 0 0 .79-.74Zm2.12-10.7A4.07 4.07 0 0 0 2.76.36 3.87 3.87 0 0 0 .39 3.94c0 1.1.43 2.19 1.13 3.04l2.8 3.35 2.87-3.28c1.48-1.68 1.7-4.3 0-5.92ZM3.06 2.4c.76-.7 2-.69 2.73.04.74.72.73 1.9-.03 2.6-.76.71-2 .7-2.74-.03a1.84 1.84 0 0 1-.54-1.31c0-.47.19-.94.58-1.3Z" />
      </g>
    </svg>
  );
};

export type CirclesProps = {
  children?: React.ReactNode;
  className?: string;
  x?: number | string;
  y?: number | string;
  r?: number;
  count?: number;
  animated?: boolean;
} & SVGProps<SVGSVGElement>;

export const Circles = (props: CirclesProps) => {
  const { children, className = '', r = 30, count = 3, x, y, animated = false, ...rest } = props;

  return (
    <svg className={classNames(className, 'overflow-visible')} {...rest}>
      <g
        className={classNames(animated && 'animate-ping')}
        style={{
          transformOrigin: `${typeof x === 'number' ? x + 'px' : x} ${typeof y === 'number' ? y + 'px' : y}`,
        }}
      >
        {new Array(count).fill(null).map((_, i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={(i + 1) * (r / count)}
            fill="#fff"
            fillOpacity={1 - (i / count + 0.15)}
            style={{ transformOrigin: `${x}px ${y}px` }}
          />
        ))}
      </g>
    </svg>
  );
};

export type PlaneProps = {
  children?: React.ReactNode;
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export const Plane = (props: PlaneProps) => {
  const { children, className = '', size = 17, ...rest } = props;
  return (
    <svg
      width={size}
      height={size * (12 / 17)}
      viewBox="0 0 17 12"
      className={classNames(className, 'fill-white')}
      preserveAspectRatio="none"
      {...rest}
    >
      <path d="M.7 3.53 2.21 5.2l-.47-.01c-.14.04-.23.12-.24.25l.01 1.4c0 .1.03.15.1.18.06.07.1.09.18.09l5-.03.29-.53.4-.7c.05-.1.2-.12.25-.06.07.04.09.1.09.18-.02.04 0 .08 0 .12l-2.8 4.86c.07.12.2.22.33.23.2.05.48-.09.76-.4l4.53-4.83.14-.12c.1-.09.2-.08.27 0 .1.08.07.2 0 .26l-.42.46-.5.52 3.92-.04c1.15 0 2.03-.7 2-1.54a1.31 1.31 0 0 0-.64-1.08c-.4-.27-.9-.42-1.4-.38l-4.4.05L6.4.7C5.95.3 5.56.1 5.19.21c-.29.08-.57.3-.7.59a.23.23 0 0 0 .03.23l1.82 3.02-1.86.02-2.24-1.8a.36.36 0 0 0-.35 0l-1.13.84c-.13.09-.16.24-.06.42.02-.03.02-.03 0 0Z" />
      {children}
    </svg>
  );
};
