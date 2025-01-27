/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Lexend", 'serif'],
        heading: ["Tilt Prism", 'serif'],
        logo: ["Tangerine", 'serif']
      },
      
      colors: {
        btn: '#343a40',
        primary: '#212529',
        primgray: '#212529',
      },

      animation: {
        'spin-slow': 'spin 6s linear infinite', 
        'scroll': 'scroll 50s linear infinite',

      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}