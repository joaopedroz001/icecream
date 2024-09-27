/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titleLogo: 'Joti One',
      },
      boxShadow: {
        cards: '2px 4px 8px 2px rgba(0, 0, 0, 0.25)',
      },
      dropShadow: {
        price: '0px 2px 4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}