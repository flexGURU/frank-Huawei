/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Lexend", 'serif'],
        heading: ["Tilt Prism", 'serif']

      },
      colors: {
        primary: '#343a40'
      }
    },
  },
  plugins: [],
}