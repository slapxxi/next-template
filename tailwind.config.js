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
        primary: 'var(--primary,hsl(0 0% 0% / <alpha-value>))',
        secondary: 'var(--secondary,hsl(0 0% 100% / <alpha-value>))',
        navy: {
          100: 'hsl(211 25% 96%)',
          200: 'hsl(211 25% 86%)',
          300: 'hsl(211 25% 76%)',
          400: 'hsl(211 25% 66%)',
          500: 'hsl(211 25% 56%)',
          600: 'hsl(211 25% 46%)',
          700: 'hsl(211 25% 36%)',
          800: 'hsl(211 25% 26%)',
          900: 'hsl(211 25% 16%)',
          1000: 'hsl(211 25% 6%)',
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
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        '2xs': '0.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.span-full': {
          gridRow: '1 / -1',
          gridColumn: '1 / -1',
        },
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
