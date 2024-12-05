/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        mytheme:{
          100: "#0583F2",
          200: "#023E73",
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

