
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steelBlue: "hsla(208, 83%, 37%, 1)",
        crimson: "hsla(359, 67%, 52%, 1)",
        orangeRed: "hsla(45, 97%, 59%, 1)",
        darkSlateBlue: "hsla(227, 100%, 19%, 1)",
        dimGray: "hsla(0, 0%, 42%, 1)",
        Black: "hsla(0, 0%, 23%, 1)",
      },
    },
  },
  plugins: [],
}
