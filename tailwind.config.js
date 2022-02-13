module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxs': '0px',
      // => @media (min-width: 300px) { ... }
      'ssm': '600px',
    },
  },
  plugins: [],
}
