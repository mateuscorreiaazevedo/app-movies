/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        background: '#252B33',
        'background-input': '#3A3F47',
        input: '#67686D'
      }
    }
  },
  plugins: []
}
