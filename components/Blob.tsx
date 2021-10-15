import { useTheme } from '@emotion/react';
import { SVGProps, useEffect, useMemo, useRef } from 'react';
import { lerp } from '../lib/lerp';
import { SimplexNoise } from '../lib/simplexNoise';
import { spline } from '../lib/spline';
import { Vec2, vecAdd, vecMul, vecSum } from '../lib/vec';

export interface BlobProps extends SVGProps<SVGSVGElement> {
  numPoints?: number;
  radius?: number;
  speed?: number;
  canvasSize?: number;
  animate?: boolean;
  className?: string;
  /**
   * value from 0 to 2
   */
  variant?: number;
}

interface PointData {
  point: Vec2;
  origin: Vec2;
  noiseOffset: Vec2;
}

/**
 * Shared SVG gradient ID
 */
export const GRAD_ID = 'Lw3hIm46a8iNF_DJnr2Cx';

const variants = [
  'M187.5 112.5c-4 17.7-42.6 30.3-65.4 37.1c-22.7 6.8-54.9 12.1-71.1 3.8c-16.2-8.2-28.8-34.5-26-53.4c2.8-18.9 22.4-50.5 42.5-59.9c20.2-9.5 58.3-8.8 78.3 3.2c20 12.1 45.6 51.5 41.7 69.2c-4 17.7-42.6 30.3-65.4 37.1',
  'M175 100c1.7 23.3-23.2 49.7-38.3 64.2c-15.1 14.5-32.5 34.5-52.3 22.7c-19.7-11.9-61.3-67.1-66.3-93.8c-5.1-26.8 17.8-55.1 35.8-66.6c18.1-11.5 52.6-14.6 72.7-2.3c20.2 12.2 46.7 52.5 48.4 75.8c1.7 23.3-23.2 49.7-38.3 64.2',
  'M162.5 87.5c-2.6 19-20.7 52.1-35.6 66.9c-14.8 14.8-36.5 30.5-53.3 21.6c-16.8-8.8-43.5-49.3-47.5-74.9c-3.9-25.5 4.5-68.4 23.9-78.5c19.5-10.1 74.1 7 92.9 17.8c18.7 10.9 22.3 28.1 19.6 47.1c-2.6 19-20.7 52.1-35.6 66.9',
];

export let Blob: React.FC<BlobProps> = (props) => {
  let {
    numPoints = 6,
    variant = 0,
    animate = false,
    radius = 75,
    speed = 0.005,
    canvasSize = 200,
    ...rest
  } = props;

  let theme = useTheme();
  let points = useMemo(
    () => createPoints(numPoints, radius, canvasSize),
    [radius, canvasSize, numPoints],
  );
  let ref = useRef(null);

  useEffect(() => {
    let id: number;
    let path = ref.current;
    let progress = 0;

    function animation() {
      progress += speed;
      path.setAttribute(
        'd',
        spline(
          noisePoints(points, progress, radius).map((p) => p.point),
          true,
        ),
      );
      id = requestAnimationFrame(animation);
    }

    if (animate) {
      id = requestAnimationFrame(animation);
      return () => cancelAnimationFrame(id);
    }
  }, [radius, speed, animate, canvasSize, numPoints]);

  return (
    <svg
      viewBox={`0 0 ${canvasSize} ${canvasSize}`}
      fill={`var(--fill, url(#${GRAD_ID}))`}
      {...rest}
    >
      <defs>
        <linearGradient id={GRAD_ID} gradientTransform="rotate(0)">
          <stop offset="0" stopColor={theme.hotpink} />
          <stop offset="1" stopColor={theme.orange} />

          {animate && (
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              from="0 0.5 0.5"
              to="360 0.5 0.5"
              dur="4s"
              repeatCount="indefinite"
            />
          )}
        </linearGradient>
      </defs>

      {animate ? (
        <path
          d={spline(
            points.map((p) => p.point),
            true,
          )}
          ref={ref}
        />
      ) : (
        <path d={variants[variant]} />
      )}
    </svg>
  );
};

let simplexNoise = new SimplexNoise();

function createPoints(
  numPoints: number = 6,
  radius: number = 75,
  canvasSize: number = 200,
): PointData[] {
  let points = [];
  let angleStep = (Math.PI * 2) / numPoints;
  let center: Vec2 = [canvasSize / 2, canvasSize / 2];

  for (let i = 1; i <= numPoints; i++) {
    let theta = i * angleStep;
    let point = vecSum(center, vecMul([Math.cos(theta), Math.sin(theta)], radius));
    points.push({
      point,
      origin: point,
      noiseOffset: [Math.random() * 1000, Math.random() * 1000],
    });
  }

  return points;
}

function noisePoints(points, progress, radius = 75): PointData[] {
  const OFFSET = radius / 3;

  return points.map(({ origin, noiseOffset }) => {
    let [noiseOffsetX, noiseOffsetY] = vecAdd(noiseOffset, progress);
    let noisePoint = [noise(noiseOffsetX, noiseOffsetX), noise(noiseOffsetY, noiseOffsetY)];
    let newPoint = [
      lerp(noisePoint[0], -1, 1, origin[0] - OFFSET, origin[0] + OFFSET),
      lerp(noisePoint[0], -1, 1, origin[1] - OFFSET, origin[1] + OFFSET),
    ];
    return { point: newPoint, origin, noiseOffset };
  });
}

function noise(x, y) {
  return simplexNoise.noise2D(x, y);
}
