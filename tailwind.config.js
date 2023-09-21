/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'vanila': '#f6d788',
      'orange':'#ffa500',
      'strawberry':'#f9022b',
      'chocolate': '#411900',
      'lemon': '#fef250',
      'red': '#ff0000',
      'green': '#008000',
      'gray': '#808080',
      'white':'#ffff',
      'black': '#000'
    }
  },
  plugins: [],
}

