import { Vec2, vecDiff, vecDiv, vecMul, vecSum } from './vec';

/**
 * Converts an array of 2D points into an SVG path
 * @param points
 * @param tension
 * @param closePath
 * @returns string
 */
export function spline(points: Vec2[], closePath: boolean = false, tension: number = 1): string {
  let splinePoints = closePath ? closePoints(points) : points;
  let startPoint = closePath ? splinePoints[1] : splinePoints[0];
  let resultPath = `M${startPoint}`;

  const LAST_POINT_INDEX = splinePoints.length - 2;
  const MAGIC_NUM = 6;

  let startIteration = closePath ? 1 : 0;
  let maxIteration = closePath ? splinePoints.length - 2 : splinePoints.length - 1;

  for (let i = startIteration; i < maxIteration; i += 1) {
    let p0 = i === 0 ? splinePoints[0] : splinePoints[i - 1];
    let p1 = splinePoints[i];
    let p2 = splinePoints[i + 1];
    let p3 = i === LAST_POINT_INDEX ? p2 : splinePoints[i + 2];

    let cp1 = vecSum(p1, vecMul(vecDiv(vecDiff(p2, p0), MAGIC_NUM), tension));
    let cp2 = vecDiff(p2, vecMul(vecDiv(vecDiff(p3, p1), MAGIC_NUM), tension));

    resultPath += `C${cp1.map((s) => s.toFixed(1))}, ${cp2.map((s) => s.toFixed(1))}, ${p2.map(
      (s) => s.toFixed(1),
    )}`;
  }

  return resultPath;
}

function closePoints(points: Vec2[]): Vec2[] {
  let copy = [...points];
  copy.unshift(points[points.length - 1]);
  copy.unshift(points[points.length - 2]);
  copy.push(points[0]);
  copy.push(points[1]);
  return copy;
}
