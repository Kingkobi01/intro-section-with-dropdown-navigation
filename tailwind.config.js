/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: 'hsl(0, 0%, 98%)',
          200: 'hsl(0, 0%, 41%)',
          300: 'hsl(0, 0%, 8%)',
        }
      },
      fontFamily: {
        sans: ['Epilogue', 'sans-serif']
      }
    },
  },
  plugins: [],
}