/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        'Cuisine-grey' : '#535665',
        'Swiggy-orange' : '#fc8019',
        'Item-description' : "#282C3F",
        'Cost' : "#3E4152"
      }
    },
  },
  plugins: [],
}

