const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        upnotifylabel: '#181A1F',
        upnotifyborder: '#D8DDE9',
        upnotifyplaceholder: '#ACB1BC',
        upnotifyp: '#6D727D',
      },
    },
  },
  plugins: [],
};
