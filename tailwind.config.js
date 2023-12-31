/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_module/preline/dist/*.js"
    ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('preline/plugin')
    ],
}

