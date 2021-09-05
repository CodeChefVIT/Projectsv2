module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      'xs': '300px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors:{
        cbg: '#0A0A0A',
        cfg: '#111111',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
