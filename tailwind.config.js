module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'amatcky': ['Le Amatcky', 'sans-serif'],
      },
      colors: {
        'yell': '#FFFDF4',
      },
      backgroundImage:(theme)=>({
        'bgCol': "url('./src/img/03.png')"
      })
    },
  },
  plugins: [],
}
