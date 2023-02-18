const plugin = require('tailwindcss/plugin');

const colors = {
  black: ['0', '0%', '16%'],

  'lightGray-100': ['223', '47%', '97%'],
  'lightGray-200': ['223', '64%', '96%'],
  'lightGray-300': ['232', '17%', '78%'],
  'lightGray-400': ['232', '17%', '75%'],
  'lightGray-500': ['232', '1%', '66%'],

  'lightBlue-100': ['223', '64%', '96%'],
  'lightBlue-200': ['223', '64%', '96%'],
  'lightBlue-300': ['223', '83%', '88%'],
  'lightBlue-400': ['223', '83%', '80%'],
  'lightBlue-500': ['222', '83%', '77%'],
  'lightBlue-600': ['223', '100%', '72%'],

  'mediumBlue-400': ['224', '81%', '40%'],
  'mediumBlue-500': ['224', '81%', '50%'],

  'mediumGray-300': ['224', '29%', '91%'],
  'mediumGray-400': ['232', '19%', '78%'],
  'mediumGray-500': ['232', '12%', '64%'],
  'mediumGray-600': ['224', '19%', '46%'],

  'mediumOrange-400': ['27', '97%', '70%'],
  'mediumOrange-500': ['27', '93%', '65%'],

  'mediumGreen-500': ['138', '46%', '47%'],

  'darkGray-200': ['0', '0%', '66%'],
  'darkGray-300': ['0', '1%', '48%'],
  'darkGray-400': ['0', '1%', '18%'],
  'darkGray-500': ['0', '0%', '14%'],
};

const mappedColors = Object.fromEntries(
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
        DEFAULT: '20px',
        md: '20px',
        lg: '20px',
      },
    },
    extend: {
      colors: mappedColors,
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
