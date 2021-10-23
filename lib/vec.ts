/**
 * 2-dimensional vector
 */
export type Vec2 = [number, number];
export type Matrix = [number, number, number, number, number?, number?];

export function vecSum(v1: Vec2, v2: Vec2): Vec2 {
  return [v1[0] + v2[0], v1[1] + v2[1]];
}

export function vecDiff(v1: Vec2, v2: Vec2): Vec2 {
  return [v1[0] - v2[0], v1[1] - v2[1]];
}

export function vecAdd(vector: Vec2, scalar: number): Vec2 {
  return [vector[0] + scalar, vector[1] + scalar];
}

export function vecMul(vector: Vec2, scalar: number): Vec2 {
  return [vector[0] * scalar, vector[1] * scalar];
}

export function vecDiv(vector: Vec2, scalar: number): Vec2 {
  return [vector[0] / scalar, vector[1] / scalar];
}

export function vecLen(vector: Vec2): number {
  return Math.hypot(...vector);
}

export function vecDot(v1: Vec2, v2: Vec2): number {
  return v1[0] * v2[0] + v1[1] * v2[1];
}

export function vecMatrixTransform(vector: Vec2, matrix: Matrix): Vec2 {
  return vecSum(
    vecMul(matrix.slice(0, 2) as Vec2, vector[0]),
    vecMul(matrix.slice(2, 4) as Vec2, vector[1]),
  );
}

export function isZeroVec(vector: Vec2): boolean {
  return vector[0] === 0 && vector[1] === 0;
}

export function vecToString(vector: Vec2): string {
  return `${vector[0]} ${vector[1]}`;
}
