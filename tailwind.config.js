/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // the custom shadow from the UI design
      boxShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'custom-blue': `#1E2772`,
        'custom-grey': `#555555`,
      }
    },
  },
  plugins: [],
}