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
    },
    screens: {
      'sm-mobile': '275px',
      // => @media (min-width: 280px) { ... }

      'md-mobile': '320px',
      // => @media (min-width: 640px) { ... }

      'mobile': '420px',
      // => @media (min-width: 320px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

