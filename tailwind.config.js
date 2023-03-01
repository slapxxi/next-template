const plugin = require('tailwindcss/plugin');

let colors = {
  primary: ['0', '0%', '0%'],
  secondary: ['0', '0%', '100%'],
  bg: ['0', '0%', '100%'],
  text: ['0', '0%', '0%'],
  black: ['0', '0%', '14%'],
  'lightGray-500': ['232', '1%', '66%'],
  'lightBlue-500': ['222', '83%', '77%'],
  'mediumBlue-500': ['224', '81%', '50%'],
  'mediumGray-500': ['232', '12%', '64%'],
  'darkGray-500': ['0', '0%', '14%'],
};

let mappedColors = Object.fromEntries(
  Object.entries(colors).map(([name, hsl]) => [
    name,
    `hsl(var(--${name}-hsl, ${hsl.join(' ')}) / <alpha-value>)`,
  ]),
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    data: {
      checked: 'checked',
      vertical: 'vertical',
      horizontal: 'horizontal',
    },
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },
    extend: {
      colors: {
        ...mappedColors,
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.no-scroll': {
          overflow: 'hidden',
        },
        '.writing-v-rl': {
          writingMode: 'vertical-rl',
        },
        '.writing-v-lr': {
          writingMode: 'vertical-lr',
        },
        '.writing-h-tb': {
          writingMode: 'horizontal-tb',
        },
        '.perspective': {
          perspective: '800px',
        },
        '.pre-3d': {
          'transform-style': 'preserve-3d',
        },
        '.cap-round': {
          'stroke-linecap': 'round',
        },
        '.line-round': {
          'stroke-linejoin': 'round',
        },
        '.content-auto': {
          'content-visibility': 'auto',
        },
        '.content-hidden': {
          'content-visibility': 'hidden',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },
      });
    }),
    // plugin(({ matchUtilities, theme }) => {
    //   matchUtilities(
    //     {
    //       tab: (value) => ({
    //         tabSize: value,
    //       }),
    //     },
    //     { values: theme('tabSize') },
    //   );
    // }),
  ],
};
