/**
 * 2-dimensional vector
 */
export type Vec2 = [number, number];

export function vecSum(v1: Vec2, v2: Vec2): Vec2 {
  return [v1[0] + v2[0], v1[1] + v2[1]];
}

export function vecDiff(v1: Vec2, v2: Vec2): Vec2 {
  return [v1[0] - v2[0], v1[1] - v2[1]];
}

export function vecLen(vector: Vec2): number {
  return Math.hypot(...vector);
}
