/** @type {import('tailwindcss').Config} */
// import pix from "./src/assets/bgPix.JPG"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont : ['Montserrat', 'sans-serif'],
        pop : ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'bgPix' : 'url(src/assets/bgPix.jpg)'
      }
    },
  },
  plugins: [],
}