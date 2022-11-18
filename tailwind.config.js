/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary, 0 0% 0%) / <alpha-value>)',
        secondary: 'hsl(var(--secondary, 0 0% 100%) / <alpha-value>)',
        bg: 'hsl(var(--bg, 0 0% 100%) / <alpha-value>)',
        text: 'hsl(var(--text, 0 0% 0%) / <alpha-value>)',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
