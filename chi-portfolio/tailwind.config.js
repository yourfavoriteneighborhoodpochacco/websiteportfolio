/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        cream: "#F5F5F5", // example violet color
        frostbite: "#2F2E2E",
      },
    },
  },
  plugins: [],
}
