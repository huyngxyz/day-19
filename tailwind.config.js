/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montreal': ["Montreal", "sans-serif"]
      },
      colors: {
        'orange': '#F99500'
      }
    },
  },
  plugins: [],
}