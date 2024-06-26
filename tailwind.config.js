/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      width: {
        "dashboard": "1020px"
      },
      maxWidth: {
        "dashboard": "1020px"
      }
    },
  },
  plugins: [],
}

