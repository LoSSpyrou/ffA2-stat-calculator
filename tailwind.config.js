/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'light-green': '#606c38',
        'dark-green': '#283618',
        'light-beige': '#fefae0',
        'light-brown': '#dda15e',
        'dark-brown': '#bc6c25',
      },
      borderWidth: {
        36: '36px',
      },
    },
  },
  plugins: [],
};
