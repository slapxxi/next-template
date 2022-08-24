import type { CSSInterpolation } from '@emotion/serialize';

export let sm = (...styles: Array<CSSInterpolation>) => ({
  '@media screen and (min-width: 320px)': styles,
});

export let md = (...styles: Array<CSSInterpolation>) => ({
  '@media screen and (min-width: 768px)': styles,
});

export let lg = (...styles: Array<CSSInterpolation>) => ({
  '@media screen and (min-width: 1024px)': styles,
});

export let xl = (...styles: Array<CSSInterpolation>) => ({
  '@media screen and (min-width: 1290px)': styles,
});
