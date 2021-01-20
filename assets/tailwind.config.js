const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: 'all',
    content: [
      './*.html',
    ],
  },  
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
      backgroundImage: theme => ({
        'cycls-pattern': 'url("https://svgshare.com/i/Rpu.svg")',
      }),
    },
  },
  variants: {},
  plugins: [],
}
