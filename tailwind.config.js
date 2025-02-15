/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-dark": "#090909",
        "secondary-light": "#0e0e0e",
        "primary-green": "#52FF4F",
      },
    },
  },
  plugins: [],
};
