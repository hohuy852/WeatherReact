module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center: true,
    },
    extend: {
      backgroundImage:{
        'weather': "url('/src/assets/bg/weather.jpg')"
      },
      width: {
        card: '612px'
      },
      height: {
        card: '304px'
      }
    },
  },
  plugins: [],
}
