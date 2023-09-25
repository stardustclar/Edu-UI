/** @type {import('tailwindcss').Config} */
export default {
  content:["./src/**/*.{jsx, js}"],
  theme: {
    extend: {
      colors: {
        'midblue': '#21242D',
        'subblue': '#333743',
        'lightblue': '#458CFF' ,
        'orange': '#FF5C5C',
        'orange2': '#FFB46D',
        'grey': '#AFB3C1',
      },
      fontFamily: {
        'DidactGothic': ['Didact Gothic'],
        'Poppins': ['Poppins'],
        'Aeonik': ['Aeonik']
      }
    },
  },
  plugins: [],
}

