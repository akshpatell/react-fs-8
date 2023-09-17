/** @type {import('tailwindcss').Config} */
const tailwindcssForms = require('@tailwindcss/forms');

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssForms],
};
