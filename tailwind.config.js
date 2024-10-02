/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily:{
        Inter:['Inter', 'system-ui']
      }
    },
  },
  plugins: [],
}