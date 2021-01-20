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
    fontSize: {
      '5xl': '3rem'
    },
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
