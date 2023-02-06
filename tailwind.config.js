const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: ['text-lg', 'text-xl', 'text-2xl', 'rounded-xl', 'rounded-md'],
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    data: {
      checked: 'checked="true"',
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
        bg: 'hsl(var(--bg, 0 0% 100%) / <alpha-value>)',
        text: 'hsl(var(--text, 0 0% 0%) / <alpha-value>)',
        primary: 'hsl(var(--primary, 0 0% 0%) / <alpha-value>)',
        secondary: 'hsl(var(--secondary, 0 0% 100%) / <alpha-value>)',
        black: 'hsl(var(--black, 0 0% 13%) / <alpha-value>)',
        blue: 'hsl(var(--blue, 217 93% 48%) / <alpha-value>)',
        'blue-base': 'hsl(var(--blue-base, 217 93% 48%) / <alpha-value>)',
        navy: 'hsl(var(--navy, 216 46% 36%) / <alpha-value>)',
        'navy-light': 'hsl(var(--navy-light, 217 31% 46%) / <alpha-value>)',
        violet: 'hsl(var(--violet, 231 100% 90%) / <alpha-value>)',
        'violet-light': 'hsl(var(--violet-light, 230 75% 97%) / <alpha-value>)',
        'green-base': 'hsl(var(--green-base, 141 60% 78%) / <alpha-value>)',
        'blue-light': 'hsl(var(--blue-light, 217 88% 56%) / <alpha-value>)',
        'gray-base': 'hsl(var(--gray-light, 223 41% 63%) / <alpha-value>)',
        'gray-light': 'hsl(var(--gray-light, 231 88% 97%) / <alpha-value>)',
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
