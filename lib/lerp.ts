export function lerp(
  n: number,
  start1: number,
  end1: number,
  start2: number,
  end2: number,
): number {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}
