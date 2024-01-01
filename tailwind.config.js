/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/*.{js,jsx}","./src/*.{js,jsx}","./index.html"],
  theme: {
    extend: {
      colors:{
        "bright-green" :"#b9fba1",
        "bright-yellow" : "#fdfd96",
        "bright-pink" : "#ffb2ef",
        "bright-purple" : "#C4A1FF",
        "candy-blue" : "#B3D9FF",
        "bgg" : "#f6f6eb"
      },
      boxShadow: {
        'dark-shadow': '3px 3px 0 0 black',
        'dark-shadow-l': '5px 5px 0 0 black',
      },
      maxWidth: {
        '280px': '280px',
        '150px': '150px',
      }
    },
  },
  plugins: [],
}

