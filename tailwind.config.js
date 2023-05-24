/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      width: {
        'w-xs': '5%',
        'w-sm': '10%',
        'w-md': '15%',
        'w-lg': '20%',
        'w-xl': '25%',
      }
    }
  },
  plugins: [],
}

