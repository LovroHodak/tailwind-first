1. npm install -D tailwindcss postcss autoprefixer
2. npx tailwindcss init
3. /tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
4. /index.css
@tailwind base;
@tailwind components;
@tailwind utilities;