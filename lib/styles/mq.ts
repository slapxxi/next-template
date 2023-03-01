import type { CSSInterpolation } from '@emotion/serialize';

export let smQuery = 'screen and (min-width: 320px)';
export let mdQuery = 'screen and (min-width: 768px)';
export let lgQuery = 'screen and (min-width: 1024px)';
export let xlQuery = 'screen and (min-width: 1290px)';
export let reducedMotionQuery = '(prefers-reduced-motion)';

let smMediaQuery = `@media ${smQuery}`;
let mdMediaQuery = `@media ${mdQuery}`;
let lgMediaQuery = `@media ${lgQuery}`;
let xlMediaQuery = `@media ${xlQuery}`;

export let sm = (...styles: Array<CSSInterpolation>) => ({
  [smMediaQuery]: styles,
});

export let md = (...styles: Array<CSSInterpolation>) => ({
  [mdMediaQuery]: styles,
});

export let lg = (...styles: Array<CSSInterpolation>) => ({
  [lgMediaQuery]: styles,
});

export let xl = (...styles: Array<CSSInterpolation>) => ({
  [xlMediaQuery]: styles,
});
