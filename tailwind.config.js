/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './app/*.{js,ts,tsx}', './app/login'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: "#2E8B57",
        secondary: "#Bf9A33",
      }
    },
  },
  plugins: [],
};
