/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'bg': "",
    },
    fontFamily: {
      'RB': [ "Roboto"," sans-serif"],    
      'Tinos': [  "Tinos", "serif"],    
    },
    extend: {
      backgroundImage: {
        'bg-img': "url('')",
        
      }
    },
  },
  plugins: [],
}