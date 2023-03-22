const plugin = require('tailwindcss/plugin');

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
        primary: 'var(--primary, hsl(0 0% 0% / <alpha-value>))',
        secondary: 'var(--secondary, hsl(0 0% 20% / <alpha-value>))',
        em: 'var(--em, hsl(84 87% 41% / <alpha-value>))',
        salad: {
          600: 'hsl(84 87% 41%)',
          700: 'hsl(130 100% 38%)',
          900: 'hsl(119 94% 14%)',
        },
      },
      keyframes: {
        slideLeft: {
          from: { transform: 'translateX(30%)' },
          to: { transform: 'none' },
        },
      },
      animation: {
        slideLeft: 'slideLeft 150ms ease-out',
      },
      fontFamily: {
        sans: ['Roboto Slab', 'sans-serif'],
        cursive: ['Caveat', 'serif'],
      },
      fontSize: {
        '2xs': '0.5rem',
      },
      borderRadius: {
        30: '30px',
        50: '50px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.px-wrap': {
          'padding-left': 'max(calc((100% - 1536px) / 2), 28px)',
          'padding-right': 'max(calc((100% - 1536px) / 2), 28px)',
        },
        '.pl-wrap': {
          'padding-left': 'max(calc((100% - 1536px) / 2), 28px)',
        },
        '.pr-wrap': {
          'padding-right': 'max(calc((100% - 1536px) / 2), 28px)',
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
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'anim-delay': (value) => ({
            'animation-delay': value,
          }),
        },
        { values: theme('transitionDelay') },
      );
    }),
  ],
};
