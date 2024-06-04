/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nav-font": ["Clash Display", "sans-serif"],
      },
      colors: {
        primary: "#FF5555",
      },
    },
  },
  plugins: [],
};
