/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-dark": "#91FF6A",
        "secondary-light": "#292929",
        "primary-green": "#89FF60",
      },
    },
  },
  plugins: [],
};
