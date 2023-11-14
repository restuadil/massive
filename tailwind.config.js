/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ECBC76',
        'secondary': '#F7CE72',
        'red': "#D61C4E"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'chewy': ['Chewy', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}