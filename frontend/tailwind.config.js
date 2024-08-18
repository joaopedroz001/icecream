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
      borderRadius: {
        login: '0 120px 120px 0',
        signup: '120px 0 0 120px'
      }
    },
  },
  plugins: [],
}