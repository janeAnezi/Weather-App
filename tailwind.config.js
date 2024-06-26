/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'app-bg': "url('./src/assets/images/weatherbg.jpg')",
      },
    },
  },
  plugins: [],
}

