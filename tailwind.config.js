/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_module/preline/dist/*.js"
    ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin')
    ],
}

