/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        customBlue: '#81a1c1',
        darkBlue: '#4c566a',
        lightBlue: '#87c0d0',
        buttonBlue: '#5e81ac',
        backgroundBlue: '#e5e9f0',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    darkTheme: 'light',
  },
}
