export type Vector<
  TLen extends number,
  T = number,
  TResult extends unknown[] = [],
> = TResult['length'] extends TLen ? TResult : Vector<TLen, T, [T, ...TResult]>;

/**
 * 2-dimensional vector
 */
export type Vec2<T = number> = [T, T];

export type Matrix =
  | [number, number, number, number, number?, number?]
  | { a: number; b: number; c: number; d: number; e: number; f: number };

/**
 * Calculates the sum of two 2-dimensional vectors.
 *
 * @param v1 The first vector
 * @param v2 The second vector
 * @returns The sum of the two vectors
 */
export function vecSum(v1: Vec2, v2: Vec2): Vec2 {
  return [v1[0] + v2[0], v1[1] + v2[1]];
}

/**
 * Calculates the difference between two 2-dimensional vectors.
 *
 * @param v1 The first vector
 * @param v2 The second vector
 * @returns The difference between the two vectors
 */
export function vecDiff(v1: Vec2, v2: Vec2): Vec2 {
  return [v1[0] - v2[0], v1[1] - v2[1]];
}

/**
 * Multiplies a 2-dimensional vector by a scalar.
 *
 * @param vector The vector to be multiplied
 * @param scalar The scalar value
 * @returns The scaled vector
 */
export function vecMul(vector: Vec2, scalar: number): Vec2 {
  return [vector[0] * scalar, vector[1] * scalar];
}

/**
 * Divides a 2-dimensional vector by a scalar.
 *
 * @param vector The vector to be divided
 * @param scalar The scalar value
 * @returns The divided vector
 */
export function vecDiv(vector: Vec2, scalar: number): Vec2 {
  return [vector[0] / scalar, vector[1] / scalar];
}

/**
 * Calculates the length of a 2-dimensional vector.
 *
 * @param vector The vector
 * @returns The length of the vector
 */
export function vecLen(vector: Vec2): number {
  // Math.sqrt is much faster than Math.hypot in some browsers for some reason
  return Math.sqrt(vector[0] ** 2 + vector[1] ** 2);
}

/**
 * Calculates the distance between two 2-dimensional vectors.
 *
 * @param v1 The first vector
 * @param v2 The second vector
 * @returns The distance between the two vectors
 */
export function vecDist(v1: Vec2, v2: Vec2): number {
  return vecLen(vecDiff(v1, v2));
}

/**
 * Calculates the dot product of two 2-dimensional vectors.
 *
 * @param v1 The first vector
 * @param v2 The second vector
 * @returns The dot product of the two vectors
 */
export function vecDot(v1: Vec2, v2: Vec2): number {
  return v1[0] * v2[0] + v1[1] * v2[1];
}

/**
 * Transforms a 2-dimensional vector by a matrix.
 *
 * @param vector The vector to be transformed
 * @param matrix The matrix
 * @returns The transformed vector
 */
export function vecMatrixTransform(vector: Vec2, matrix: Matrix): Vec2 {
  if (Array.isArray(matrix)) {
    return vecSum(
      vecMul(matrix.slice(0, 2) as Vec2, vector[0]),
      vecMul(matrix.slice(2, 4) as Vec2, vector[1]),
    );
  }
  return vecSum(vecMul([matrix.a, matrix.b], vector[0]), vecMul([matrix.c, matrix.d], vector[1]));
}

/**
 * Calculates the angle between two 2-dimensional vectors.
 *
 * @param v1 The first vector
 * @param v2 The second vector
 * @returns The angle between the two vectors
 */
export function vecAngle(v1: Vec2, v2: Vec2): number {
  return Math.atan2(v2[1], v2[0]) - Math.atan2(v1[1], v1[0]);
}

/**
 * Converts a 2-dimensional vector to a string.
 *
 * @param vector The vector
 * @returns The string representation of the vector
 */
export function vecToString(vector: Vec2): string {
  return `${vector[0]} ${vector[1]}`;
}
