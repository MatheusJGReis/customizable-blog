/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**/templates/**/*.html',
    '**/static/js/*.js',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '16/6': '16 / 6',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'selector',
}

