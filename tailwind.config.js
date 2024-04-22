/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        almost_white: 'hsl(0, 0%, 98%)',
        medium_gray: 'hsl(0, 0%, 41%)',
        almost_black: 'hsl(0, 0%, 8%)'
      },
      fontFamily: {
        sans: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

