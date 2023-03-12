/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Jost"', "Helvetica", "Verdana", "Tahoma", "sans-serif"],
      },
      colors: {
        peach: "#e7816b",
        "light-peach": "#ffad9b",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
