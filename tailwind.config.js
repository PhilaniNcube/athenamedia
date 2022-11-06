/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Jost"', "Helvetica", "Verdana", "Tahoma", "sans-serif"],
      },
      colors: {
        peach: "#e7816b",
        "light-peach": "#ffad9b",
      },
    },
  },
  plugins: [],
};
