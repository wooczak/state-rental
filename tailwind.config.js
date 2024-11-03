/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "h1": "2rem",
        "h2": "1.5rem",
        "h3": "1.25rem"
      }
    },
  },
  plugins: [],
}

